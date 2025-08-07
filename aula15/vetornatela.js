//---PERCURSO PARA EXIBIÇÃO DO VETOR---

// forma padrão de executar:
let valores = [8, 1, 7, 4, 2, 9]

console.log(valores[0])

/* maneira pouco intelegente:
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

// forma mais inteligente:
for(let pos =0; pos < valores.length; pos++) { //leia-se: enquanto a variável "valores" tiver valor menor do que a quantidade total de índices do vetor, a variável "pos" receberá um incremento de mais um.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// jeito mais simplificado ainda:
for (let pos in valores){ // leia-se: para cada posição (variável pos) na variável composta (num), mostrarei o valor dela.
    console.log(valores[pos])
}