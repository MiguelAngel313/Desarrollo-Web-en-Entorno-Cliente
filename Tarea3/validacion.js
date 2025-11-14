let usuario = document.getElementById('usuario');
let passwd = document.getElementById('passwd');
let telefono = document.getElementById('tlf');
let passwd2 = document.getElementById('passwd2');
let check = document.getElementById('mayor');
let edad = document.getElementById('edad');
let contador = 0;

//Control de errores en el campo de usuario

usuario.addEventListener('change', f=>{
    if (usuario.value.length < 3 && usuario.value.length > 0) {
        if (contador == 0) {
            mostrarError(usuario, 'El usuario debe contener al menos 3 caracteres!');
            contador=1;
        }
    }else{
        contador = 0;
        mostrarSuccess(usuario);
    }
});

//Control de errores en el campo de contrasenia

passwd.addEventListener('change', f =>{
    if ((tieneMayusculaYMinuscula(passwd.value) && passwd.value.length > 7) ||passwd.value.length == 0){
        contador = 0;
        mostrarSuccess(passwd);
    }else{
        if (contador == 0) {
            mostrarError(passwd, 'La contraseña debe contener al menos 8 caracteres y tener mayúsculas y minúsculas!');
            contador=1;
        }
    }
});

//Control de errores en el campo de telefono

telefono.addEventListener('change', f =>{
    if (telefono.value.length == 0) {
        contador = 0;
        mostrarSuccess(telefono);
    }else{
    if ((telefono.value.length != 9 || !soloNumeros(telefono.value))&& telefono.value.length != 0) {
        if (contador == 0) {
            mostrarError(telefono, 'El formato del telefonmo no es correcto!');
            contador=1;
        }
    }else{
        contador = 0;
        mostrarSuccess(telefono);
    }
    }
});

//Control de errores en el campo de confirmar contrasenia

passwd2.addEventListener('change', f =>{
    if (passwd2.value != passwd.value) {
        if (contador == 0) {
            mostrarError(passwd2, 'Las contraseñas no coinciden!');
            contador=1;
        }
    }else{
        contador = 0;
        mostrarSuccess(passwd2);
    }
});

//Control de checkbox
check.addEventListener('change', f=>{
    if (check.checked) {
        edad.style.display = 'inline';
    }else{
        edad.value = '';
        edad.style.display = 'none';
    }
});

//Control de edad
edad.addEventListener('change', f=>{
    if ((edad.value < 18 || edad.value > 99) && edad.value.length != 0 ) {
        if (contador == 0) {
            mostrarError(edad, 'Debes introducir una edad válida!(18-99)');
            contador=1;
        }
    }else{
        contador = 0;
        mostrarSuccess(edad);
    }
})

//Funciones adicionales para muestreo de mensajes y validaciones
function mostrarError(elemento, mensaje){
    let elementoPadre = elemento.parentElement;
    let error = document.createElement('p');
    error.classList.add('error');
    error.textContent = mensaje;
    elementoPadre.appendChild(error);    
};

function mostrarSuccess(elemento){
    let elementoPadre = elemento.parentElement;
    let success = elementoPadre.querySelector('p');
    elementoPadre.removeChild(success);
};

function tieneMayusculaYMinuscula(palabra) {
    const tieneMayuscula = /[A-Z]/.test(palabra);
    const tieneMinuscula = /[a-z]/.test(palabra);
    return tieneMayuscula && tieneMinuscula;
}

function soloNumeros(cadena) {
    return /^\d+$/.test(cadena);
}