console.log("--------------Cookies----------------");

// Sintaxis
console.log(`%c Sintaxis %c`, ` font-weight: bold; color: red;`, "");
console.log(
  `%c document.cookie = "nombreCookie=valorCookie; expires=FechaDeExpiracion; path=Ruta";%c`,
  `font-weight: bold; color: black;`,
  ""
);
// document.cookie = "nombreCookie=valorCookie; expires=FechaDeExpiracion; path=Ruta";
// expires: (opcional) Fecha de expiración de la cookie en formato GMT. Si no se proporciona, la cookie será de sesión.
// path: (opcional) Define el alcance de la cookie, a qué URLs deberían enviarse.

console.log("--------------Cookies de sesión----------------");

// Una cookie de sesión de elimina al cerrar el navegador

// Creación
document.cookie = "username=elias";
document.cookie = "password=1234";

// Lectura
let cookies = document.cookie;
console.log(`%cCookies: %c${cookies}`, ` font-weight: bold; color: blue;`, "");

// Modificación
document.cookie = "username=david";

// Eliminación (poniendo una fecha pasada)
//document.cookie = "password=; expires=Thu, 18 Dec 1970 12:00:00 UTC";
document.cookie = "password=; max-age=0";

cookies = document.cookie;
console.log("--------------Tras la eliminación----------------");
console.log(`%cCookies: %c${cookies}`, ` font-weight: bold; color: blue;`, "");

// Cookies persistentes

// Importante: Hay un límite de vida para las cookies:
// https://developer.chrome.com/blog/cookie-max-age-expires/

// Se les añade una fecha de expiración para que perduren hasta entonces
document.cookie = "lenguaje=JS; expires=Thu, 05 Jan 2024 00:00:00 UTC; path=/";

// Si queremos modificar la fecha, podemos usar directamente
document.cookie = "lenguaje=JS; expires=Thu, 21 Jan 2024 12:00:00 UTC; path=/";

// O usar una función
const oneDay = 24 * 60 * 60 * 1000;
const oneYear = oneDay * 365;
changeExpireDate("lenguaje", "JS", oneYear);

// Añade un año desde que se ejecuta la función a la cookie
function changeExpireDate(cookieName, cookieValue, newTime) {
  let now = new Date();
  let time = now.getTime();
  let expireTime = time + newTime;
  now.setTime(expireTime);
  let cookieExpireDate = now.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + "; " + cookieExpireDate;
}

// Función para obtener una cookie específica
function getCookie(cookieName) {
  let nombre = cookieName + "=";
  let cookiesAlmacenadas = document.cookie.split(";");

  for (let i = 0; i < cookiesAlmacenadas.length; i++) {
    let cookie = cookiesAlmacenadas[i];
    // Para eliminar los espacios después del ;
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nombre) == 0) {
      return cookie.substring(nombre.length, cookie.length);
    }
  }
  return "";
}

console.log("--------------Obtener valores de las cookies----------------");
console.log(getCookie("username"));
console.log(getCookie("lenguaje"));
