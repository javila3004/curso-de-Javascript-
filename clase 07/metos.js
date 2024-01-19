const array= ["manzana", "uva", "pera","sandia"];
// version clasica
array.forEach(function(item){
     console.log(item)})
// version moderna 
array.forEach( )

const encontrados = array.find( (item ) => item === buscar);

if (encontrados){
    alert("se encontro"+ encontrados)
}else{
    alert( "no se encontro el producto " +buscar)
}



