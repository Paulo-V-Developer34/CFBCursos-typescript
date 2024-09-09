//namespace serve meramente para organização

namespace classesefuncoes {
    class C_teste1 <T,U>{ 
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
    export function f_teste21 <T>(valor:T):T{
        return valor
    }
}

namespace listas {
    let lista1:number[] = [20,43,212,356,65]
    let lista2:string[] = ["kkk","bom dia","boa tarde"]
}

//eu só pósso acessar f_teste fora do namespace porque ele possui export
//tenho que acessar-la dentro do namespace
console.log(classesefuncoes.f_teste21<string>("Bom dia"))