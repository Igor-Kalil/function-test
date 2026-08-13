function verificarNumero(numero){
    if (numero>0)
        return "Positivo"
    else if (numero<0)
        return "negativo"
    else
        return "Zero"
}
let number = verificarNumero(0)
console.log (number)