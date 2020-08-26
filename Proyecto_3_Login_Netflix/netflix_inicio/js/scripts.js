// Validar formulario
const inputs = document.querySelectorAll('form .campo input');

// Agregar listener
inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});
inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});

// Definir funciones
function validarInput(e) {
    const estado = ['valido', 'no-valido'];
    let clase;

    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    };

    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    // Colocar div con el error
    if (clase === 'no-valido') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            // Construir mensaje
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');

            // Insertar Error
            e.target.parentElement.parentElement.insertBefore(errorDiv,
                e.target.parentElement.nextElementSibling);
        };
    } else {
        // Limpiar mensaje
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    };
};

// Mostrar u Ocultar Password
const mostrarPasswordBtn = document.querySelector('form .campo span');
mostrarPasswordBtn.addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');

    if (e.target.classList.contains('mostrar')) {
        e.target.classList.remove('mostrar');
        e.target.textContent = 'Ocultar';
        passwordInput.type = 'text';
    } else {
        // Mostrar el password
        e.target.classList.add('mostrar');

        // Cambiar el texto
        e.target.textContent = 'Mostrar';

        // Cambiamos a password
        passwordInput.type = 'password';
    };
})

