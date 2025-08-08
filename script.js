const buttonHamburguesa = document.querySelector('.menu-hamburguesa');
const menuItems = document.querySelectorAll('.contenido-menu');

buttonHamburguesa.addEventListener('click', () => {
    menuItems.forEach(item => {
        item.classList.toggle('active');
    });
    buttonHamburguesa.classList.toggle('active');
    const icon = buttonHamburguesa.querySelector('i');
    if (buttonHamburguesa.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

const programas = document.querySelectorAll('.programacion-diaria-programa');
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

programas[0].classList.add('programa-visible');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('programa-visible')) {
            entry.target.classList.add('programa-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

programas.forEach(programa => observer.observe(programa));


