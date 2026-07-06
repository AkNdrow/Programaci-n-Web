const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => {
    if (num2 === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error matemático',
            text: 'No se puede dividir por cero',
        });
        return null;
    }
    return num1 / num2;
};

function calcular(operacion) {
    const input1 = document.getElementById('numero1').value;
    const input2 = document.getElementById('numero2').value;
    const resultado = document.getElementById('resultado');
    if (input1 == '' || input2 == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No introdujiste ningun numero',
        });
        resultado.value = "";
        return;
    }
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let resultadoOperacion;
    switch (operacion) {
        case 'suma':
            resultadoOperacion = suma(num1, num2);
            break;
        case 'resta':
            resultadoOperacion = resta(num1, num2);
            break;
        case 'multiplicacion':
            resultadoOperacion = multiplicacion(num1, num2);
            break;
        case 'division':
            resultadoOperacion = division(num1, num2);
            break;
    }
    if (resultadoOperacion != null) {
        document.getElementById('resultado').value = resultadoOperacion;
    } else {
        document.getElementById('resultado').value = "";
    }
}
