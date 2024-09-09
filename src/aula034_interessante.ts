//é interessante assistir essa aula para aprender mais sobre como práticar a utilização de objetos como tipos

namespace motores {
    export interface turbo {
        potencia:number
    }

    export class motor {
        private ligado:boolean
        private cilindros:number
        private pot:number
        constructor(cilindros:number,pot:number,turbo?:turbo){
            this.ligado = false
            this.cilindros=cilindros
            this.pot=pot + (turbo?turbo.potencia:0)
        }
        set cilindrosset(cilindros:number){
            this.cilindros += cilindros
        }
        get potget():number{
            return this.pot
        }
    }
}

namespace carros{
    export enum cores{"Branco","Preto","Azul"}

    export class carro extends motores.motor{
        cor:cores
        constructor(cor:cores,cilindros:number,pot:number,turbo?:motores.turbo){  //ainda não está completo porém já pode te ajudar a pensar
            super(cilindros,pot,turbo)
            this.cor = cor
        }
    }
}

console.log(new carros.carro(carros.cores.Branco,3,5, {potencia:20})) //a parâmetro turbo espera receber valores no formato do objeto "turbo"
console.log(new carros.carro(1,3,5, {potencia:20})) //eu posso substituir "carros.cores.Branco" por "1" pois o enum pode substituir os valores por números

