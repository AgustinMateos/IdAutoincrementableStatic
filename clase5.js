class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre
        this.apellido=apellido
        this.id=Persona.incrementarID()
    }

static incrementarID(){
    if (this.idIncrement){
        this.idIncrement++
    }else{
        this.idIncrement=1
    }
    return this.idIncrement
}
}

const persona1=new Persona("Fran","Pugh")
const persona2=new Persona("Juan Segundo","Pugh")
const persona3=new Persona("Lucas","Pugh")
const persona4=new Persona("Juan","Pugh")

console.log(persona1,persona2,persona3,persona4)