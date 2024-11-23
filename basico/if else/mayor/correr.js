var numero = prompt("escribe el primer numero");
var numero2 = prompt("escribe el segundo numero");
if (numero < numero2) {
    console.log(`el numero 2 (${numero2}) es mayor que el numero 1 (${numero})`);
}else if(numero > numero2) {
    console.log(`el numero 1 (${numero}) es mayor que el numero 2 (${numero2})`);
}else if(numero === numero2) {
    console.log("los dos numeros son iguales");
}