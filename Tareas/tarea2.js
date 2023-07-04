//En un establecimiento de juegos existen cuatro salas: Arcade, Consolas, Rol, 
//Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras,
//si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

let mensaje= alert("Seleccione (1,2,3 o 4) a continuación la cantidad de créditos que desea comprar para acceder a nuestras exclusivas salas de juego!")
let salas= prompt(" (1)- 4 créditos: Acceso a todas las salas\n (2)- 3 créditos: Acceso a Arcade, Consolas y Rol.\n (3)- 2 créditos: Acceso a Arcade y Consolas.\n (4)- 1 crédito: Acceso solo a Arcade")


switch (true){
        case salas == 1:
        document.write("Compraste 4 créditos:\n Acceso a todas nuestras salas!\ Arcade, Consolas, Rol y Realidad Virtual!");
        break;

        case salas == 2:
        document.write("Compraste 3 créditos:\n Acceso a Arcade, Consolas y Rol!");
        break;
        case salas == 3:
        document.write("Compraste 2 créditos:\n Acceso a Arcade y Consolas!");
        break;
        case salas == 4:
        document.write("Compraste 1 crédito:\n Acceso a Arcade!");
        break;
        default:
        alert("El dato ingresado no es válido");
        break;
}
