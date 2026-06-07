const themeToggleBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const bodyElement = document.body;

const updateToggleUI = () => {
    themeText.textContent = bodyElement.classList.contains('dark-mode') ? "Modo Oscuro" : "Modo Claro";
};

if (localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark-mode');
    updateToggleUI();
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', bodyElement.classList.contains('dark-mode') ? 'dark' : 'light');
    updateToggleUI();
});

// Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger) {
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
}
