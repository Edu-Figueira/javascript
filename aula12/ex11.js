var idade = 18
console.log(`Você tem ${idade} anos, `)
if (idade < 16) {
    console.log('portanto não vota.')
} else if (idade < 18 || idade >= 70) {    
        console.log('portanto seu voto é opcional.')
} else {
    console.log('seu voto é obrigatório.')
}


//exemplo de como eu raciocinaria se estevesse escrito o código (incluindo gracinha sobre alguém com mais de 100 anos e não usando o "else if"):

/* var idade = 78
if (idade >= 18) {
    console.log('Vota.')
} else {
    if (idade <= 15) {
        console.log('Não vota.')
    } else {
        console.log('Voto opcional.')
    }           
} if (idade >= 100) {
    console.log('Mas... Senhor(a), está vivo(a)?...')
}
 */