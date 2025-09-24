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

let topPos=0;
let leftPos=0;

document.addEventListener('keydown',(e) =>{
    
    switch (e.key) {
        case "ArrowUp":
            topPos -= 10;
            break;
        case "ArrowDown":
            topPos += 10;
            break;
        case "ArrowLeft":
            leftPos -= 10;
            break;
        case "ArrowRight":
            leftPos += 10;
            break;
    
        default:
            break;
    }
    div.style.top= topPos+"px";
    div.style.left=`${leftPos}px`;
})


