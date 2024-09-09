//Com o static podemos utilizar métodos ou propriedade de todas as instâncias de uma classe ou podemos simplesmente utiliza-la sem instância-la

class Globais {
    public static status:boolean
    static funcao():void{
        console.log(`O status do programa é ${this.status}`)
    }
}

Globais.status = true

Globais.funcao()