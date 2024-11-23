var numero = prompt("escribe el primer numero");
var numero2 = prompt("escribe el segundo numero");
var operador = prompt("escribe el operador numerico debe estar entre estos (+ , - , * , / )");
switch (operador) {
    case '+':
        console.log(`el resultado es ${numero + numero2}`);
        break;
    case '-':
        console.log(`el resultado es ${numero - numero2}`);
        break;
    case '*':
        console.log(`el resultado es ${numero * numero2}`);
        break;
    case '/':
        console.log(`el resultado es ${numero / numero2}`);
        break;
    default:
        console.log("pendejo no sabe escribir un operador");
}