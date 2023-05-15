class Estudiante {
    nombre = "juan";
    asignaturas = ["javascript"," HTML " ,"CSS"];

    obtenDatos(){
       return  {
        nombre: this.nombre,
        asignaturas: this.asignaturas}
    }  
    
}

const nuevoObjeto = new Estudiante()
console.log(nuevoObjeto.obtenDatos())