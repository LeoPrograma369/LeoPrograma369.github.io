// --- LOGICA DE MODO OSCURO / CLARO ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const bodyElement = document.body;

const updateToggleUI = () => {
    if (bodyElement.classList.contains('dark-mode')) {
        themeText.textContent = "Modo Oscuro";
    } else {
        themeText.textContent = "Modo Claro";
    }
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

// --- MENÚ RESPONSIVE (HAMBURGUESA) ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger) {
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
}

// --- REDIRECCIÓN MÚLTIPLE DE GOOGLE ---
const btnGoogle = document.getElementById('btn-multi-google');
if (btnGoogle) {
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        // Direcciones que se abrirán juntas
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
