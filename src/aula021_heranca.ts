//Podemos chamar de Objeto a instância de uma classe

class computadores2 {
    public nomec:string 
    private ram:number      
    private cpu:number      //isso está funcionando em pc gamer pois apesar de ser private quem está executando tudo é o método que está dentro da própria classe e que está sendo chamada pela classe filha, pois o método é public
    private id:number      
    protected ligado:boolean 
    constructor (nomec:string,ram:number,cpu:number){//quando um objeto é instânciado automaticamente tudo o que estiver aqui será executado
    this.nomec = nomec
    this.ram = ram
    this.cpu = cpu
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

class Pc_gamer2 extends computadores2{
    public estilo:string
    constructor(estilo:string,nomec:string,ram:number,cpu:number){
        super(nome,ram,cpu)
        this.estilo = estilo
    }
    // mostrarID():void{
    //     console.log(this.id) //isso não pode acontecer pois id é private e só pode ser acessado pela própria classe
    // }
}

const pc_12 = new computadores2('Cleiton',2,4)
const pc_22 = new Pc_gamer2('RGB','PC gamer',3,7) //consegui utilizar tudo da classe computadores

// pc14.ram = 1  //essa operação não pode ser feita por causa do private
pc_12.nomec = 'PC mais ou menos' //aqui eu posso

pc_12.info()
pc_22.info()