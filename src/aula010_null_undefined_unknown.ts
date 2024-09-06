//null é um tipo e possui o valor nulo

let valor1:string|null
valor1 = null
console.log(valor1)

let valor2:any
console.log(valor2)   //retorna undefined pois aqui ele pode receber qualquer tipo de valor

let valor3:undefined  //aqui ele pode receber qualquer valor, com a pequena difença de que apenas variáveis do tipo undefined e any podem recebe-lo
console.log(valor3) 

valor2 = valor3
valor1 = valor2
// valor1 = valor3 essa operação não pode ser realizada