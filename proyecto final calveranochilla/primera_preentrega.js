let estudiante;
let nota1;
let nota2;
let promedio;
let estado;
/////////////////funciones/////////////////////////

function calcularPromedio(nota1, nota2){
    let calulo = (nota1+ nota2) /2;
    return calulo
}
function validarNombre(nombre){
    if (nombre== " " || nombre.length < 3 ){
        return false;
    } 
    else{
        return true;
    }
}
function validarNota (nota){
    if (parseFloat(nota) >= 1 && parseFloat(nota) <=10 && !isNaN(nota)){
        return true;
    } 
    else{
        return false;
    }
}
function obtenerEstado(promedio){
    if(promedio < 4 ){
        return 'DESAPROBADO';
    }else if(promedio>=4 && promedio < 7){
        return 'APROBADO';
    }else {
        return 'PROMOCIONADO';
    }
}
///////////////////logica/////////////////////////
let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes"))
for (let i=0; i <= cantidadEstudiantes; i++){
 
    do {
        estudiante = prompt(`Nombre del estudiante`);
        if ( ! validarNombre(estudiante)){
            alert("NOMBRE INVALIDO");
        } 
    } while ( ! validarNombre (estudiante))

    do {
        nota1= prompt(`Nota #1`);
        
        if ( ! validarNota(nota1)){
            alert("La nota  no es valida");
        } 
    } while ( ! validarNota (nota1))

    do {
        nota2= prompt(`Nota #2`);
        if ( ! validarNota (nota2)){
            alert('La nota es valida ');
        } 
    } while ( ! validarNota (nota2))

    promedio = calcularPromedio (nota1, nota2);
    estado= obtenerEstado (promedio);
    let mensaje = ` El estudiante: `+ estudiante + ' ' + "Estado " + estado +"\n sus notas fueron: " + nota1 +'|' + nota2 + '\n Promedio final: ' + promedio
    alert(mensaje)   
}
