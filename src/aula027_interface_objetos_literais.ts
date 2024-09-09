//ao utilizarmos objetos literais em TS podemos utilizar "interface" para torna-lo "extendível" para que outros objetos o utilizem como molde

interface curso27 {
    titulo:string
    descricao:string
    aulas?:number  //esse é opcional
} 

let curs1:curso27 //é um objeto literal porém que possui todas as propriedades e métodos de curso
let curs2:curso27
let curs3:curso27

curs1 = {titulo:"JS",descricao:"Muito legal",aulas:270}
curs2 = {titulo:"TS",descricao:"Muito BOM",aulas:20}
curs3 = {titulo:"PHP",descricao:"Muito MARAVILHOSO",aulas:570}

console.log(curs1)
console.log(curs2)
console.log(curs3)