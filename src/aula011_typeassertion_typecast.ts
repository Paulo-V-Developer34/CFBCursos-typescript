let valorn:number
let valors:string
let valoru:unknown
valorn = 10
valors = "20"
valoru = "30"

//typeassertion

//juntar string com numero
// valors = valoru essa ação não pode ser realizada

valors = <string>valoru
valorn = <number>valoru

// valors = <string>valorn essa ação não pode ser feita
valors = <string><unknown>valorn  //essa pode


//typecasting

//converter um número para String
valors = valorn.toString()

//converter uma string para um number
valorn = parseInt(valors)