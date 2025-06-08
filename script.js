function convertir() {
    try {
        let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
        if (isNaN(fahrenheit)) {
            alert("Por favor, ingrese un número válido.");
            return;
        }
        let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
        document.getElementById("celsius").value = celsius;
    } catch (error) {
        alert("Error inesperado. Inténtalo nuevamente.");
    }
}
