// --- CONTROL DE MODO OSCURO / CLARO ---
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
    const isDark = bodyElement.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleUI();
});

// --- MENÚ HAMBURGUESA RESPONSIVE ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// --- VALIDACIÓN DE EMAIL EN TIEMPO REAL ---
const emailInput = document.getElementById('contact-email');
if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email && !emailPattern.test(email)) {
            emailInput.style.borderColor = '#ef4444';
            emailInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.15)';
        } else {
            emailInput.style.borderColor = 'var(--color-borde)';
            emailInput.style.boxShadow = 'none';
        }
    });
}

// --- EFECTOS DE NAVEGACIÓN Y BOX-SHADOW AL SCROLL ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        navbar.style.padding = '12px 0';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
        navbar.style.padding = '18px 0';
    }
});

// --- MANEJO DE FORMULARIO CON REDIRECCIÓN MAILTO ---
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = contactForm.querySelector('input[placeholder="Tu Nombre"]').value;
        const email = emailInput.value;
        const mensaje = contactForm.querySelector('textarea').value;

        const mailtoLink = `mailto:leo@example.com?subject=Propuesta%20Laboral%20Portafolio&body=Nombre:%20${encodeURIComponent(nombre)}%0AEmail:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(mensaje)}`;
        
        window.location.href = mailtoLink;
        alert('¡Gracias por tu interés! Se abrirá tu aplicación de correo predeterminada para enviar los datos.');
        contactForm.reset();
    });
}
