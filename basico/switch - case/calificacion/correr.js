var calificacion = prompt("escribe tu calificacion debe estar entre el 0 al 100");
if (calificacion < 101 && calificacion > -1) {
    switch (true) {
        case calificacion < 60:
            console.log("su calificacion es F");
            break;
        case calificacion < 70:
            console.log("su calificacion es D");
            break;
        case calificacion < 80:
            console.log("su calificacion es C");
            break;
        case calificacion < 90:
            console.log("su calificacion es B");
            break;
        case calificacion < 101:
            console.log("su calificacion es A");
            break;
    }
}