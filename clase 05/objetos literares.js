const nombre=" juan";
const dni = 1235;
const casado = true
const saludar1 = function(nombre){
    alert("hola"+ nombre + " soy una funcion ");
}
//definicion de un objeto literal sir ve para una sola persona 

const persona= {
    nombre: "lucas" ,
    apellido: " ruiz",
    dni: 12365,
    casado: false,
    edad: 21,
    //metodos 
    saludar: function(){
        alert("hola soy"+ this.nombre);
    },
    actualizarEstado: function(estado){
        this.casado= estado;

    },
    cumple: function(){
        this.edad ++;
    }
}
persona.saludar();

console.log(persona);

console.log(persona.nombre);

console.log("estacasado"+ persona.casado);

persona.casado= true;
persona.tel="1176073290";

console.log("estacasado"+ persona.casado);



