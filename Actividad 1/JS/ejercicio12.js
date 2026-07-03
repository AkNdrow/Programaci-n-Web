function convertirPesosADolares() {
    const pesos = document.getElementById('pesos').value;
    const tasaDeCambio = 0.055;
    const dolares = pesos * tasaDeCambio;
    document.getElementById('dolares').value = dolares;
}