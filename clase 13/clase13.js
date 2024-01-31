
const frutas= ["pera", 'banana ','uva','sandia']
let [fruta1, fruta2, fruta4,]=frutas;
console.log(fruta1,fruta2,fruta4);


const valores = Math.max(8,6,16,65,32)
const max = Math.max(...valores)
console.log("max:" ,max)


const carrito=['teclado','maouse', 'cpu']
const carrito2=['monitor', 'pantalla']


const carritoFinal=['camara web',...carrito, "algo",...carrito2]
console.table(carritoFinal)

// operador spread con objetos 

const user1= {
    id:1,
    name:'nicolas',
    email: ' nicolas@mail,com'
}


const user2= {
    id:2,
    name:'gabriel',
    email: ' gabi@mail,com'
}

const userCompleto= {
    ...user1,
    avatar: "avatar.jpg",
    status:" legeado"
}
console.table(userCompleto);
let datos={
    ...userCompleto,
    ...user2,
}
console.table(datos)








