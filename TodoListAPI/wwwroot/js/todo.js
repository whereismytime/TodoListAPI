document.addEventListener("DOMContentLoaded", async () => {
    const BASE_URL = "https://localhost:7202/api";

    try {
        // Запрашиваем профиль
        const profileResp = await fetch(`${BASE_URL}/Auth/me`, {
            credentials: 'include'
        });
        if (!profileResp.ok) {
            throw new Error("Не вдалося отримати дані користувача");
        }
        const profileData = await profileResp.json();
        const username = profileData.username;
        document.getElementById("usernameLabel").textContent = username;
        document.getElementById("usernameSpan").textContent = username;
    } catch (err) {
        console.error(err);
        window.location.href = "login.html";
        return;
    }

    // Кнопка "Додати"
    const createTodoBtn = document.getElementById("createTodoBtn");
    createTodoBtn.addEventListener("click", async () => {
        const titleInput = document.getElementById("todoTitle");
        let title = titleInput.value.trim();
        if (!title) {
            alert("Введіть назву завдання!");
            return;
        }
        // Убираем потенциальные инъекции: < и >
        title = sanitizeTitle(title);

        try {
            const resp = await fetch(`${BASE_URL}/Todo`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                body: JSON.stringify({ title, description: "", isCompleted: false })
            });
            if (!resp.ok) {
                throw new Error("Помилка створення завдання");
            }
            alert("Завдання додано!");
            titleInput.value = "";
            loadTodos();
        } catch (err) {
            alert(err.message);
        }
    });

    // Кнопка "Завантажити завдання"
    document.getElementById("loadTodosBtn").addEventListener("click", loadTodos);

    // Кнопки сортировки
    document.getElementById("sortAZBtn").addEventListener("click", () => sortTodos(true));
    document.getElementById("sortZABtn").addEventListener("click", () => sortTodos(false));

    // Кнопка "Вийти"
    document.getElementById("logoutLink").addEventListener("click", async () => {
        await fetch(`${BASE_URL}/Auth/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        window.location.href = "login.html";
    });
});

let currentTodos = [];

// Удаляем символы < и > (минимальная защита от XSS)
function sanitizeTitle(title) {
    return title.replace(/[<>]/g, "");
}

async function loadTodos() {
    const BASE_URL = "https://localhost:7202/api";
    try {
        const resp = await fetch(`${BASE_URL}/Todo`, {
            credentials: 'include'
        });
        if (!resp.ok) {
            throw new Error("Помилка завантаження завдань");
        }
        currentTodos = await resp.json();
        renderTodos(currentTodos);
    } catch (err) {
        alert(err.message);
    }
}

function renderTodos(todos) {
    const listEl = document.getElementById("todoList");
    listEl.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";

        // Левая часть: чекбокс + название
        const leftDiv = document.createElement("div");
        leftDiv.className = "todo-item-left";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.isCompleted;
        checkbox.addEventListener("change", () => {
            toggleComplete(todo, checkbox.checked);
        });

        const titleSpan = document.createElement("span");
        titleSpan.className = "todo-item-title";
        if (todo.isCompleted) {
            titleSpan.classList.add("completed");
        }
        titleSpan.textContent = todo.title;

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(titleSpan);

        // Правая часть: кнопки
        const actionsDiv = document.createElement("div");
        actionsDiv.className = "todo-actions";

        // Кнопка "Редагувати"
        const editBtn = document.createElement("button");
        editBtn.classList.add("action-btn");
        editBtn.textContent = "Редагувати";
        editBtn.addEventListener("click", () => {
            startInlineEdit(li, todo);
        });

        // Кнопка "Видалити"
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("action-btn");
        deleteBtn.textContent = "Видалити";
        deleteBtn.addEventListener("click", () => {
            deleteTodo(todo);
        });

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(leftDiv);
        li.appendChild(actionsDiv);

        listEl.appendChild(li);
    });
}

// Inline-редактирование (иконки ✓ и ×)
function startInlineEdit(li, todo) {
    const leftDiv = li.querySelector(".todo-item-left");
    const titleSpan = leftDiv.querySelector(".todo-item-title");
    const oldTitle = todo.title;

    // Скрываем titleSpan
    titleSpan.style.display = "none";

    // Создаём блок inline-edit
    const inlineDiv = document.createElement("div");
    inlineDiv.className = "inline-edit";

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = oldTitle;
    editInput.maxLength = 100;

    // Кнопка "сохранить" (галочка)
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("action-btn", "save-btn");
    saveBtn.textContent = "✓";
    saveBtn.addEventListener("click", async () => {
        let newTitle = editInput.value.trim();
        if (!newTitle) {
            alert("Назва завдання не може бути пустою!");
            return;
        }
        newTitle = sanitizeTitle(newTitle);

        // Отправляем PUT
        try {
            const resp = await fetch(`https://localhost:7202/api/Todo/${todo.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                body: JSON.stringify({
                    title: newTitle,
                    description: todo.description || "",
                    isCompleted: todo.isCompleted
                })
            });
            if (!resp.ok) {
                throw new Error("Помилка редагування завдання");
            }
            todo.title = newTitle;
            inlineDiv.remove();
            titleSpan.style.display = "";
            titleSpan.textContent = newTitle;
        } catch (err) {
            alert(err.message);
        }
    });

    // Кнопка "отмена" (крестик)
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("action-btn", "cancel-btn");
    cancelBtn.textContent = "×";
    cancelBtn.addEventListener("click", () => {
        inlineDiv.remove();
        titleSpan.style.display = "";
    });

    inlineDiv.appendChild(editInput);
    inlineDiv.appendChild(saveBtn);
    inlineDiv.appendChild(cancelBtn);

    leftDiv.appendChild(inlineDiv);
}

async function toggleComplete(todo, completed) {
    try {
        const resp = await fetch(`https://localhost:7202/api/Todo/${todo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify({
                title: todo.title,
                description: todo.description || "",
                isCompleted: completed
            })
        });
        if (!resp.ok) {
            throw new Error("Помилка оновлення завдання");
        }
        todo.isCompleted = completed;
        renderTodos(currentTodos);
    } catch (err) {
        alert(err.message);
    }
}

async function deleteTodo(todo) {
    if (!confirm(`Видалити завдання "${todo.title}"?`)) {
        return;
    }
    try {
        const resp = await fetch(`https://localhost:7202/api/Todo/${todo.id}`, {
            method: "DELETE",
            credentials: 'include'
        });
        if (!resp.ok) {
            throw new Error("Помилка видалення завдання");
        }
        currentTodos = currentTodos.filter(t => t.id !== todo.id);
        renderTodos(currentTodos);
    } catch (err) {
        alert(err.message);
    }
}

// Сортировка A–Z / Z–A
function sortTodos(asc) {
    currentTodos.sort((a, b) => a.title.localeCompare(b.title));
    if (!asc) {
        currentTodos.reverse();
    }
    renderTodos(currentTodos);
}
