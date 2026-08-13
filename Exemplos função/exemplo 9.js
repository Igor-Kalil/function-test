function calcularsalario(salario, bonus){
    let valorbonus = salario * bonus / 100
    let salariofinal = salario + valorbonus
    return salariofinal
}

let salario = calcularsalario (3000,10)
console.log(`Salario final: R$ ${salario}`)