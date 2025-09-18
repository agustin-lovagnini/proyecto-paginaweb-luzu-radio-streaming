
// menus hamburguesa
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

// maruquee efecto
const contenedores = document.querySelectorAll(".mensaje-ondemand-contenido");

contenedores.forEach(contenedor => {
    contenedor.innerHTML += contenedor.innerHTML;

    let pos = 0;
    const velocidad = 0.2;

    function moverTexto() {
        pos -= velocidad;
        if (Math.abs(pos) >= contenedor.scrollWidth / 2) {
            pos = 0;
        }
        contenedor.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(moverTexto);
    }

    moverTexto();
});

// animacion programacion diaria
const programas = document.querySelectorAll('.programacion-diaria-programa');
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

programas[0].classList.add('programa-visible');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('programa-visible')) {
            entry.target.classList.add('programa-visible');
        }
    });
}, { threshold: 0.1 });

programas.forEach(programaProgramacionDiaria => observer.observe(programaProgramacionDiaria));

function getVisibleProgramas() {
    return Array.from(programas).filter(programaProgramacionDiaria => {
        const rect = programaProgramacionDiaria.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    });
}







