let usuario = document.getElementById('usuario');
let passwd = document.getElementById('passwd');
let telefono = document.getElementById('tlf');
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
//Conmtinuar por aqui


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