class student4 {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instragram = undefined,
        facebook = undefined,
        aprrovedCourses =[],
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
        this.aprrovedCourses = aprrovedCourses;
        this.learningPaths = learningPaths;
    }

    get name(){
        return this._name;
    }

    set name (newName){
        this._name = newName;
    }

}

class course{
    constructor({
        name,
        clases = []
    })
    {
        this._name = name;
        this.clases = clases;
    }

    get name(){
        return this._name;
    }

    set name (newName){
        this._name = newName;
    }
}



function videoPlay(id){
    const urlSecreta ='https:platziurlvideosecreto/gshrtshshtjn.com/'+id;
    console.log('se esta reproduciendo desde la url'+ urlSecreta);
}
function videoStop(id){
    const urlSecreta ='https:platziurlvideosecreto/gshrtshshtjn.com/'+id;
    console.log('Pausamos la url'+ urlSecreta);
}

export class PlatziClass {
    constructor({
        name,
        videoID, 
    })
    {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}


const cursoProgBasica = new course({
    name: 'Curso Gratis Programacion Basica',
    clases: []
})

const cursoDEfinitivoHTML = new course({
    name: 'Curso Definitivo HTML y CSS',
})

const cursoPractHTML = new course({
    name: 'Curso Practico HTML y CSS',
})

const cursoDataBusi = new course({
    name: 'Curso Data Business',

})

const cursoDataViz = new course({
    name: 'Curso Data Viz',

})

const cursoTabl = new course({
    name: 'Curso Tableau',

})

const cursoIntProVgs = new course({
    name: 'Curso Introduccion a la produccion de Vgs',

})

const cursoUnreEng = new course({
    name: 'Curso de Unreal Engine',

})

const cursoUnit3D = new course({
    name: 'Curso de Unity 3D',

})

class LearningPaths {
    constructor({
        name,
        courses = [],
    })
    {
        this.name = name;
        this.courses = courses;
    }

    get name(){
        return this._name;
    }

    set name (newName){
        this._name = newName;
    }

}


const escuelaWeb = new LearningPaths({
    name: 'Escuela de Desarrollo Web',
    courses: [
        cursoProgBasica,
        cursoDEfinitivoHTML,
        cursoPractHTML,
    ],
});

const escuelaData = new LearningPaths({
    name: 'Escuela de Data Science',
    courses: [
        cursoProgBasica,
        cursoDataBusi,
        cursoDataViz,
        cursoTabl
    ],
})

const escuelaVgs = new LearningPaths({
    name: 'Escuela de Videojuegos',
    courses: [
        cursoProgBasica,
        cursoIntProVgs,
        cursoUnreEng,
        cursoUnit3D,
    ],
})





const juan2 = new student4 ({
    name: 'juanDC',
    username: 'juandc',
    email: 'juanito@platzi.com',
    twitter:'fjuandc',
    learningPaths:[
        escuelaWeb,
        escuelaVgs,
    ]
});

const steven = new student4({
    name:'Steven',
    username: 'stevenvr',
    email: 'stevenvr@platzi.com',
    instragram: 'steven15vr',
    learningPaths:[
        escuelaWeb,
        escuelaData,
    ]
});