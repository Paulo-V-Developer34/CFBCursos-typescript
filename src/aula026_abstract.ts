//diferentemente de JS o TS possui suporte para abstráct

abstract class Componentes {
    protected ram:number
    protected cpu:number
    constructor(ram:number=1,cpu:number=1){
        this.ram=ram
        this.cpu=cpu
    }
}

class computadores3 extends Componentes{
    public nomec:string      
    private readonly id:number  //o READONLY é utilizado para que eu não possa modificar este valor novamente     
    protected ligado:boolean 
    constructor (nomec:string,ram:number,cpu:number){
        super(ram,cpu)
        this.nomec = nomec
        this.ligado = false
        this.id = this.gerarID()
    }
    info():void{
        console.log(this.nomec)
        console.log(this.ram)
        console.log(this.cpu)
        console.log(this.id)
        console.log(this.ligado? 'ligado':'desligado')
        console.log('----------------------------------')
    }
    ligar():void{ //nós criamos funções para modificar as propriedades para evitar possíveis erros
        this.ligado = true
    }
    desligar():void{
        this.ligado = false
    }
    gerarID():number{
        return Math.floor(Math.random()*100000)+1
    }
}

class Pc_gamer3 extends computadores3{
    public estilo:string
    constructor(estilo:string,nomec:string,ram:number,cpu:number){
        super(nomec,ram,cpu)
        this.estilo = estilo
    }
    // mostrarID():void{
    //     console.log(this.id) //isso não pode acontecer pois id é private e só pode ser acessado pela própria classe
    // }
}

const pc_13 = new computadores3('Cleiton',2,4)
const pc_23 = new Pc_gamer3('RGB','PC gamer',3,7) //consegui utilizar tudo da classe computadores

// pc14.ram = 1  //essa operação não pode ser feita por causa do private
pc_13.nomec = 'PC mais ou menos' //aqui eu posso

pc_13.info()
pc_23.info()