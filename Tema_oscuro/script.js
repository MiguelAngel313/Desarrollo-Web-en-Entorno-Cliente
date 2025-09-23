const boton = document.createElement("button");
boton.id = "darkLightToggle";
const body=document.body
body.classList.add("darkMode")

const iconDark = "☀️";
const iconLight = "🌙";

boton.innerText = iconDark;

boton.addEventListener("click", () => {
  body.classList.toggle("darkMode");
  
  if (boton.contains.classList("darkMode")) {
    boton.innerText = iconDark;
    document.body.classList.replace("darkMode", "lightMode")
  } else {
    boton.innerText = iconLight;
    document.body.classList.replace("darkMode", "lightMode")
  }
});

document.body.appendChild(boton);


// Cuadrado

const div=document.getElementById("cuadrado")
div.classList.add("cuadrado")

document.addEventListener('keydown',(e) =>{
    
    switch (e.key) {
        case "ArrowUp":
            
            break;
    
        default:
            break;
    }
})


