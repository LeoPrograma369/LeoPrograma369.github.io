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
// --- REDIRECCIÓN MÚLTIPLE PARA EL PROYECTO GOOGLE ---
const btnGoogle = document.getElementById('btn-multi-google');

if (btnGoogle) {
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault(); // Detiene el enlace '#' para que no salte la pantalla hacia arriba

        // Añade aquí todas las URLs de Google que quieres que se abran juntas
        const urlsGoogle = [
            "https://www.google.com",
            "https://trends.google.com",
            "https://analytics.google.com"
        ];

        // Ejecuta la apertura en pestañas separadas
        urlsGoogle.forEach(url => {
            window.open(url, '_blank');
        });
    });
}
