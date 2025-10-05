//Constantes utilizadas en todo el proceso
const divElement = document.createElement('div');
const h1Element = document.createElement('h1');
const divCountdownElement = document.createElement('div');
const divSimpleElement = document.createElement('div');

//Dias
const spanElementDias = document.createElement('span');
const pElementDias = document.createElement('p');
//Horas
const spanElementHoras = document.createElement('span');
const pElementHoras = document.createElement('p');
//Minutos
const spanElementMinutos = document.createElement('span');
const pElementMinutos = document.createElement('p');
//Segundos
const spanElementSegundos = document.createElement('span');
const pElementSegundos = document.createElement('p');

//Asignacion de clase e id a los elementos creados
divElement.className = 'container';
h1Element.className = 'titulo';
divCountdownElement.className = 'countdown';
//Dias
spanElementDias.id = 'dias';
//Horas
spanElementHoras.id = 'horas';
//Minutos
spanElementMinutos.id = 'minutos';
//Segundos
spanElementSegundos.id = 'segundos';

//Agregacion de elementos al body del documento
document.body.appendChild(divElement);
divElement.appendChild(h1Element);
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
h1Element.textContent = 'Cuenta regresiva';
//Dias
spanElementDias.textContent = '320';
pElementDias.textContent = 'Dias';
//Horas
spanElementHoras.textContent = '24';
pElementHoras.textContent = 'Horas';
//Minutos
spanElementMinutos.textContent = '20';
pElementMinutos.textContent = 'Minutos';
//Segundos
spanElementSegundos.textContent = '50';
pElementSegundos.textContent = 'Segundos';