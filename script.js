// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to service and tool items
document.querySelectorAll('.service-item, .tool-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(22, 27, 34, 1)';
    } else {
        navbar.style.background = 'rgba(22, 27, 34, 0.95)';
    }
});

// Button click handlers
document.querySelector('.btn-primary').addEventListener('click', () => {
    alert('Getting Started! Contact us at contact@cloudopspro.com');
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
    document.querySelector('#services').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Add active state to navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Console welcome message
console.log('%c🚀 CloudOps Pro - AWS & DevOps Solutions', 'color: #FF9900; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to our website! Built with modern web technologies.', 'color: #232F3E; font-size: 14px;');
