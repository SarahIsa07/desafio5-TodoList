const listaDeTareas = document.querySelector("#tareasAgregadas")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const cantidadDeTareas = document.querySelector("#cantidadTareas")

let idTarea = 0;
const tareasAgregadas = [{ id: ++idTarea, descripcion: 'Tarea1', estado: false }, { id: ++idTarea, descripcion: 'Tarea2', estado: false }, { id: ++idTarea, descripcion: 'Tarea2', estado: false }]

let tareasCompletadas = 0;
cantidadTareasRealizadas.textContent = `Realizadas: ${tareasCompletadas}`

renderTareas = () => {
    let html = ""
    for (const tarea of tareasAgregadas) {
        html += `<tr id="tr-${tarea.id}">
                    <td>${tarea.id}</td>
                    <td>${tarea.descripcion}</td>
                    <td><input id="${tarea.id}" type="checkbox" onclick="cambiarEstado(${tarea.id})"></td>
                    <td><button onclick="borrarTarea(${tarea.id})">Eliminar </button></td>
                </tr>`
    }
    listaDeTareas.innerHTML = html;
    cantidadDeTareas.textContent = `Total: ${tareasAgregadas.length}`
}

renderTareas()


btnAgregar.addEventListener("click", () => {
    if (tareaInput.value != "") {
        const nuevaTarea = { id: ++idTarea, descripcion: tareaInput.value }
        tareasAgregadas.push(nuevaTarea)
        tareaInput.value = ""
    } else {
        alert("Falta agregar una tarea")
    }
    renderTareas()
})

function borrarTarea(id) {
    const index = tareasAgregadas.findIndex((ele) => ele.id == id)
    tareasAgregadas.splice(index, 1)
    renderTareas()
}

function cambiarEstado(id) {
    const valorCheckbox = document.getElementById(id);
    const tableRow = document.getElementById(`tr-${id}`);
    if (valorCheckbox.checked) {
        tareasCompletadas += 1;
        tableRow.style.color = 'green';
        tableRow.style.fontWeight = 'bold';
        cantidadTareasRealizadas.textContent = `Realizadas: ${tareasCompletadas}`
    }
    else {
        tableRow.style.color = '';
        tableRow.style.fontWeight = '';
        tareasCompletadas -= 1;
        cantidadTareasRealizadas.textContent = `Realizadas: ${tareasCompletadas}`
    }
}



