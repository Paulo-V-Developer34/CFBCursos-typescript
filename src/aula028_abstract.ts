//diferentemente de JS o TS possui suporte para abstráct

interface Componentes_1 {  //o transformei em um objeto literal
    ram:number
    cpu:number
    upgrade(ram:number,cpu:number):void
}

//aqui ele me obriga a utilizar os elementos do objeto literal
class computadores_3 implements Componentes_1{//estou fazendo um "extends" de componentes_1 que é um objeto literal
    public nomec:string
    ram: number;
    cpu: number;      
    private readonly id:number  //o READONLY é utilizado para que eu não possa modificar este valor novamente     
    protected ligado:boolean 
    constructor (nomec:string,ram:number,cpu:number){
        this.ram = ram
        this.cpu = cpu
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
    upgrade(ram: number, cpu: number): void {    ///eu tive que inclui-lo
        this.ram += ram
        this.cpu += cpu
    }
}

class Pc_gamer_3 extends computadores_3{
    public estilo:string
    constructor(estilo:string,nomec:string,ram:number,cpu:number){
        super(nomec,ram,cpu)
        this.estilo = estilo
    }
    // mostrarID():void{
    //     console.log(this.id) //isso não pode acontecer pois id é private e só pode ser acessado pela própria classe
    // }
}

const pc_14 = new computadores_3('Cleiton',2,4)
const pc_24 = new Pc_gamer_3('RGB','PC gamer',3,7) //consegui utilizar tudo da classe computadores

// pc14.ram = 1  //essa operação não pode ser feita por causa do private
pc_14.nomec = 'PC mais ou menos' //aqui eu posso

pc_14.info()
pc_24.info()