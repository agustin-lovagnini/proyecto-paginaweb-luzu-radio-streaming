const buttonHamburguesa = document.querySelector('.menu-hamburguesa');
const menu = document.querySelector('.redes-sociales');
const programacionDiaria = document.querySelector('.programacion-diaria-container');
const shopLink = document.querySelector('.shop');
const redesSociales = document.querySelector('.redes-sociales');


buttonHamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
    buttonHamburguesa.classList.toggle('active');

    const icon = buttonHamburguesa.querySelector('i');
    if (menu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});


function ajustarMenu() {
    if (window.innerWidth <= 600) {
        if (!redesSociales.contains(programacionDiaria)) {
            redesSociales.appendChild(programacionDiaria); 
        }
        if (!redesSociales.contains(shopLink)) {
            redesSociales.appendChild(shopLink);
        }
    } else {
        const navPrincipal = document.querySelector('.nav-principal .nav-container');
        const navSecundario = document.querySelector('.nav-secundario');

        if (!navPrincipal.contains(programacionDiaria)) {
            navPrincipal.appendChild(programacionDiaria);
        }

        if (!navSecundario.contains(shopLink)) {
            navSecundario.appendChild(shopLink);
        }
    }
}

ajustarMenu();
window.addEventListener('resize', ajustarMenu);
