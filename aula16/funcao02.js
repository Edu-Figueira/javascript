 
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 5)) //entenda: "soma" é minha chamada; 2 e 5 são meus dois parâmetros necessários para a execução da função "somar" ("n1" e "n2").
 

// Se não colocarmos um dos parâmetro, mostrará NaN (not a number). Podemos resolver isso colocando parâmetros opcionais para, por exemplo, um "=0", em caso de falta de parâmetro na chamada, para fazer o código entender que estou somando um parâmmetro com "nada", o que resultará no próprio valor do único parâmetro que foi inserido. Veja:


function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(7))