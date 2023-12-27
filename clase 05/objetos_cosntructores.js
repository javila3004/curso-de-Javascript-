// objetos  construtores  para cuando se nesecita definir varios productos 
function Producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
    this.precioFinal=0;
    
    //metodos
    this.sumarIva = function(){
        this.precio= this.precio * 1.21;
        alert("El precio es "+this.precio + "| con iva es $ " + this.precioFinal)
    }
}
const Producto1 = new Producto("tv 32",360000);
const Producto2 = new Producto("celular",460000);
const Producto3 = new Producto("tablet",560000);
const Producto4 = new Producto(".computadora",660000);

Producto1.sumarIva();



//version con classe
class perro{
    constructor(nombre,color){
        this.nombre= nombre
        this.color=color
    }
    ladrar(){
        alert("woof");
    }

}

const perro1 =new perro ( "laika", " negro");
const perro2 =new perro ( "tovy", " blanco ");
const perro3 =new perro ( " lino ", " gris ");