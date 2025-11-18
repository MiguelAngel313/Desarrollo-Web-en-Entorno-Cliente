let bienvenida = document.getElementById("bienvenida");
let cerrarSesion = document.getElementById("cerrarSesion");
let temaBtn = document.getElementById("temaBtn");
let elemento = document.getElementById("tema");


window.onload = function() {
    mostrarBienvenida();
    comprobarTema();
}

function comprobarTema(){
    if (getCookie("tema") === "light") {
        elemento.classList.add("light");
        document.body.classList.add("light");
    } else {
        elemento.classList.add("dark");
        document.body.classList.add("dark");
    }
}

//Cerrar sesión
cerrarSesion.addEventListener("click", function() {
    // Eliminar la cookie "usuario"
    document.cookie = "usuario=; expires=Thu, 01 Jan 2010 00:00:00 UTC; path=/;";
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "inicio.html";
});



//Mostrar mensaje de vienvenida con el nombre de usuario
function mostrarBienvenida() {
    // Obtener el valor de la cookie "usuario"
    const usuario = getCookie("usuario");
    console.log(usuario);
    if (usuario) {
        // Mostrar mensaje de bienvenida con el nombre de usuario
        bienvenida.textContent = `Bienvenido, ${usuario}`;
    }
}


//Obtener cookie
function getCookie(name) {
	const cookies = document.cookie.split('; ');
	
	for (let cookie of cookies) {
		const [cookieName, cookieValue] = cookie.split('=');
		if(cookieName === name){
			return decodeURIComponent(cookieValue);
		}
	}
	return null;
};

//Establecer cookie
function setCookie (name, value, dias){
	const fecha = new Date();
	fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
	let expira = "expires=" + fecha.toUTCString();
	document.cookie = `${name}=${value}; ${expira}; path=/;`;
};

//Cambiar estilo de pagina

function alternarClases() {

        if (elemento.classList.contains("light")) {
            elemento.classList.remove("light");
            document.body.classList.remove("light");
            elemento.classList.add("dark");
            document.body.classList.add("dark");
            setCookie("tema", "dark", 1);
        } else {
            elemento.classList.remove("dark");
            document.body.classList.remove("dark");
            elemento.classList.add("light");
            document.body.classList.add("light");
            setCookie("tema", "light", 1);
        }
    
}


//Alternar tema
temaBtn.addEventListener("click", alternarClases);
