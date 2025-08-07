//Calculando o fatorial de um número (x!), que é o resultado da multiplicação dele (produto) por todos os seus antecessores inteiros positivos até chegar a 1:

function fatorial (n) {
    let fat = 1
    for(let c = n; c > 1; c--) { //estou criando um contador (c) que, enquanto ele for 1, perderá 1 em seu valor.
        fat *= c

    }
    return fat
}

console.log(fatorial(5))