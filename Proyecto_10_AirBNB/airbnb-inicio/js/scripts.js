document.addEventListener('DOMContentLoaded', () => {
    // Obtener imagen
    const imagenHero = document.querySelector('.hero');

    // Definir varaibles
    let i = 0;
    let tiempo = 0;

    // Obtener arreglo de imágenes
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    console.log(imagenHero);

    setInterval(() => {
        imagenHero.style.backgroundPositionX = '-' + tiempo + 'px'

        if (tiempo > 40) {
            tiempo = 0;
            imagenHero.style.backgroundImage = `url(./img/${imagenes[i]})`;
            if (i === (imagenes.length - 1)) {
                i = 0;
            } else {
                i++;
            };
        }
        tiempo++;
    }, 100);


    // Boton Flotante
    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', e => {
        e.preventDefault();
        const footer = document.querySelector('.footer');
        if (footer.classList.contains('activo')) {
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
        } else {
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        };
    });
});