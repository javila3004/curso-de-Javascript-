//abstraccion : resumir un  grupo complejo de instrucciones bajo una palabra clave 

// funciones de orden superior
// son aquellas que resiben una funcion como parametro

const array= ["manzana", "uva", "pera","sandia"];
const pasarMayuscula =(texto)=> texto.toUpperCase();

const pasarMinuscula =function (texto){
    return texto.toLowerCase();
}
function remplazar(texto){
    return texto.replaceAll("a","x");
}

function porCadauno(lista, miFuncion){
    
    for(const item of lista){
        console.log(miFuncion(item));
    }
}
porCadauno( array, pasarMinuscula);
porCadauno( array, pasarMayuscula);
//vercion clasica
porCadauno( array, function remplazar(texto){
    return texto.replaceAll("a","x");
})
// version moderna
porCadauno( array, (texto) => texto.replaceAll("a","x")
)
