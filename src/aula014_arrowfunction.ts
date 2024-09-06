//funções normais podem ser chamadas antes de serem criadas

bomdia()

function bomdia():void {
    console.log("bom dia")
}

//funções anônimas, como a arrow function não pode

// bomdia2

// const bomdia2 = ():void => {    GERA UM ERRO
//     console.log("bom dia")
// }


//exemplo de arrow function de arrays em funções

const somatoria = (numeros:number[]):number => {
    let numero:number = 0
    numeros.forEach((e)=>{
        numero += e
    })
    return numero
}

let numeros:number[] = [20,10,40,34]

console.log(somatoria(numeros))