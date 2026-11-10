// Decidindo a situação de um aluno;

const nota1 = 6.0;
const nota2 = 7.0;
const media = (nota1 + nota2)/2

// O que é estrutura de Condição (condicional if/else, else if)

let situacao; 

if(media >= 7){
    situacao = "Aprovado"
}
else if(media >= 5){
    situacao = "recuperação"
}
else{
    situacao = "reprovado"
}

console.log(`Media ${media.toFixed(1)}: ${situacao}`)