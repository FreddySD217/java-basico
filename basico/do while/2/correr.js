let total = 0;
let continuar;

do {
    let menu = `
    Elige una opción del menú:
    1. Hamburguesa - $5
    2. Papas Fritas - $3
    3. Refresco - $2
    4. Helado - $4
    `;
    let opcion = parseInt(prompt(menu));

    switch (opcion) {
        case 1:
            total += 5;
            console.log("Has agregado una Hamburguesa - $5");
            break;
        case 2:
            total += 3;
            console.log("Has agregado Papas Fritas - $3");
            break;
        case 3:
            total += 2;
            console.log("Has agregado un Refresco - $2");
            break;
        case 4:
            total += 4;
            console.log("Has agregado un Helado - $4");
            break;
        default:
            console.log("Opción no válida. Intenta de nuevo.");
            break;
    }

    continuar = prompt("¿Deseas agregar algo más al pedido? (sí/no):").toLowerCase();
} while (continuar === "sí");

console.log(`El total de tu pedido es: $${total}`);
console.log("¡Gracias por tu compra!");
