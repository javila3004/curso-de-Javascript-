const list= [
    {id: 1,  name: "OLD FASHIONED", descripcion: "Tradicionalmente se sirve en un vaso corto llamado ‘Old Fashioned’, de ahí el nombre.", precio: 7000, stock: 10, tipo:"cotel"},
    {id: 2,  name: "WHISKY SOUR", descripcion: "Disfruta de una bebida extraordinaria lacual es ideal para cualquier ocacion.", precio: 9000, stock: "aprovado", tipo:"cotel"},
    {id: 3,  name: "NEGRONI", descripcion: "Este es uno de nuestros mejores cocteles gracias a que es un tradicional de la casa disfruta de una bebida exquisita la cual contiene", precio: 8000, stock: 20,tipo:"cotel"},
    {id: 4,  name: "MOSCOW MULE", descripcion: " Es de esas resetas qu no puedes de jar de prepaarar ", precio: 6000, stock: 15,tipo:"cotel"},
    {id: 5,  name: "DAIQUIRI", descripcion: "esta es una de nuestras mejores bebidas,degusta tu paladar con esta exquisita y refrescante coctel.", precio: 10000, stock: 5,tipo:"cotel"},
    {id: 6,  name: "Taxman Qualified", descripcion: "cer veza rubia ", precio: 5000, stock: 35,tipo:"cerveza"},
]

class Rating{
    constructor(list){
        this.list = list;
    }
    //generar id 
    addDrink(drink){
        let id = this.list.length + 1;
        drink.id =id;
        this.list.push(drink);
    }
    // retornar por id 
    getDrinkByid(id){
        const drink =this.list.find( item =>item.id === id); 
        return drink ? drink : "No exite el trago"
    }
    // FILTRAR POR tipo Y CONINCIDENCIA
    getDrinkByGuy(tipo){
        const list = this.list.filter(item => item.tipo.toLowerCase().includes(tipo.toLowerCase()));
        return list;
    }
    showDrinks(list){
        console.table(this.list);
    }
}
//funciones de validacion 
function ValidarPrecioStock (precio){
    if (parseFloat(precio) >= 1 && parseFloat(precio) <=9999999 && !isNaN(precio)){
        return true;
    } 
    else{
        return false;
    }
}
function validarDescripTipo(nombre){
    if (nombre==="cotel" || nombre==="cerveza" ){
        return false;
    } 
    else{
        return true;
    }
} 

const libro = new Rating(list);
const filtraados = libro.getDrinkByGuy("coctel")
//const cocteles  = libro.getDrinkByid(id)
console.table(filtraados);

let nombre =prompt ("Nombre del coctel o cerveza");
do{
    
    do{
    descripcion =prompt("descripcion del producto").toLowerCase();
        if ( ! validarDescripTipo(descripcion)){
            alert("DESCRIPCION INVALIDA");
        } 
    } while ( ! validarDescripTipo (descripcion))    

    do{
    precio = parseFloat(prompt("precio"));
    if ( ! ValidarPrecioStock(precio)){
        alert("EL PRECIO ES INVALIDO");
    }
    } while ( ! ValidarPrecioStock (precio))

    do{
        stock =parseFloat(prompt(" stock "));
        if ( ! ValidarPrecioStock(stock)){
            alert("EL STOCK ES INVALIDO");
        }
        } while ( ! ValidarPrecioStock (stock))
    
    
    do{
        tipo= prompt("tipo de producto").toLowerCase();
            if ( ! validarDescripTipo(tipo)){
                alert("EL TIPO ES INVALIDA");
            } 
        
        } while ( ! validarDescripTipo (tipo))    
    
    libro.addDrink({name: nombre, descripcion: descripcion, precio: precio, stock: stock, tipo: tipo })
    libro.showDrinks();
    alert("Producto agregado")
    nombre =prompt ("Nombre del coctel o cerveza");


}while (nombre.toLowerCase() != "salir")