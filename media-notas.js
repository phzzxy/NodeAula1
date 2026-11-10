// media-notas.js - calculando a méda de um aluno

// Um objeto guarda dados relacioados sobre uma coisa (aqui, o aluno)
const aluno = {
    nome: 'ana paula',
    nota: 7.5,
    nota2: 8.0
};

// A função soma duas notas e devolve a média
function media(n1,n2){
    return (n1+n2)/2
}

const mediaF = media(aluno.nota, aluno.nota2);

console.log(`${aluno.nome}: media ${mediaF.toFixed(1)}`) 