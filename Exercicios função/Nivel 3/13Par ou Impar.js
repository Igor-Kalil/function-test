function verificarPar(numero) {
    
    let divisão = (numero % 2)
    
        if (divisão === 0) {
            return ("Par")

        } else {
            return ("Impar")
        }
}

let resultado = verificarPar (100)
console.log (resultado)
