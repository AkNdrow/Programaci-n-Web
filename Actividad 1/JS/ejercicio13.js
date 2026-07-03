function checkAge() {
    const edad = document.getElementById('age').value;
    Boolean(edad >= 18)
        ? document.getElementById('result').value = "Puedes votar"
        : document.getElementById('result').value = "No puedes votar";
}