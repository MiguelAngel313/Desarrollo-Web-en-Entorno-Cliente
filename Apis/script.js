let imgElement = document.querySelector(".tarjeta img");
let titleElement = document.querySelector(".tarjeta h1");
let idElement = document.querySelector(".tarjeta h2");

const pokeApi = "https://pokeapi.co/api/v2/pokemon/";

function idAleatorio(){
    return Math.floor(Math.random() *100) + 1;
}

let id = idAleatorio();

fetch(pokeApi + id)
  .then(response => response.json())
  .then(data => {
    console.log(data.name, data.sprites.front_default);

    titleElement.innerHTML='Name: '+data.name;
    imgElement.src=data.sprites.front_default;
    idElement.innerHTML ='Id: '+ data.id;

    
  })