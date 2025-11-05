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