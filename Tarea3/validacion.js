const formulario = document.getElementById('formulario');
const usuario = document.querySelector('#user');
const passwd = document.getElementById('passwd');
const passwd2 = document.getElementById('passwd2');
const tlf = document.getElementById('tlf');
//Agregar funcion que permita ver si la casilla esta marcada
const mayor = document.getElementById('mayor');
const edad = document.getElementById('edad');


//Validacion de condiciones de formulario
formulario.addEventListener('submit', e => {
    e.preventDefault(); //Evita que el formulario se envie si esta vacio.

    validarInputs();
});


function validarInputs(){
     const valorUsuario = usuario.value.trim();
     const valorPasswd = passwd.value.trim();
     const valorPasswd2 = passwd2.value.trim();
     const valorTlf = tlf.value.trim();
     const valorEdad = edad.value.trim();
     
};