// Здесь минимальный скрипт: две кнопки, ведущие на разные страницы
const goLoginBtn = document.getElementById('goLogin');
const goRegisterBtn = document.getElementById('goRegister');

goLoginBtn.addEventListener('click', () => {
    window.location.href = "pages/login.html";
});

goRegisterBtn.addEventListener('click', () => {
    window.location.href = "pages/register.html";
});
