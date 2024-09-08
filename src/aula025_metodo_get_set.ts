//antigamente criavamos esses métodos manualmente, porém hoje podemos simplifica-los

class contags {
    private conta:string
    private senha:string
    constructor(conta:string,senha:string){
        this.conta=conta
        this.senha=senha
    }
    get senhact():string {
        return this.senha
    }
    set senhact(novasenha:string) {
        this.senha = novasenha
    }
}

const novaconta = new contags("Paulo@gmail","senha123")
