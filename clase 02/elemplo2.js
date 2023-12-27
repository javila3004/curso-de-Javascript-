/*let comida = prompt ("Ingrese el usuario ")

if (comida == "banana"|| comida == "peras"){
    alert(" Te gusta las frutas ")
}else{
    alert(" SOS vaariado en la comida ")
}
*/

let nombreEquipo1 = prompt("Ingrese el nombre del equipo");
let goles01= parseFloat(prompt("Ingrese  los goles del equipo 1 "))

let nombreEquipo2 = prompt("Ingrese el nombre del equipo");
let goles02= parseFloat(prompt("Ingrese  los goles del equipo 2 "))


if (goles01 > goles02 ){
    alert("el equipo"+ " " + nombreEquipo1 + " "+" gano ");
}else if (goles01 == goles02 ){
    alert("El equipo"+ nombreEquipo1 + " " +"empato con el"+" "+nombreEquipo2);
}else if(goles01 < goles02 ){
    alert("El quipo "+nombreEquipo2 +" "+"perdio" )
}

