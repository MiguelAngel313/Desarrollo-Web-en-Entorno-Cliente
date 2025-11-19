let formulario = document.getElementById('formulario');
let usuario = document.getElementById('usuario');
let passwd = document.getElementById('passwd');
let ver = document.getElementById('ver');
let banner = document.getElementById('banner');
let aceptar = document.getElementById('aceptar');

//Aceptar o no las cookies
// Al cargar la página, verificar si ya se aceptaron las cookies
window.addEventListener('DOMContentLoaded', () => {
    let cookiesAceptadas = getCookie('cookiesAceptadas');
    
    if (cookiesAceptadas === 'true') {
        // Si ya se aceptaron, ocultar el banner
        banner.style.display = 'none';
    } else {
        // Si no se han aceptado, mostrar el banner
        banner.style.display = 'block';
    }
});

// Evento para el botón de aceptar cookies
aceptar.addEventListener('click', () => {
    // Guardar la aceptación en una cookie por 365 días (1 año)
    setCookie('cookiesAceptadas', 'true', 365);
    
    // Ocultar el banner
    banner.style.display = 'none';
});

// Mostrar y ocultar contraseña
ver.addEventListener('click', f => {
    if (passwd.type == 'password') {
        passwd.type = 'text';
        ver.textContent = '🙈';
    } else {
        passwd.type = 'password';
        ver.textContent = '👀';
    }
});

// Comprobar si el usuario y la contraseña son correctos
formulario.addEventListener('submit', f => {
    f.preventDefault(); // Importante: prevenir el envío del formulario
    
    let usuarioValor = usuario.value;
    let passwdValor = passwd.value;
    
    // Obtener el objeto del usuario guardado en localStorage
    let usuarioGuardado = localStorage.getItem(usuarioValor);
    
    // Verificar si el usuario existe
    if (usuarioGuardado) {
        // Parsear el JSON para obtener los datos del usuario
        let datosUsuario = JSON.parse(usuarioGuardado);
        
        // Verificar si la contraseña es correcta
        if (datosUsuario.contrasenia === passwdValor) {
            // Guardar usuario en cookie por 1 día en caso de que se hayan aceptado las cookies
            if (getCookie('cookiesAceptadas') === 'true') {
                setCookie('usuario', usuarioValor, 1);
            }
            
            
            // Redirigir al panel
            window.location.href = './panel.html';
        } else {
            // Contraseña incorrecta
            alert('Usuario o contraseña incorrectos!');
        }
    } else {
        // Usuario no existe
        alert('Usuario o contraseña incorrectos!');
    }
});

//Esta funcion crea un usuario y le da una cookie por 1 dia en este caso
// name es el nombre de la cookie
// value es el valor de la cookie
// dias es la duracion de la cookie en dias
function setCookie (name, value, dias){
	const fecha = new Date();
	fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
	let expira = "expires=" + fecha.toUTCString();
	document.cookie = `${name}=${value}; ${expira}; path=/;`;
};

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if(cookieName === name){
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}