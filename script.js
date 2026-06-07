document.addEventListener('DOMContentLoaded', () => {
    
    // ===================== 1. REDIRECCIÓN EN PARALELO (GOOGLE) =====================
    const btnGoogle = document.getElementById('btn-multi-google');

    if (btnGoogle) {
        btnGoogle.addEventListener('click', (e) => {
            e.preventDefault(); // Detiene el salto del href="#"

            const urlsGoogle = [
                "https://www.google.com",
                "https://trends.google.com",
                "https://analytics.google.com"
            ];

            // Despliega las 3 pestañas simultáneamente
            urlsGoogle.forEach(url => {
                window.open(url, '_blank');
            });
        });
    }

    // ===================== 2. INTERRUPTOR CLARO / OSCURO (CORREGIDO) =====================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Persistencia del tema guardado por el usuario
    if (localStorage.getItem('theme') === 'light') {
        bodyElement.classList.add('light-mode');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            bodyElement.classList.toggle('light-mode');
            
            // Setea el Storage basado en el cambio actual
            if (bodyElement.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // ===================== 3. VALIDACIÓN AVANZADA DE FORMULARIO =====================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isFormValid = true;

            const fields = [
                { id: 'form-name', errorId: 'name-error' },
                { id: 'form-email', errorId: 'email-error', isEmail: true },
                { id: 'form-message', errorId: 'message-error' }
            ];

            fields.forEach(field => {
                const input = document.getElementById(field.id);
                const parent = input.parentElement;
                let isValid = input.value.trim() !== '';

                if (isValid && field.isEmail) {
                    // Expresión regular estándar para emails válidos
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    isValid = emailRegex.test(input.value.trim());
                }

                if (!isValid) {
                    parent.classList.add('invalid');
                    isFormValid = false;
                } else {
                    parent.classList.remove('invalid');
                }
            });

            if (isFormValid) {
                alert('¡Propuesta enviada con éxito, Leandro se contactará pronto!');
                contactForm.reset();
            }
        });

        // Limpieza de mensajes de error en tiempo real mientras escribe
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                if (input.value.trim() !== '') {
                    input.parentElement.classList.remove('invalid');
                }
            });
        });
    }

    // ===================== 4. OBSERVADOR DE SCROLL (NAV-LINKS ACTIVOS) =====================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});
