// Seleccionamos el elemento por su clase
const boton = document.querySelector('.boton');
const usuario = document.querySelector('.usuario');
const password = document.querySelector('.password');

// Asignamos el evento click
boton.onclick = function() {
    console.log(usuario.value)
    console.log(password.value)

    validarUsuario()
};

function validarUsuario() {
    if (usuario.value == "Estudiante" && password.value == "Acceso") {
        alert("Usuario Correcto")
    } else {
        alert("Datos Incorrectos")
    }
}