//Podemos chamar de Objeto a instância de uma classe

class computador2 {
    nomec:string
    ram:number
    cpu:number
    ligado:boolean
    constructor (nomec:string,ram:number,cpu:number,){
    this.nomec = nomec
    this.ram = ram
    this.cpu = cpu
    this.ligado = false
    }
}

const pc12 = new computador2('Cleiton',2,4)
const pc22 = new computador2('PC gamer',3,7)
const pc32 = new computador2('PC ruim',1,2)

console.log(pc22)