//Constantes utilizadas en todo el proceso
const divElement = document.createElement("div");
const h1Element = document.createElement("h1");
const h3Element = document.createElement("h3");
const divCountdownElement = document.createElement("div");
const divSimpleElement = document.createElement("div");
const fecha = document.createElement("input");

//Dias
const spanElementDias = document.createElement("span");
const pElementDias = document.createElement("p");
//Horas
const spanElementHoras = document.createElement("span");
const pElementHoras = document.createElement("p");
//Minutos
const spanElementMinutos = document.createElement("span");
const pElementMinutos = document.createElement("p");
//Segundos
const spanElementSegundos = document.createElement("span");
const pElementSegundos = document.createElement("p");

//Asignacion de clase e id a los elementos creados
divElement.className = "container";
h1Element.className = "titulo";
h3Element.className = "titulo";
fecha.type = "Date";
fecha.id = "fechaEntrada";
divCountdownElement.className = "countdown";
//Dias
spanElementDias.id = "dias";
//Horas
spanElementHoras.id = "horas";
//Minutos
spanElementMinutos.id = "minutos";
//Segundos
spanElementSegundos.id = "segundos";

//Agregacion de elementos al body del documento
document.body.appendChild(divElement);
divElement.appendChild(h1Element);
divElement.appendChild(h3Element);
divElement.appendChild(fecha);
divElement.appendChild(divCountdownElement);
divCountdownElement.appendChild(divSimpleElement);
//Dias
divSimpleElement.appendChild(spanElementDias);
divSimpleElement.appendChild(pElementDias);
//Horas
divSimpleElement.appendChild(spanElementHoras);
divSimpleElement.appendChild(pElementHoras);
//Minutos
divSimpleElement.appendChild(spanElementMinutos);
divSimpleElement.appendChild(pElementMinutos);
//Segundos
divSimpleElement.appendChild(spanElementSegundos);
divSimpleElement.appendChild(pElementSegundos);

//Agregar contenido a las etiquetas
h1Element.textContent = "Cuenta regresiva";
h3Element.textContent = "Introduce una fecha:";
//Dias
spanElementDias.textContent = "0";
pElementDias.textContent = "Dias";
//Horas
spanElementHoras.textContent = "0";
pElementHoras.textContent = "Horas";
//Minutos
spanElementMinutos.textContent = "0";
pElementMinutos.textContent = "Minutos";
//Segundos
spanElementSegundos.textContent = "0";
pElementSegundos.textContent = "Segundos";

//Variables globales
let intervalo;
let fechaObjetivo = null;
const unaSemana = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos
const unMes = 30 * 24 * 60 * 60 * 1000; //30 dias en milisegundos

//Funciones
function actualizarCountdown() {
  const fechaActual = new Date();
  
  // Si no hay fecha objetivo seleccionada, no hace nada
  if (!fechaObjetivo) {
    return;
  }

  const diferencia = fechaObjetivo - fechaActual;

  if (diferencia <= 0) {
    document.querySelector('.countdown').innerHTML = '¡Hoy es el día!';
    //Detener la cuenta regresiva
    clearInterval(intervalo);
    return;
  }
  if (diferencia >= unMes) {
    document.querySelector('.countdown').style.backgroundColor = '#45474B';
    document.querySelector('.countdown').style.color = '#41A67E';
  }
  else{
      if (diferencia < unMes && diferencia > unaSemana) {
          document.querySelector('.countdown').style.backgroundColor = '#45474B';
          document.querySelector('.countdown').style.color = '#FF9013';
        }
    }
if (diferencia < unaSemana) {
    document.querySelector('.countdown').style.backgroundColor = '#45474B';
    document.querySelector('.countdown').style.color = '#FF2E63';
}

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

// Event listener para cuando se selecciona una fecha
fecha.addEventListener('change', function() {
  // Convertir el valor del input a objeto Date
  fechaObjetivo = new Date(this.value);
  
  // Reiniciar el intervalo
  clearInterval(intervalo);
  intervalo = setInterval(actualizarCountdown, 1000);
  
  // Actualizar inmediatamente
  actualizarCountdown();
});

//Inicializar el intervalo (aunque no hará nada hasta que se seleccione una fecha)
intervalo = setInterval(actualizarCountdown, 1000);