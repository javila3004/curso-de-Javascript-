/*
let edad = 21;
//declarar la funcion 
function pedirNombre(){
    let nombre = prompt("Ingrese su nombre ");
}
//llamar la funcion 
//pedirNombre();


// funcion del dolar 
function calcularDolar (parametro, valorDolarHoy){
    let dolar = 980;
    let pesos = parametro / dolar;

    let mensaje = "Tus pesos valen  " + pesos + " dolares"; 
    
    alert(mensaje);
}
let pesos =parseFloat(prompt("Ingrese sus pesos"));
let dolar = parseFloat (prompt("Ingrese el valor del dolar "));
calcularDolar(pesos,valorDolarHoy);
*/
// funcion de aumento de sueldo 
function aumentoSueldo(sueldo){
    let resultado  = sueldo * 1.10;
    return resultado;    
}
let sueldoFinal= aumentoSueldo(80000);
console.log(sueldoFinal);

//Funcion de logue0
function login(user,pass){
    if(user== "admin" && pas=="1234"){
        return true;
    }else{
        return false;
    }
}
let logueado = login("lucas","1234");

function calculadora(n1,n2,operacion){
    let resultado1;

    if (operacion == "+"){
        resultado1= n1+n2;
    }else if (operacion == "-"){
        resultado1= n1-n2;
    }else if (operacion == "/"){
        resultado1= n1/n2;
    }else if (operacion == "*"){
        resultado1= n1*n2;
    }
}




