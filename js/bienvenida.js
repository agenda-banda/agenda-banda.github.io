document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem("estudiante")) {
        alert("Debes crear una cuenta primero");
        window.location.replace("crear-cuenta.html");
    }
    actualizarContadores();
});

// Elementos principales
const tareas = document.querySelector('#tareas');
const pendientes = document.querySelector('#pendientes');
const recordatorios = document.querySelector('#recordatorios');

// Modal
const modal = document.querySelector('#modalGestion');
const tituloModal = document.querySelector('#tituloModal');
const inputTexto = document.querySelector('#inputTexto');
const inputFecha = document.querySelector('#inputFecha');
const listaDatos = document.querySelector('#listaDatos');
const guardarDato = document.querySelector('#guardarDato');
const cerrarModal = document.querySelector('#cerrarModal');

let tipoActual = "";
let editIndex = null;

// Abrir modal
function abrirModal(tipo) {
    tipoActual = tipo;
    tituloModal.textContent = `Gestionar ${tipo}`;
    inputTexto.value = "";
    inputFecha.value = "";
    editIndex = null;
    renderLista();
    modal.showModal();
}

// Guardar / Editar
guardarDato.onclick = () => {
    if (inputTexto.value.trim() === "") {
        alert("La descripción es obligatoria");
        return;
    }

    const datos = obtenerDatos();

    const nuevoDato = {
        texto: inputTexto.value,
        fecha: inputFecha.value
    };

    if (editIndex !== null) {
        datos[editIndex] = nuevoDato;
        editIndex = null;
    } else {
        datos.push(nuevoDato);
    }

    guardarDatos(datos);
    inputTexto.value = "";
    inputFecha.value = "";
    renderLista();
    actualizarContadores();
};

// Renderizar lista
function renderLista() {
    listaDatos.innerHTML = "";
    const datos = obtenerDatos();

    if (datos.length === 0) {
        listaDatos.innerHTML = "<li>No hay registros</li>";
        return;
    }

    datos.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${item.texto}</strong><br>
            <small>${item.fecha || "Sin fecha"}</small><br>
            <button onclick="editarItem(${index})">Editar</button>
            <button class="secondary" onclick="eliminarItem(${index})">Eliminar</button>
        `;

        listaDatos.appendChild(li);
    });
}

// Editar
window.editarItem = (index) => {
    const datos = obtenerDatos();
    inputTexto.value = datos[index].texto;
    inputFecha.value = datos[index].fecha;
    editIndex = index;
};

// Eliminar
window.eliminarItem = (index) => {
    if (!confirm("¿Eliminar este registro?")) return;
    const datos = obtenerDatos();
    datos.splice(index, 1);
    guardarDatos(datos);
    renderLista();
    actualizarContadores();
};

// Utilidades
function obtenerDatos() {
    return JSON.parse(localStorage.getItem(tipoActual)) || [];
}

function guardarDatos(datos) {
    localStorage.setItem(tipoActual, JSON.stringify(datos));
}

// Contadores
function actualizarContadores() {
    tareas.textContent = `Tareas: ${cantidad("tareas")}`;
    pendientes.textContent = `Pendientes: ${cantidad("pendientes")}`;
    recordatorios.textContent = `Recordatorios: ${cantidad("recordatorios")}`;
}

function cantidad(tipo) {
    return (JSON.parse(localStorage.getItem(tipo)) || []).length;
}

// Eventos
tareas.onclick = () => abrirModal("tareas");
pendientes.onclick = () => abrirModal("pendientes");
recordatorios.onclick = () => abrirModal("recordatorios");

cerrarModal.onclick = () => modal.close();
