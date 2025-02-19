document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "https://localhost:7202/api";

    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;

        try {
            const response = await fetch(`${BASE_URL}/Auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
                credentials: 'include'
            });
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Помилка реєстрації: ${text}`);
            }
            const data = await response.json();
            Swal.fire({
                title: 'Успішно!',
                text: 'Ви успішно зареєстровані!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Переадресация на страницу авторизации
                window.location.href = "login.html";
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
