//Podemos chamar de Objeto a instância de uma classe

class computador3 {
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
    info():void{
        console.log(this.nomec)
        console.log(this.ram)
        console.log(this.cpu)
        console.log(this.ligado? 'ligado':'desligado')
        console.log('----------------------------------')
    }
    ligar():void{ //nós criamos funções para modificar as propriedades para evitar possíveis erros
        this.ligado = true
    }
    desligar():void{
        this.ligado = false
    }
}

const pc13 = new computador3('Cleiton',2,4)
const pc23 = new computador3('PC gamer',3,7)
const pc33 = new computador3('PC ruim',1,2)

pc13.info()
pc23.info()
pc33.ligar()
pc33.info()