//uso o export para exportar

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

function f_teste2 <T>(valor:T):T{
    return valor
}

let lista:number[] = [20,43,212,356,65]

export default C_teste    //podemos usar default para exportar também
export {f_teste2, lista}  //posso exportar várias coisas coisas