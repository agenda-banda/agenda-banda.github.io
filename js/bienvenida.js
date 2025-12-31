document.addEventListener('DOMContentLoaded', function () {
    // Obtener estudiante del localStorage
    const estudianteGuardado = localStorage.getItem("estudiante");

    // Si no existe, redirigir a crear cuenta
    if (!estudianteGuardado) {
        alert("Debes crear una cuenta primero");
        window.location.replace("crear-cuenta.html");
    }
});

// Seleccionamos el elemento por su clase
const tareas = document.querySelector('#tareas');
const usuario = document.querySelector('#pendientes');
const password = document.querySelector('#recordatorios');

// Asignamos los eventos click
tareas.onclick = function () {
    alert("No hay tareas registradas");
};

pendientes.onclick = function () {
    alert("No hay tareas pendientes");
};

recordatorios.onclick = function () {
    alert("No hay recordatorios");
};