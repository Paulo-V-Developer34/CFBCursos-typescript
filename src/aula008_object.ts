let dados = {     //pode ser usado como um mini BD
    nome: "Paulo",
    idade: 17,
    altura: 1.75,
    ola: ()=>console.log("olá"),
    saudacao: (nome:string)=>console.log("olá, meu nome é "+nome)
}

dados.ola()
dados.saudacao(dados.nome)