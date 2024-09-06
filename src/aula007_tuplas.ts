//as tuplas possuem uma quantidade restrita de elementos

const minhalista1:[string, boolean] = ["está vivo?", true]
minhalista1[0] = "mudou" //mesmo sendo uma constante eu posso atribuir valores a ela, então por que ela deve ser uma constante?

const minhalista2:readonly[string, boolean] = ["está vivo?", true] //aqui nenhum valor pode ser alterado

minhalista1.push("carregou", false) //eu posso executar o push mas não poderei acessar esses elementos especificamente na tupla, isso significa que fazer essa operação é uma péssima ideia

//console.log(minhalista1[2]) essa operação não deveria ser possível, mas como eu converto o arquivo TS para JS isso é possível no JS ;-;

const minhalista3:[string, number] = ["batata", 3] //está limitado a conter 2 valores (string e number)
const minhalista4:[string, number, boolean, boolean] = ["batata", 3, true, false] //está limitado a conter 4 valores (string, number e 2 boolean nessa ordem exata)
