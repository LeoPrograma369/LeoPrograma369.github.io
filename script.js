document.addEventListener('DOMContentLoaded', () => {

    // ===================== 1. DETECTOR DE APERTURA MULTI-URL =====================
    const btnMultiGoogle = document.getElementById('btn-multi-google');

    if (btnMultiGoogle) {
        btnMultiGoogle.addEventListener('click', (e) => {
            e.preventDefault();

            const ecosistemaUrls = [
                "https://www.google.com",
                "https://trends.google.com",
                "https://analytics.google.com"
            ];

            // Dispara las ventanas de manera simultánea en hilos independientes
            ecosistemaUrls.forEach(url => {
                window.open(url, '_blank');
            });
        });
    }

    // ===================== 2. CONTROL PERSISTENTE DE INTERRUPTOR DE TEMA =====================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Carga inicial basada en las preferencias previas del desarrollador
    if (localStorage.getItem('theme') === 'dark') {
        bodyElement.classList.add('dark-mode');
    } else {
        // Opcional: Podés iniciar por defecto en modo oscuro para lucir la UI de la captura
        bodyElement.classList.add('dark-mode'); 
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            bodyElement.classList.toggle('dark-mode');
            
            if (bodyElement.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // ===================== 3. OBSERVADOR DE ELEMENTOS (FADE IN UP) =====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const entranceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards';
                entranceObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
        entranceObserver.observe(card);
    });
});
