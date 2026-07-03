let estudiantes = [];

function agregarEstudiante() {
    let nombreInput = document.getElementById('name').value;
    let calificacionInput = document.getElementById('grade').value;

    //convertir los datos a string y Number
    let nombre = nombreInput.trim();
    let calificacion = parseFloat(calificacionInput);

    // validar que los datos sean correctos
    if (nombre === '' || calificacion === '') {
        alert('Por favor ingrese todos los datos');
        return;
    }

    estudiantes.push({ nombre, calificacion });

    document.getElementById('name').value = '';
    document.getElementById('grade').value = '';
    console.log(estudiantes);
}

function calcularEstudiantes() {
    if (estudiantes.length === 0) {
        document.getElementById('result').value = "No hay estudiantes registrados.";
        return;
    }
    // calcular el promedio de las calificaciones
    let promedio = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        promedio += parseInt(estudiantes[i].calificacion);
    }
    promedio = promedio / estudiantes.length;
    console.log(promedio);
    // encontrar el mayor y el menor
    let calificaciones = estudiantes.map(estudiante => estudiante.calificacion);
    let mayor = Math.max(...calificaciones);
    let menor = Math.min(...calificaciones);
    let posicionMayor = calificaciones.indexOf(mayor);
    let posicionMenor = calificaciones.indexOf(menor);
    let nombreMayor = estudiantes[posicionMayor].nombre;
    let nombreMenor = estudiantes[posicionMenor].nombre;

    console.log(mayor);
    console.log(menor);
    // obtener el nombre del estudiante con la calificación más alta y la más baja

    document.getElementById('result').value = `Promedio: ${promedio}, Mayor: ${nombreMayor}, Menor: ${nombreMenor}`;
}