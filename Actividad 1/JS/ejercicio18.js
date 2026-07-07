// JS/ejercicio18.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar elementos del DOM
    const itemInput = document.getElementById('itemInput');
    const btnAdd = document.getElementById('btnAdd');
    const listaElementos = document.getElementById('listaElementos');

    // 2. Agregar elementos a la lista
    btnAdd.addEventListener('click', () => {
        const valor = itemInput.value.trim();

        if (valor !== "") {
            // Crear un nuevo elemento li
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            
            // Añadir el texto como nodo de texto
            const spanTexto = document.createElement('span');
            spanTexto.textContent = valor;
            
            // Crear el botón de eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.className = 'btn btn-danger btn-sm';
            btnEliminar.textContent = 'Eliminar';
            
            // 3. Eliminar elementos
            btnEliminar.addEventListener('click', () => {
                // Eliminar el li del DOM con remove()
                li.remove();
            });

            // Ensamblar el elemento de la lista
            li.appendChild(spanTexto);
            li.appendChild(btnEliminar);

            // Agregar el nuevo li al ul existente
            listaElementos.appendChild(li);

            // 4. Limpieza del campo de texto
            itemInput.value = '';
            itemInput.focus();
        } else {
            alert("Por favor, escribe un elemento antes de agregar.");
        }
    });

    // Añadir funcionalidad para presionar "Enter" en el input y agregar
    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            btnAdd.click();
        }
    });
});
