
/*Realice la marquesina de ondemand*/
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

const contenedores = document.querySelectorAll(".mensaje-ondemand-contenido");

contenedores.forEach(contenedor => {
    contenedor.innerHTML += contenedor.innerHTML;

    let pos = 0;
    const velocidad = 0.4;

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

