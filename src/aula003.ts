class curso {
    materia = null
    curso = null
    constructor(materia:any, curso:any){
        this.materia = materia
        this.curso = curso
    }
}

//o código ainda não funciona ;u;
let c = new curso("Segurança da informática", "TI")
console.log(c.materia)
console.log(c.curso)