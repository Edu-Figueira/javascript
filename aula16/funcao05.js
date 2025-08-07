// Função recursiva (aquela que chama ela mesma):

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/* 
O fatorial de um número pode ser calculado a partir do fatorial de outro. Exemplo:
5! = 5 x 4 x 3 x 2 x 1
5! - 5 x 4!

Ou seja,
n! = n x(n-1)!
a não quanto ao fatorial de 1, que é 1 mesmo.
*/