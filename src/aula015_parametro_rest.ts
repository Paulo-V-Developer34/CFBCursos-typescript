// a vantagem de se usar o parâmetro Rest ao invés de simplesmente utilizar um array é que você não precisa ter necessáriamente um array para poder operar todos os elementos

function somaSpread(...numeros:number[]):number {
    let numero:number = 0
    for(let n of numeros) {
        numero += n
    }
    return numero
}

console.log(somaSpread(10,20,30,40,59))//tivemos que usar o spread porque isso não é um array!!!