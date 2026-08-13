function calcularmedia (nota1, nota2){
    return ((nota1 + nota2)/2 )
}
function verificaraprovação (media){
    if (media>=9){
        return "Excelente";
    } else if (media >= 7){
        return "Bom";
     } else if (media >=6){
            return "Aprovado";
       }  else 
            return "Reprovado"
    }

let media = calcularmedia(8,7)
let resultado = verificaraprovação(media)
console.log (media);
console.log(resultado)