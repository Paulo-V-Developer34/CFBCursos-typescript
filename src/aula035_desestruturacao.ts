//desestruturação é o ato de pegar elementos de um array ou objeto e passalos para variáveis individuais ou arrays e objetos menores

//array
let lista35 = [2,3,4,5]
let [n1,n2,n3,n4] = lista35
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

//objeto        ISSO AQUI É MAIS UMA BIBLIOTECA OU UM JSON
let obj35 = {
    v1:4,
    v2:5,
    v3:7,
}

// let obj350 {  OBJETO VERDADEIRO
//     v1:4,
//     v2:5,     AQUI ELE NÃO ACEITA "CHAVE VALOR"
//     v3:7,
// }

let {v1,v2,v3} = obj35  //tem que ser o mesmo nome da chave
// let {v1,v,ci} = obj35   aqui não pode
