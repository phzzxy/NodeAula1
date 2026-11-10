function somar(n1,n2){
    return n1+n2
}

function subtrair(n1,n2){
    return n1-n2
}

function multiplicar(n1,n2){
    return n1*n2
}

function dividir(n1,n2){
    return n1/n2
    if(n2 === 0){
        dividir = "0"
    }
}

const Somar = somar(12, 8)
const Multiplicar = multiplicar (Somar, 3)
const Dividir = dividir(10, 2)
const Subtrair = subtrair(Multiplicar, Dividir)
const resultado = Subtrair

console.log(`O resultado de (12 + 8) * 3 - 10 / 2 é: ${resultado.toFixed(1)}`)