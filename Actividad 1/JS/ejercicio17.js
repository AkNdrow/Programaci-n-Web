const manejarTareas = (() => {
    let tareas = [];

    const obtener = () => {
        const tareasGuardadas = localStorage.getItem('tareas');
        tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
        return tareas;
    };

    const guardar = () => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    const agregar = (tarea) => {
        tareas.push(tarea);
        guardar();
    };

    const eliminarPorIndice = (indice) => {
        tareas.splice(indice, 1);
        guardar();
    };

    return { obtener, agregar, eliminarPorIndice };
})();

// 2. Recuperará las tareas almacenadas en el Local Storage y mostrará la alerta
const obtenerTareas = () => {
    Swal.fire({
        title: "¡Listo!",
        text: "Tareas Cargadas",
        icon: "success",
        confirmButtonText: "Ok"
    });
    return manejarTareas.obtener();
};

// 1. Esta función agregará una nueva tarea al almacenamiento local
const agregarTarea = () => {
    const input = document.getElementById('task');
    const tarea = input.value.trim();
    if (tarea) {
        manejarTareas.agregar(tarea);
        input.value = '';
    } else {
        alert("Por favor ingrese una tarea válida");
    }
};

// 3. Permitirá eliminar tareas específicas del almacenamiento local
const eliminarTarea = (indice) => {
    manejarTareas.eliminarPorIndice(indice);
    renderizarTareas(); // Se actualiza la vista para reflejar el cambio
};

// 4. Mostrará las tareas en la página web
const renderizarTareas = () => {
    const contenedor = document.getElementById('tasks');
    const tareas = manejarTareas.obtener(); // Llama directo para no disparar la alerta

    contenedor.innerHTML = '';

    if (tareas.length === 0) {
        contenedor.innerHTML = '<p>No hay tareas.</p>';
        return;
    }

    const ul = document.createElement('ul');
    ul.className = 'list-group';

    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center mb-2';
        li.textContent = tarea;

        const btn = document.createElement('button');
        btn.className = 'btn btn-danger btn-sm';
        btn.textContent = 'Eliminar';
        btn.onclick = () => eliminarTarea(index);

        li.appendChild(btn);
        ul.appendChild(li);
    });

    contenedor.appendChild(ul);
};

document.addEventListener('DOMContentLoaded', () => {
    manejarTareas.obtener(); // Carga silenciosa al inicio
});
