let bienvenida = document.getElementById("bienvenida");
let cerrarSesion = document.getElementById("cerrarSesion");
window.onload = function() {
    mostrarBienvenida();
}

//Cerrar sesión
cerrarSesion.addEventListener("click", function() {
    // Eliminar la cookie "usuario"
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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

//Cambiar estilo de pagina
function alternarClases() {
    const elemento = document.getElementById("tema");
    if (elemento) {
        if (elemento.classList.contains("light")) {
            elemento.classList.remove("light");
            document.body.classList.remove("light");
            elemento.classList.add("dark");
            document.body.classList.add("dark")
        } else {
            elemento.classList.remove("dark");
            document.body.classList.remove("dark");
            elemento.classList.add("light");
            document.body.classList.add("light");
        }
    }
}