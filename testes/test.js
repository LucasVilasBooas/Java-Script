const cliente = {
    nome : "Lucas",
    idade: 32,
    cpf: "04073116533",
    email: "lucaslcs.vilasboas@gmail.com",
    telefone: ["12345", "546786"],
    saldo: 200, 
    efetuaPagamento: function (valor){
        if (valor > this.saldo ){
            console.log("saldo insuficiente")
        } else {
            this.saldo -= valor 
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(150)