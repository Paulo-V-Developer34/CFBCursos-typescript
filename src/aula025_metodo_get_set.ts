//antigamente criavamos esses métodos manualmente, porém hoje podemos simplifica-los

class contags {
    private conta:string
    private senha:string
    constructor(conta:string,senha:string){
        this.conta=conta
        this.senha=senha
    }
    get senhaget():string {//mudei o nome pois o TS me permite ter mais de uma função com o mesmo nome, porém ele só executa a primeira
        return this.senha
    }
    set senhaset(novasenha:string) {
        this.senha = novasenha
    }
}

const novaconta = new contags("Paulo@gmail","senha123")

console.log(novaconta.senhaget)

// novaconta.senhaset('senha321') //forma errada, em TS os setters e os getters são propriedades e não métodos
novaconta.senhaset = 'senha321'

console.log(novaconta.senhaget)