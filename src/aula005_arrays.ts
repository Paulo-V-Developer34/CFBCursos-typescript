// arrays em TS podem receber 1, vários ou todos os tipos de variáveis

let numeros5 = [100,20,340]

// numeros5.push("kkk") não posso fazer isso por que o tipo do array é number (aceita qualquer tipo de número)

//esse array suporta esses 3 tipos de dados
let tudo5 = ["Paulo", 5, true]

let alfanumerico5: (string|number)[]=[] //recebe tanto números quanto letras

alfanumerico5.push("Paulo")
alfanumerico5.push(5)