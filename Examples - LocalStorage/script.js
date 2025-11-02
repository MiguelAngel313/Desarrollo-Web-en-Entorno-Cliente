/**
 * LocalStorage es una API que ofrecen los navegadores.
 * No se comparte entre navegadores.
 * Se guardan en formato JSON.
 * Podemos ver el contenido en el inspector.
 */

const carrito = {
  cliente: "Paco",
};

let array = [1, 2, 3];

// Objeto/Array to JSON
const carritoToJSON = JSON.stringify(carrito);

// Almacenar usando una key
localStorage.setItem("carrito", carritoToJSON);

// Leer
const carritoJSON = localStorage.getItem("carrito");

console.log(carritoJSON);

// JSON to Objeto/Array
const JSONToCarrito = JSON.parse(carritoJSON);

console.log(JSONToCarrito);

// Actualizar
const carritoActualizado = {
  cliente: "Paco",
  productos: 0,
};
const carritoActualizadoToJSON = JSON.stringify(carritoActualizado);
localStorage.setItem("carrito", carritoActualizadoToJSON);

// Eliminar
localStorage.removeItem("carrito");
