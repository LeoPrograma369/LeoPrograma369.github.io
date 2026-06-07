/**
 * Lógica de Negocio de Interfaz de Portafolio Avanzada
 * Desarrollado nativamente en Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. GESTIÓN Y PERSISTENCIA DE MODO CLARO / OSCURO (LocalStorage)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Verificar si existe una selección previa en el almacenamiento del cliente
    const temaGuardado = localStorage.getItem('hub-theme');

    if (temaGuardado === 'light') {
        bodyElement.classList.remove('dark-mode');
        bodyElement.classList.add('light-mode');
    } else {
        // Por defecto, inicializar siempre en dark-mode según especificación
        bodyElement.classList.add('dark-mode');
        bodyElement.classList.remove('light-mode');
    }

    // Intercambio reactivo de clases al ejecutar click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (bodyElement.classList.contains('dark-mode')) {
                bodyElement.classList.replace('dark-mode', 'light-mode');
                localStorage.setItem('hub-theme', 'light');
            } else {
                bodyElement.classList.replace('light-mode', 'dark-mode');
                localStorage.setItem('hub-theme', 'dark');
            }
        });
    }

    // ==========================================================================
    // 2. SISTEMA DE ECOSISTEMAS MULTI-LINK (Estructuras de 7 URLs Limpias)
    // ==========================================================================
    const baseEcosistemas = {
        'google': [
            'https://www.google.com',
            'https://trends.google.com',
            'https://analytics.google.com',
            'https://search.google.com/search-console',
            'https://ads.google.com?subid=xs-ip-gemini-adlc',
            'https://tagmanager.google.com',
            'https://www.youtube.com'
        ],
        'gamer-rentable': [
            'https://gamerrentable.blogspot.com',
            'https://www.blogger.com',
            'https://adsense.google.com',
            'https://www.coingecko.com',
            'https://www.amazon.afiliados.com',
            'https://news.google.com',
            'https://www.pinterest.com'
        ],
        'devops': [
            'https://github.com',
            'https://github.com/features/actions',
            'https://portal.azure.com',
            'https://aws.amazon.com',
            'https://hub.docker.com',
            'https://kubernetes.io',
            'https://vercel.com'
        ]
    };

    // Delegación de eventos optimizada para controlar los clics en los botones de las tarjetas
    const contenedorTarjetas = document.querySelector('.contenedor-grid-tarjetas');
    
    if (contenedorTarjetas) {
        contenedorTarjetas.addEventListener('click', (e) => {
            // Verificar si el elemento clickeado es el botón premium violeta
            if (e.target.classList.contains('btn-ecosistema')) {
                const tarjetaPadre = e.target.closest('.tarjeta-proyecto');
                
                if (tarjetaPadre) {
                    const identificadorPlataforma = tarjetaPadre.getAttribute('data-plataforma');
                    const urlsDestino = baseEcosistemas[identificadorPlataforma];
                    
                    if (urlsDestino && Array.isArray(urlsDestino)) {
                        // Apertura iterativa limpia de los 7 enlaces en segundo plano
                        urlsDestino.forEach(url => {
                            window.open(url, '_blank');
                        });
                    }
                }
            }
        });
    }

    // ==========================================================================
    // 3. ANIMACIONES DE INTERFAZ (Intersection Observer API)
    // ==========================================================================
    const opcionesConfig = {
        root: null, // Hace referencia al viewport del navegador
        threshold: 0.1, // Se activa cuando el 10% de la tarjeta es visible
        rootMargin: '0px 0px -40px 0px'
    };

    const callbackAnimacion = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Inyección de clase utilitaria CSS para gatillar la transición fluidamente
                entry.target.classList.add('visible');
                // Dejar de observar para optimizar ciclos de procesamiento de la CPU
                observer.unobserve(entry.target);
            }
        });
    };

    const observadorNativo = new IntersectionObserver(callbackAnimacion, opcionesConfig);

    // Seleccionar y asignar el observador a todas las tarjetas de la grilla
    const tarjetasAAnimar = document.querySelectorAll('.tarjeta-proyecto');
    tarjetasAAnimar.forEach(tarjeta => {
        observadorNativo.observe(tarjeta);
    });

});
