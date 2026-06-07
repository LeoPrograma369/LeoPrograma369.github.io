// --- CONTROL DE MODO OSCURO / CLARO[cite: 1, 2] ---
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

// Comprobación de estado guardado en local[cite: 1, 2]
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

// --- MENÚ HAMBURGUESA RESPONSIVE[cite: 2] ---
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

// --- EFECTOS VISUALES AL SCROLL (NAVBAR BLUR)[cite: 2] ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// --- MANEJO LOGIC FORM CON MAILTO[cite: 2] ---
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = contactForm.querySelector('input[placeholder="Tu Nombre"]').value;
        const email = document.getElementById('contact-email').value;
        const mensaje = contactForm.querySelector('textarea').value;

        const mailtoLink = `mailto:leo@example.com?subject=Propuesta%20Laboral%20Portafolio&body=Nombre:%20${encodeURIComponent(nombre)}%0AEmail:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(mensaje)}`;
        window.location.href = mailtoLink;
        alert('¡Gracias por tu interés! Se abrirá tu cliente de correo para enviar la propuesta.');
        contactForm.reset();
    });
}
