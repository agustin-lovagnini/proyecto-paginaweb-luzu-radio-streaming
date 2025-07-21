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

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = scrollTop > lastScrollTop;
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    const visibles = getVisibleProgramas();
    if (visibles.length === 0) return;

    const ultimoVisible = visibles[visibles.length - 1];

    if (!isScrollingDown) {
        if (ultimoVisible !== programas[0]) {
            ultimoVisible.classList.remove('programa-visible');
        }
    } else {
        if (!ultimoVisible.classList.contains('programa-visible')) {
            ultimoVisible.classList.add('programa-visible');
        }
    }
});

