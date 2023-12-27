
const precio =parseInt(prompt( "ingrese un numero"));
const precio1 =parseFloat(prompt( "ingrese un numero"));
const saldo = 5000;
console.log (precio1);

if (precio1> saldo){
    alert("⚠️fondos insuficientes ");
}else if(precio1==saldo){
    alert(" Te quedaste sin saldo😒");
}else{
    alert("Es un producto comprable 👌");
}
