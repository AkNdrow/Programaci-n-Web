function convertirKilometrosAMillas() {
    const kilometers = document.getElementById('kilometers').value;
    const miles = kilometers * 0.621371;
    document.getElementById('miles').value = miles;
}
