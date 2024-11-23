let numero = parseInt(prompt("Introduce un número entero positivo:"));

if (numero > 0) {
    let sumaPares = 0;
    let sumaImpares = 0;
    let i = 1;

    while (i <= numero) {
        if (i % 2 === 0) {
            sumaPares += i;
        } else {
            sumaImpares += i;
        }
        i++;
    }

    console.log(`La suma de números pares es: ${sumaPares}`);
    console.log(`La suma de números impares es: ${sumaImpares}`);
} else {
    console.log("Por favor, introduce un número entero positivo.");
}
