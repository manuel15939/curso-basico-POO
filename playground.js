class Banda {
    constructor({
        nombre,
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        function isInstruInArray (instrument){
            return instrument.instrumento == integranteNuevo.instrumento
            }

        // let instruInArray = this.integrantes.find(element => element.instrumento == integranteNuevo.instrumento);
        
        let instruInArray = this.integrantes.find(isInstruInArray);
        if (instruInArray){
            console.log('ya hay un integrante que toco un mismo instrumento');
        }else{
            this.integrantes.push(integranteNuevo)
            console.log('se agrego un nuevo integrante');
        }
        
    }
}

  //Crear clase Integrante
class Integrante {
    constructor({
        nombre,
        instrumento,
    })
    {
        this.nombre = nombre;
        this.instrumento = instrumento; 
    }
    
}

const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
}

const banda = new Banda(data)


banda.agregarIntegrante(new Integrante({nombre: "Erik", instrumento: "Guitarra"}))
banda.agregarIntegrante(new Integrante({nombre: "Jack", instrumento: "Bateria"}))
banda.agregarIntegrante(new Integrante({nombre: "joy", instrumento: "vocal"}))
banda.agregarIntegrante(new Integrante({nombre: "max", instrumento: "vocal"}))

console.log(banda);
console.log(banda.integrantes);




/////////////////////////////////////////
class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if (typeof nuevoNombrecito === 'string') {

        this._name = nuevoNombrecito.toLowerCase()
        .trim()
        .split(' ')
        .map(v => v[0].toUpperCase() + v.substr(1))
        .join(' ');
    
        }
    }
}

const courseName = "curso de programación básica";
const nombreMaysuculas = new Course({
    name: courseName,
})

