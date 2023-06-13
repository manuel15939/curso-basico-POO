const manuel = {
    name: 'Manuel',
    age:28,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        'Curso Practico de HTML y CSS',
        
    ],
    aprobarCurso (nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
}

function Student (name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // crear metodos dentro de los obejtos
    // this.aprobarCurso = function(nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}
Student.prototype.aprobarCurso = function(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }

const mariana = new Student(
    "Mariana",
    27,
    ['Curso de introduccion a la produccion de video juegos', 'Curso de creacion de personajes'],
    );

class Student2 {
    constructor(name,age,cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const juan = new Student2(
    'Juan',
    30,
    ['Curso analisi de negocio para ciencia de datos',
    'curso de principios de visualizacion de datos para BI',
    ]
    )

    class Student3 {
        constructor({
            name,
            age,
            cursosAprobados = [],
            email= ''
        }){
            this.name = name;
            this.age = age;
            this.cursosAprobados = cursosAprobados;
            this.email = email;
        }
        aprobarCurso(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso);
        }
    }

    miguel = new Student3({
        email:'miguelito@platzi.com',
        name:'Miguel',
        age: 23
    }
    )