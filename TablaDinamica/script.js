const tabla=document.createElement("table");
const tr=document.createElement("tr");

const maximoColumnas = 2;

for (let th = 0; th < maximoColumnas; th++) {
    const thElement=document.createElement("th");
    tr.appendChild(thElement);
}
tabla.appendChild(tr);
document.body.appendChild(tabla);