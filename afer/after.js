

// objetos literales
const list= [
    {id: 1,  name: "Gabriela castro", test1: 8, test2: 9, status: "promocionado"},
    {id: 2,  name: "Lusia avila", test1: 6, test2: 4, status: "aprovado"},
    {id: 3,  name: "Monica perez", test1: 3, test2: 2, status: "desaprovado"},
    {id: 4,  name: "Emanuel ruiz", test1: 1, test2: 3, status: "desaprovado"},
    {id: 5,  name: "Emanuel ruiz", test1: 1, test2: 3, status: "desaprovado"},

]
// arrais por clases 
class Rating{
    constructor(list){
        this.list = list;
    }
    //generar id 
    addStudent(student){
        let id = this.list.length + 1;
        student.id =id;
        const status = this.getStudentAverage(student.test1,student.test2);
        student.status = status; 
        
        // realizar las validaciones 
        this.list.push(student);
    }
    getStudentAverage(test1,test2){
         const average = (test1 + test2 ) /2 ;
         if (average >= 7){
            return "promocionado";
         }else if( average >= 4 && average <7){
            return "aprovado";
         }else 
         return "desaprovado";
    }
    // retornar el estudiante por id 
    getStudentByid(id){
        const student =this.list.find( item =>item.id === id);
        //version corta 
        return student ? student : "no exsiste el estudiante "
/*        
        vercion larga 
        if (student){
            return student;
        }else{
            return " no exsiste el estudiante ";
        }
*/
    }
    // filtrar por estudiante 
    getStudentByStatus(status){
        const list = this.list.filter(item => item.status === status);
        return list
       
    }
    // FILTRAR POR NOMBRE Y CONINCIDENCIA
    getStudentByName(name){
        const list = this.list.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
        return list;
    }
    showStudents(list){
        console.table(this.list);
    }
}   
const libro = new Rating(list);
//const id = parseInt(prompt("Ingrese el estudiante"))
const estudiantes = libro.getStudentByid(id)
const filtraados = libro.getStudentByStatus("desaprovado")
console.table(filtraados);
//console.log(estudiantes);



let nombre =prompt ("Nombre");
do{
    nota1 =parseFloat(prompt(" nota 1"));
    nota2 =parseFloat(prompt(" nota 2"));
    
    libro.addStudent({name: nombre, test1: nota1, test2: nota2 })
    libro.showStudents();
    nombre =prompt ("Nombre");


}while (nombre.toLowerCase() != "salir")