// Intercambiador de Modo Oscuro / Claro
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

// Menú responsive móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger) {
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
}

// CONTROLADOR DE LA REDIRECCIÓN MÚLTIPLE DE GOOGLE
const btnGoogle = document.getElementById('btn-multi-google');
if (btnGoogle) {
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el salto por usar '#'
        
        const urlsGoogle = [
            "https://www.google.com",
            "https://trends.google.com",
            "https://analytics.google.com"
        ];

        urlsGoogle.forEach(url => {
            window.open(url, '_blank');
        });
    });
}
