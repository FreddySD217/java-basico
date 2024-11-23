let numeroHasta = parseInt(prompt("Introduce un número entero positivo para imprimir desde 0:"));

if (numeroHasta >= 0) {
    let i = 0;

    while (i <= numeroHasta) {
        console.log(i);
        i++;
    }
} else {
    console.log("Por favor, introduce un número entero positivo.");
}
