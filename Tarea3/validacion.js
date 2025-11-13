let usuario = document.getElementById('usuario');
usuario.outerHTML

usuario.addEventListener('change', f=>{
    if (usuario.value.length < 3) {
        mostrarError(usuario, 'El usuario debe contener al menos 3 letras!')
    } else {
        
    }
});

function mostrarError(elemento, mensaje){
    let elementoSpan = elemento.parentElement;
    let errorDisplay =  elementoSpan;

    elementoSpan.appendChild(errorDisplay);
    elementoSpan.textContent = mensaje;
};