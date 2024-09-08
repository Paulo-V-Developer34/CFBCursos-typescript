//Podemos chamar de Objeto a instância de uma classe

class computadores {
    public nomec:string //permite a modificação em qualquer lugar
    private ram:number  //permite a modificação da propriedade apenas pela própria classe
    private cpu:number
    protected ligado:boolean //permite a modificação da propriedade pelas classes filhas (herança)
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

class Pc_gamer extends computadores{

}

const pc_1 = new computadores('Cleiton',2,4)
const pc_2 = new Pc_gamer('PC gamer',3,7) //consegui utilizar tudo da classe computadores

// pc14.ram = 1  //essa operação não pode ser feita por causa do private
pc_1.nomec = 'PC mais ou menos' //aqui eu posso

pc_1.info()
pc_2.info()