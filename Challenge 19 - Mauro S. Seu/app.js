//todo .......... CHALLENGE 19 ..........

// Realice un programa que dada la vida de un personaje, indique una acción: ∙ Si la vida es menor a 50,
// que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
// Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
// Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
// La poción de vida chica cura 25 y la grande 50.

let vida = parseInt(prompt("Ingrese la vida del personaje: "));
let vidaChica = 25;
let vidaGrandee = 50;

if(vida > 0 && vida < 50){
    let vidaActual = vida + 50;
    alert(`La vida actual de nuestro personaje es de: ${vidaActual}`);
}else if(vida >= 50 && vida < 75){
    vidaActual = vida + 25;
    alert(`La vida actual del personaje es de: ${vidaActual}`);
}else if(vida >= 75){
     alert("El personaje posee demasiadas vidas.");
}else{
    alert(`'¡¡¡El personaje no existe!!!'`)
}