const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e) => {
     const claseMenu = e.target.classList;

     // Selecciona el contenedor
     const contenedor = document.querySelector('.pagina'),
          flechaIzq = document.querySelector('.fa-arrow-left'),
          flechaDer = document.querySelector('.fa-arrow-right');

     if (claseMenu.contains('fa-arrow-left')) {
          // cerrar el menú lateral
          flechaDer.style.display = 'block';
          contenedor.classList.add('no-menu'); 
     } else if (claseMenu.contains('fa-arrow-right')) {
          flechaIzq.style.display = 'block';
          contenedor.classList.remove('no-menu');
     };
     e.target.style.display = 'none';
});