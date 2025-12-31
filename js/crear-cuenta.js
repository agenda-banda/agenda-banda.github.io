// Seleccionamos el elemento por su clase
const boton = document.querySelector('#boton');
const usuario = document.querySelector('.usuario');
const password = document.querySelector('.password');

// Asignamos el evento click
boton.onclick = function() {
    console.log(usuario.value)
    console.log(password.value)

    crearUsuario()
};

function crearUsuario() {
    if (usuario.value != "" && password.value != "") {
        // Crear objeto con los datos
        const estudiante = { usuario: usuario.value, password: password.value };

        // Guardar en localStorage
        localStorage.setItem("estudiante", JSON.stringify(estudiante));

        alert("Cuenta creada con exito")

        window.location.replace("bienvenida.html")
    } else {
        alert("Datos Vacios")
    }
}