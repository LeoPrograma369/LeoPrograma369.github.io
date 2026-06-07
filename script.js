// ===================== CONTROLADOR DE LA REDIRECCIÓN MÚLTIPLE =====================
const btnGoogle = document.getElementById('btn-multi-google');

if (btnGoogle) {
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que la pantalla salte hacia arriba al usar '#'

        // Definimos las URLs exactas que querés abrir al mismo tiempo
        const urlsGoogle = [
            "https://www.google.com",
            "https://trends.google.com",
            "https://analytics.google.com"
        ];

        // Las recorremos y abrimos cada una en una pestaña nueva
        urlsGoogle.forEach(url => {
            window.open(url, '_blank');
        });
    });
}

// ===================== (Tus otros scripts originales debajo) =====================
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

if (localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark-mode');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
        localStorage.setItem('theme', bodyElement.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}
