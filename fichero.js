class Estudiante {
    nombre;
    asignaturas = ["javascript"," HTML " ,"CSS"];
    constructor(nombre){
        this.nombre = nombre;
    }
    obtenDatos(){
        let objeto = `mi nombre es ${this.nombre} y mis asignaturas son: ${this.asignaturas}`
        return objeto
    }  
    
}

const nuevoObjeto = new Estudiante("juan")
console.log(nuevoObjeto.obtenDatos())