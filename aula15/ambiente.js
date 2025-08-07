let num = [5, 8, 2, 9, 3]
num[5] = 6

console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(10)
console.log(`O valor 8 está na posição ${pos}`)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor está na posição ${pos}`)
}