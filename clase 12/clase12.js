const perosna ={
    id : 1,
    name : "juan",
    email: "juan@gmail.com",
    password: "123abc",
    pic: 'user.jpg',
    domicilio: {
        calle: 'Siempre Viva 123',
        cp: 1200
    },
    lenguaje: ["javascript","html"]


}





// guarde el objeto con nombre y email 
function saveUser(persona){
    console.log(persona)

    const{name,email}= persoan;
    console.log(name, email);

    const objeto ={
        email,
        name
    }
    console.log('nuevo 083',objeto)
    localStorage.setItem('user',JSON.stringify(perosna))
}

// destructuracion 
function saveUser2({name,email}){
   localStorage.setItem('user',JSON.stringify(name,email,))
}

const renderleguajes= ({lenguaje})=>{
    lenguaje.forEach(element => {
        
    });
}
saveUser2(perosna);
renderleguajes(perosna);

const frutas= ["pera", 'banana ','uva','sandia']
let [fruta1, fruta2, fruta4,]=frutas

