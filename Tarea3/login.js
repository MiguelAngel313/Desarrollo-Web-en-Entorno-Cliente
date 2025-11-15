let formulario = document.getElementById('formulario');
let usuario = document.getElementById('usuario');
let passwd = document.getElementById('passwd');
let ver = document.getElementById('ver');

// Mostrar y ocultar contraseña
ver.addEventListener('click', f => {
    if (passwd.type == 'password') {
        passwd.type = 'text';
        ver.textContent = '🙈';
    } else {
        passwd.type = 'password';
        ver.textContent = '👀';
    }
});

// Comprobar si el usuario y la contraseña son correctos
formulario.addEventListener('submit', f => {
    f.preventDefault(); // Importante: prevenir el envío del formulario
    
    let usuarioValor = usuario.value;
    let passwdValor = passwd.value;
    
    // Obtener el objeto del usuario guardado en localStorage
    let usuarioGuardado = localStorage.getItem(usuarioValor);
    
    // Verificar si el usuario existe
    if (usuarioGuardado) {
        // Parsear el JSON para obtener los datos del usuario
        let datosUsuario = JSON.parse(usuarioGuardado);
        
        // Verificar si la contraseña es correcta
        if (datosUsuario.contrasenia === passwdValor) {
            // Guardar usuario en cookie (opcional)
            document.cookie = `usuario=${usuarioValor}; path=/`;
            
            // Redirigir al panel
            window.location.href = './panel.html';
        } else {
            // Contraseña incorrecta
            alert('Usuario o contraseña incorrectos!');
        }
    } else {
        // Usuario no existe
        alert('Usuario o contraseña incorrectos!');
    }
});