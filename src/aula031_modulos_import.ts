//posso importar utilizando o "import"

import { lista , f_teste2} from "./aula031_modulos_export"
import  C_teste from "./aula031_modulos_export" //aqui eu não precisei das chaves pois estou importando um export default

const pe1 = new C_teste<number,string>(12,"Oi")

console.log(pe1.va1)
console.log(lista)