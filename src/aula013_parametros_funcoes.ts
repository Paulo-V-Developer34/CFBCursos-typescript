function f1(numero1:number=0,numero2:number=0):number{ //aqui eu coloquei um valor padrão para caso a chamada não passe um desses valores 
    return numero1 + numero2
}

console.log(f1(3))

function f2(nome:string,senha:string,idade?:number):void { //o sinal "?" indica que o valor é opcional e receberá o valor undefined
    let dados = [nome,senha,idade]
    console.log(dados)
}

f2("Paulo","senha123")