//uso o export para exportar

export class C_teste <T,U>{ 
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

export function f_teste2 <T>(valor:T):T{
    return valor
}