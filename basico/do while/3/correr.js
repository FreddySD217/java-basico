let temperatura;

do {
    temperatura = parseFloat(prompt("Introduce la temperatura actual en °C:"));

    if (temperatura < 18 || temperatura > 25) {
        console.log("Temperatura fuera del rango aceptable (18°C - 25°C). Intenta de nuevo.");
    }
} while (temperatura < 18 || temperatura > 25);

console.log("Temperatura dentro del rango aceptable. ¡Todo está bien!");
