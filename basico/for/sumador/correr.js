var cantidad = prompt("escribe la cantidad de numeros que desea sumar");
let acumulador = 0;
for (var i = 1; i-1 < cantidad; i++){
    acumulador += parseInt(prompt(`escribe el numero ${i}`));
}
console.log(`la suma de los numeros es ${acumulador} el promedio es ${acumulador/cantidad}`);