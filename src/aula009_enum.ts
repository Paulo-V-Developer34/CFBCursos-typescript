//o "enum" é semelhante ao object, porém suas 2 vantagens são

//1. poder ver o valor da chave

enum valorCarros {
    Ford_Model_t = 5000,
    Toyota_Corolla = 7000,
    BMC_Mini = 10000,
    Volkswagen_Fusca = 25000
}

console.log(valorCarros[5000])//valor da chave
console.log(valorCarros.Ford_Model_t)//valor que está dentro da chave

//2. poder virar um tipo, restringindo os valores que algo, como uma variável, pode conter

// enum coresValidas {
//     vermelho = "#f00",
//     verde = "#0f0",        essa operação não pode acontecer pois enum só pode receber números
//     azul = "#00f"
// }

enum alturasValidas {
    pequeno = 1.20,
    medio = 1.50,
    alto = 1.75
}

let altura1:alturasValidas = 1.50
// let altura2:alturasValidas = 1.40 essa altura é inválida
