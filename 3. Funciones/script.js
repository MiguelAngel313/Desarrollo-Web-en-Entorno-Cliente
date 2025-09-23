// Dos formas de crear funciones en JavaScript.
//   - Declaración de función
//   - Expresión de función

//   JavaScript se ejecuta en hoisting, es decir, en dos vueltas. En la primera registra las funciones, en la segunda ya ejecuta.
//   De este modo nos da igual donde declaremos y llamemos las funciones... JS las "subirá" al ejecutar su código

/*
sumar();

// Declaración de Función (Function Declaration)
function sumar() {
  console.log(2 + 2);
}

// Expresión de Función (Function Expression)
const restar = function () {
  console.log(3 - 3);
}

restar();
*/

// Diferencias:

// Se puede invocar a sumar() antes de declarar la función, mientras que restar necesita
// que la función se haya declarado antes de su invocación

// Una función expresada nos puede servir si queremos crear la función sólo si se cumple
// una condición, ya que es algo que no podemos hacer con funciones declaradas.



////////////////////////////////////////////////////////////////////////


// Parámetros por defecto.
// Se tomarán en caso de que necesitemos que la función tome uno en caso de que no reciba


/*
function saludar(nombre = 'Desconocido', apellido = '') {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Juan');
saludar();
saludar("", "García");
*/

////////////////////////////////////////////////////////////////////////

/*
    Funciones que retornan valores.
*/
/*
let total = 0;
function agregarCarrito(precio) {
  return total += precio;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
console.log(total)
*/


////////////////////////////////////////////////////////////////////////

/*
    Arrow functions. Funciones de flecha. Notación ES6.
*/

/*
const aprendiendo = function () {
  console.log('Aprendiendo JavaScript');
}

// Notación arrow (sustituye function por la flecha, y con sólo 1 parámetro no
// hacen falta paréntesis)
const aprendiendo2 = () => {
  console.log('Aprendiendo JavaScript')
};

const aprendiendo3 = modulo => {
  console.log(`Aprendiendo ${modulo}`);
}
*/

////////////////////////////////////////////////////////////////////////

// Función anónima
// Función que no tiene un nombre asociado, lo que permite definirla y utilizarla
// directamente, a menudo asignándola a una variable, pasándola como argumento a
// otra función (callback), o ejecutándola inmediatamente

// Función anónima "saludo"
// const saludo = function () {
//   return "Hola";
// };

// saludo(); // 'Hola'
// saludo;   // ƒ () { return 'Hola'; }

const element=document.getElementById("titulo");

element.addEventListener("mouseover", ()=>{
  element.classList.add("verde")
})
element.addEventListener("mouseout", ()=>{
  element.classList.remove("verde")
})