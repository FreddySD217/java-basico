let registroLibros = ""; // Acumulador de texto
let continuar;

do {
    let titulo = prompt("Introduce el título del libro:");
    let autor = prompt("Introduce el autor del libro:");
    let paginas = prompt("Introduce el número de páginas del libro:");

    registroLibros += `Título: ${titulo}, Autor: ${autor}, Páginas: ${paginas}\n`;

    continuar = prompt("¿Deseas registrar otro libro? (sí/no):").toLowerCase();
} while (continuar === "sí");

console.log("Lista de libros registrados:");
console.log(registroLibros);
