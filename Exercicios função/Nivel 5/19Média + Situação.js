function calcularMedia(nota1, nota2){
    let conta = ((nota1+nota2)/2)
    return conta
}
function verificarSituacao(media){
    if (media>6)
        return "Aprovado"
    else
        return "Reprovado"
}
let media = calcularMedia(8, 7);
let situacao = verificarSituacao(media);

console.log("Média:", media);
console.log("Situação:", situacao);