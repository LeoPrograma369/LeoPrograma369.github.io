// ===================== CONTROLADOR DE LA REDIRECCIÓN MÚLTIPLE =====================
const btnGoogle = document.getElementById('btn-multi-google');

if (btnGoogle) {
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault(); // Evita saltos de pantalla indeseados por el '#'

        // URLs oficiales de Google que quieres abrir simultáneamente
        const urlsGoogle = [
            "https://www.google.com",
            "https://trends.google.com",
            "https://analytics.google.com"
        ];

        // Abrir cada enlace en una nueva pestaña
        urlsGoogle.forEach(url => {
            window.open(url, '_blank');
        });
    });
}

// ===================== CONTROLADOR DE CAMBIO DE TEMA ORIGINAL =====================
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Comprobar si el usuario ya tenía una preferencia guardada anteriormente
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    bodyElement.classList.add('dark-mode');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
        
        let theme = 'light';
        if (bodyElement.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
}
