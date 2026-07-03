function calcularNumeros() {
    // separar los numeros por comas
    const numeros = document.getElementById('numbers').value.split(', ');
    console.log(numeros);
    // Almacenar los numeros en un array
    let numbers = [];
    for (let i = 0; i < numeros.length; i++) {
        numbers.push(parseInt(numeros[i]));
    }
    console.log(numbers);
    // Obtener el mayor y el menor
    let mayor = numbers[0];
    let menor = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > mayor) {
            mayor = numbers[i];
        }
        if (numbers[i] < menor) {
            menor = numbers[i];
        }
    }
    console.log(mayor);
    console.log(menor);
    // Obtener la suma de todos los numeros
    let suma = 0;
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }
    console.log(suma);
    // Obtener el promedio de todos los numeros
    let promedio = suma / numbers.length;
    console.log(promedio);

    // Mostrar los resultados en los campos de texto
    document.getElementById('result').value = `Mayor: ${mayor}, Menor: ${menor}, Promedio: ${promedio}`;
}