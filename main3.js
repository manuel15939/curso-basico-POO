class Comment{
    constructor({
        content,
        studentName,
        studentRole = 'estudiante',
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes  = 0;
    }

    publicar(){
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.likes} likes`);
        console.log(this.content);
    }
}


class Student5 {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instragram = undefined,
        facebook = undefined,
        approvedCourses =[],
        learningPaths = [],
    })
    {
        this.name = name;
        this.email= email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instragram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student5 {
    constructor(prop){ // con este parametro llamanos al constructor de nuestra super clase 
        super(prop); // y recibe todos los parametros que envien los studiantes 
    }
    // podemos agregar nuevos metodos a la clases 
    approvedCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn(`lo siento, ${this.name} solo puedes tomar cursos abiertos`);
        }
    }
}

class BasicStudent extends Student5 {
    constructor(prop){
        super(prop);
    }
    approvedCourse(newCourse){
        if (newCourse.lang !== 'english'){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn(`lo siento, ${this.name} solo puedes tomar en Ingles`);
        }
    }
}

class ExpertStudent extends Student5 {
    constructor(prop){
        super(prop);
    }
    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student5 {
    constructor(prop){
        super(prop);
    }
    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent){
        const comment = new Comment({  // con este metodo sobreescribimos los metodos que vienen de una super clase en una sub clase especial, es decir, aplicamos polimorfismo
            content: commentContent,
            studentName: this.name,
            studentRole: 'profesor'
        });
        comment.publicar();
    }
}

class course2{
    constructor({
        name,
        clases = [],
        isFree = false,
        lang = 'spanish',
    })
    {
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name (newName){
        this._name = newName;
    }
}

const cursoProgBasica2 = new course2({
    name: 'Curso Gratis Programacion Basica',
    clases: [],
    isFree: true,
})

const cursoPractHTML2 = new course2({
    name: 'Curso Practico HTML y CSS',
    lang : 'english'
})

const juan3 = new FreeStudent ({
    name: 'juanDC',
    username: 'juandc',
    email: 'juanito@platzi.com',
    twitter:'fjuandc',
    learningPaths:[

    ]
});

const steven2 = new BasicStudent({
    name:'Steven',
    username: 'stevenvr',
    email: 'stevenvr@platzi.com',
    instragram: 'steven15vr',
    learningPaths:[
    ]
});

const fredie = new TeacherStudent({
    name:'Freddy Vega',
    username: 'freddier',
    email: 'f@gep.com',
    instragram: 'freddiervega',
    learningPaths:[
    ]
});