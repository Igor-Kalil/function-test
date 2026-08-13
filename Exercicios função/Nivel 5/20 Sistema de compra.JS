function calcularSubtotal(preco, quantidade) {
    
    let subtotal = preco * quantidade
    return subtotal
}

function calcularDesconto(valor, percentual) {

    let desconto = valor * percentual / 100
    return desconto
}

function calcularTotal(subtotal, desconto) {
    let valorfinal = subtotal - desconto
    return valorfinal
}

let subtotal  = calcularSubtotal(50, 3);
let desconto = calcularDesconto(subtotal, 10);
let total = calcularTotal(subtotal, desconto);

console.log ("Subtotal:", subtotal);
console.log ("Desconto:", desconto);
console.log ("Total:", total);
