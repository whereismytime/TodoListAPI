document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "https://localhost:7202/api"; // URL бекенду

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await fetch(`${BASE_URL}/Auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include'  // обязательно, чтобы куки устанавливались
            });
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Помилка входу: ${text}`);
            }
            // Сообщение об успешном входе через SweetAlert2
            Swal.fire({
                title: 'Успішно!',
                text: 'Ви успішно увійшли!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Переадресация на todo.html
                window.location.href = "todo.html";
            });
        } catch (error) {
            Swal.fire({
                title: 'Помилка',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });
});
