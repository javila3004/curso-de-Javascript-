const items = document.getElementById("items")
const templatecard = document.getElementById("templare-card")

document.addEventListener(`DOMContentLoaded`, () =>{
    fetchData( )
}) 
const fetchData = async () =>{
    try{
        const res =await fetch(`api.json`)
        const data = await res.json()
        //console.log(data)
        pintarCard (data)
    }catch (error){
        console.log(error)
    }
}
const pintarCard =()=>{
    console.log(data)
} 