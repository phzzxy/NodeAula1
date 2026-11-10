function media3(n1,n2,n3){
    return (n1+n2+n3)/2
}

function situacao(media){
    if(media >= 7) return "Aprovado"
    if(media >= 5) return "Recuperação"
    return "Reprovado"
}

const alunos = [
    {nome: 'miguel', p1: 7, p2: 5, p3: 4},
    {nome: 'guilherme', p1: 4, p2: 4, p3: 4},
    {nome: 'Bia', p1: 9, p2: 9, p3: 8},
]

for(let i = 0; i < alunos.length; i++){
    const m = media3(alunos[i].p1, alunos[i].p2, alunos[i].p3);
    console.log(`${alunos[i].nome} - media ${m.toFixed(1)} - ${situacao(m)}`)
}