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


