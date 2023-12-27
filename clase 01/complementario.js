let respuesta1 =window.prompt("ingrese los datos de su carnet de conducir"," SI O NO ");

if(respuesta1 == "si" ){
    let nombre1= prompt("Ingrese su nombre: ","Nombre");
    let edad1 = window.prompt("Ingrese su edad: ","Edad");
    let altura =window. prompt("Ingrese su altura: ", "Altura");
    let pais_ciudad=window.prompt("Ingrese su Pais o Ciudad: ","Pais o Ciudad");
    

    alert("sus datos son los siguientes: " + "Nombre: "+ nombre1 +" Edad: "+edad1+" Altura: " +altura +"Pais o Ciudad: "+ pais_ciudad +
    " " + " Sus datos han sido guadados. " );
}

else { 
    (respuesta1!="no")
    
    alert("Gracias por su tiempo :)  ");

}