let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //o nosso vetor global

function isNumero(n) { //esta função recebe um parâmetro
    if (Number(n) >= 1 && Number(n) <= 100) { //para verificar se o valor inserido pelo usuário é um número.
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //esta função recebe um número e uma lista (dois parâmetros)
    if (l.indexOf(number(n)) != -1) { //para verificar se o número está na lista.
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //"isNumero" e "!inLista" são análises criadas por nós.
        window.alert('Tudo Ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}





/*
DETALHE QUE NÃO ACONTECEU IGUAL AO PROFESSOR (alerta de "tudo ok"):

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //"isNumero" e "!inLista" são análises criadas por nós.
        window.alert('Tudo Ok') -->ESSE ALERTA NÃO APARECEU NO TESTE INICIAL
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}
 */