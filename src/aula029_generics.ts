//Generics serve para indicar que uma variável pode receber um tipo diferente de acordo com sua chamada

function f_teste <T>(valor:T):string{
    return `A mensagem a ser escrita é ${valor}`
}
function f_teste2 <T>(valor:T):T{
    return valor
}


console.log(f_teste<number>(10))//dentro de <> você insere o tipo do valor

class C_teste <T,U>{ 
    public valor1:T
    public valor2:U
    constructor(v1:T,v2:U){
        this.valor1 = v1
        this.valor2 = v2
    }
    get va1():T{
        return this.valor1
    }
}
