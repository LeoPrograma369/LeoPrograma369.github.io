/**
 * Controlador de Interfaz Profesional - Portafolio de Ecosistemas
 * Código 100% Nativo Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. CONTROL DE PERSISTENCIA MODO CLARO / OSCURO
    // ==========================================================================
    const botonAlternarTema = document.getElementById('theme-toggle');
    const elementoCuerpo = document.body;

    // Consultar almacenamiento local del cliente para verificar preferencias previas
    const preferenciaTemaGuardada = localStorage.getItem('interfaz-tema');

    // Inicialización del estado visual
    if (preferenciaTemaGuardada === 'light') {
        elementoCuerpo.classList.remove('dark-mode');
        elementoCuerpo.classList.add('light-mode');
    } else {
        // Modo oscuro por defecto si no hay registros previos
        elementoCuerpo.classList.add('dark-mode');
        elementoCuerpo.classList.remove('light-mode');
    }

    // Escuchador de eventos para el switch del encabezado
    if (botonAlternarTema) {
        botonAlternarTema.addEventListener('click', () => {
            if (elementoCuerpo.classList.contains('dark-mode')) {
                // Transición hacia modo claro
                elementoCuerpo.classList.remove('dark-mode');
                elementoCuerpo.classList.add('light-mode');
                localStorage.setItem('interfaz-tema', 'light');
            } else {
                // Retorno seguro a modo oscuro
                elementoCuerpo.classList.remove('light-mode');
                elementoCuerpo.classList.add('dark-mode');
                localStorage.setItem('interfaz-tema', 'dark');
            }
        });
    }

    // ==========================================================================
    // 2. LOGICA DE APERTURA SIMULTÁNEA DE ENLACES (ECOSISTEMAS)
    // ==========================================================================
    const btnEcosistemaGoogle = document.getElementById('btn-ecosistema-google');

    if (btnEcosistemaGoogle) {
        btnEcosistemaGoogle.addEventListener('click', (e) => {
            e.preventDefault();

            // Array de URLs del ecosistema de analítica y optimización
            const urlsGoogle = [
                'https://www.google.com',
                'https://trends.google.com',
                'https://analytics.google.com'
            ];

            // Apertura secuencial controlada nativa
            urlsGoogle.forEach(url => {
                window.open(url, '_blank');
            });
        });
    }

    // Lógica secundaria reutilizable para el resto de botones de tarjetas
    const botonesTarjetasSimulados = document.querySelectorAll('.btn-link-simulado');
    botonesTarjetasSimulados.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const urlDestino = e.target.getAttribute('data-url');
            if (urlDestino) {
                window.open(urlDestino, '_blank');
            }
        });
    });

});
