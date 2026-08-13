function calcularPrecoComDesconto(Preço, desconto){
    let valordesconto = Preço * desconto /100
    let precofinal = Preço - valordesconto
    return precofinal
}

let preco = calcularPrecoComDesconto(200,15)
console.log (`Preço final: R$ ${Preço}`)