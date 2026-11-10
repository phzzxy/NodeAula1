
function media(n1,n2,n3){
    return (n1 + n2 + n3)/3
}

const boletim1 = {
    aluno : 'Miguel',
    nota1 : 7,
    nota2 : 6.5,
    nota3 : 6
};

const boletim2 = {
    aluno : "Guilherme",
    nota1 : 6,
    nota2 : 4.5,
    nota3 : 10
};
const boletim3 = {
    aluno : "Isadora",
    nota1 : 9,
    nota2 : 8.5,
    nota3 : 9
};


if(media >= 8){
    situacao = "Aprovado"
}
else if(media >= 5){
    situacao = "recuperação"
}
else{
    situacao = "reprovado"
}

const mediaBoletim1 = media(aluno.nota1,aluno.nota2,aluno.nota3)

console.log(`aluno:${boletim1.aluno}s media: ${mediaBoletim1} situação: ${situacao}`)