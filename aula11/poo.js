class Aluno {
    constructor(nome, idade, notas, matricula) {
        this.nome = nome
        this.idade = idade
        this.notas = notas
        this.matricula = matricula
    }

    verificarSitucao() {
        let soma = 0
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]
        }
        if ((soma / 4) >= 7) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

let aluno = new Aluno("Jonathan", 24, [10, 9, 8, 2], "SENAC01")
let aluno2 = new Aluno("Ana", 13, [1,1,1,1],"SENAC02")
aluno.verificarSitucao();
aluno2.verificarSitucao()

/*
let aluno = {
    nome: "jonathan",
    idade: 24,
    matricula: "SENAC01",
    notas: [2, 10, 7, 9],
    verificarSituacao: function () {
        let soma = 0
        // perccorer e somar notas
        for (let i = 0; i < this.notas.length; i++) {

            soma += this.notas[i]
        }

        if ((soma / 4) >= 7) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }

    }

}


aluno.verificarSituacao()

*/