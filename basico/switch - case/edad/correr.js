var edad = prompt("escribe tu edad");
if (isNaN(edad) || edad < 0){
    console.log("pendejo no ha nacido")
}else{
    switch (true) {
        case edad < 12:
            console.log("usted esta muy menor para esto")
            break;
        case edad < 18:
            console.log("usted esta muy revelde pa esto");
            break;
        case edad < 60:
            console.log("usted tiene que buscar trabajo");
            break;
        case edad > 59:
            console.log("usted esta anciano :v");
            break;
    }
}