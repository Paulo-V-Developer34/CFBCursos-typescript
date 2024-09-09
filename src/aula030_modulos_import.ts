//posso importar utilizando o "import"
//posso importar mais de uma coisa de uma vez só dês de que seja do mesmo arquivo

import { C_teste , f_teste2} from "./aula030_modulos_export"

const pe1 = new C_teste<number,string>(12,"Oi")

console.log(pe1.va1)