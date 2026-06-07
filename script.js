// ===================== CONTROLADOR DE LA REDIRECCIÓN MÚLTIPLE DE GOOGLE =====================
const btnGoogle = document.getElementById('btn-multi-google');

if (btnGoogle) {
    btnGoogle.addEventListener('click', (e) => {
        e.preventDefault(); // Evita saltos de pantalla por usar el '#'

        const urlsGoogle = [
            "https://www.google.com",
            "https://trends.google.com",
            "https://analytics.google.com"
        ];

        // Abre cada uno de los tres entornos de Google en paralelo
        urlsGoogle.forEach(url => {
            window.open(url, '_blank');
        });
    });
}

// ===================== CONTROLADOR CORREGIDO DE MODO CLARO / OSCURO =====================
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Comprobar si el usuario prefirió el modo claro en su sesión anterior
if (localStorage.getItem('theme') === 'light') {
    bodyElement.classList.add('light-mode');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        // Alterna de forma segura entre los dos esquemas visuales
        bodyElement.classList.toggle('light-mode');
        
        // Guardamos la configuración elegida para que persista al recargar
        if (bodyElement.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
}
