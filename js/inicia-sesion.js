// Seleccionamos el elemento por su clase
const boton = document.querySelector('#boton');
const usuario = document.querySelector('.usuario');
const password = document.querySelector('.password');

// Asignamos el evento click
boton.onclick = function() {
    console.log(usuario.value)
    console.log(password.value)

    validarUsuario()
};

function validarUsuario() {
    // Obtener estudiante del localStorage
    const estudianteGuardado = localStorage.getItem("estudiante");

    // Si no existe, redirigir a crear cuenta
    if (!estudianteGuardado) {
        alert("No existe ningún estudiante. Debes crear una cuenta.");
        window.location.replace("crear-cuenta.html");
    }

    // Convertir el JSON a objeto
    const estudiante = JSON.parse(estudianteGuardado);

    // Validar usuario y contraseña
    if (usuario.value === estudiante.usuario && password.value === estudiante.password) {
        alert("Usuario Correcto");
    } else {
        alert("Datos Incorrectos");
    }
}