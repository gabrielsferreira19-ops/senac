let notas = [
    [8, 9, 3, 6], //0
    [7, 8, 4, 8],//1
    [5, 8, 6, 9],//2
]

for (let linhas = 0; linhas < notas.length; linhas++) {
    const notasAlunos = notas[linhas];
    console.log("Notas do aluno " + linhas)
    console.table(notasAlunos)
}

for (let linhas = 0; linhas < notas.length; linhas++) {
    for (let colunas = 0; colunas < notas[linhas].length; colunas++) {
        const notaProva = notas[linhas][colunas];

        console.log("Nota da linha " + linhas)
        console.log("Nota da coluna " + colunas)
        console.log("Nota da prova " + notaProva)
    }
}








/*
let notasAlunos3 = notas[2]
notas[2][2] = 10

console.table(notas)

let notaProva1 = notas[2][0]
console.log(notaProva1)

*/








