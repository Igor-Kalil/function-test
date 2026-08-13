function calcularmedia (nota1, nota2){
    return ((nota1 + nota2)/2 )
}
function verificaraprovação (media){
    if (media>=6){
        return "Aprovado";

       }  else 
            return "Reprovado"
    }

let media = calcularmedia(5,6)
let resultado = verificaraprovação(media)
console.log (media);
console.log(resultado)