/**
 * Plataforma Front-End de Automatización - LeoPrograma369
 * Controlador Centralizado y Optimizado para SEO Técnico
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. MANEJADOR MULTI-URL (APERTURA EN SEGUNDO PLANO ASÍNCRONA)
    // ==========================================================================
    const btnMultiGoogle = document.getElementById('btn-multi-google');

    if (btnMultiGoogle) {
        btnMultiGoogle.addEventListener('click', (event) => {
            // Evita comportamientos colaterales del botón en formularios o enlaces
            event.preventDefault();

            // Conjunto estructurado de URLs para el despliegue del ecosistema
            const ecosistemaUrls = [
                'https://www.google.com',
                'https://trends.google.com',
                'https://analytics.google.com'
            ];

            // Ejecución nativa iterativa para evitar bloqueos del navegador
            ecosistemaUrls.forEach(url => {
                window.open(url, '_blank');
            });
        });
    }

    // ==========================================================================
    // 2. SISTEMA PERSISTENTE DE CAMBIO DE MODO (LIGHT / DARK CYBER)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Verificar si existe una preferencia almacenada previamente en el cliente
    const temaGuardado = localStorage.getItem('modo-color');

    // Inicializar el estado de la interfaz
    if (temaGuardado === 'light') {
        bodyElement.classList.remove('dark-mode');
        bodyElement.classList.add('light-mode');
    } else {
        // Por defecto forzamos el modo oscuro premium configurado
        bodyElement.classList.add('dark-mode');
        bodyElement.classList.remove('light-mode');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Alternancia dinámica de selectores CSS nativos
            if (bodyElement.classList.contains('dark-mode')) {
                bodyElement.classList.remove('dark-mode');
                bodyElement.classList.add('light-mode');
                localStorage.setItem('modo-color', 'light');
            } else {
                bodyElement.classList.remove('light-mode');
                bodyElement.classList.add('dark-mode');
                localStorage.setItem('modo-color', 'dark');
            }
        });
    }

    // ==========================================================================
    // 3. INTERSECTION OBSERVER OPTIMIZADO (Rendimiento Core Web Vitals)
    // ==========================================================================
    const observerConfig = {
        root: null,         // Contexto relativo al viewport del dispositivo
        threshold: 0.12,    // Se dispara cuando el 12% del elemento es visible
        rootMargin: '0px 0px -20px 0px'
    };

    const scriptObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento entra en la zona visible agregamos la clase animada
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejamos de observar para liberar memoria en el cliente
                observer.unobserve(entry.target);
            }
        });
    }, observerConfig);

    // Adjuntar observador a todas las tarjetas registradas con la clase de proyecto
    const tarjetasCargadas = document.querySelectorAll('.project-card');
    tarjetasCargadas.forEach(tarjeta => {
        scriptObserver.observe(tarjeta);
    });
});
