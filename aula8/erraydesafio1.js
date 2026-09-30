/*
Uma escola deseja criar um sistema para acompanhar alunos.
O sistema deverá receber nome, notas e quantidade de faltas.
Deverá calcular a média e apresentar a situação final do aluno conforme as regras da
instituição.
Ao final deverá apresentar os alunos cadastrados e suas situações


*/

// variaveis declaradas
let nomes = [] 
let qtdFaltas = []
let medias = []
let situacaoFinal = []


let encerrar =  "n"

do {


let nomeDigitado = prompt("Digite o nome do aluno!")
nomes.push(nomeDigitado)

let nota1Digitado = Number(prompt("Digite a nota 1 do aluno!"))
let nota2Digitado = Number(prompt("Digite a nota 2 do aluno!"))
let nota3Digitado = Number(prompt("Digite a nota 3 do aluno!"))
let nota4Digitado = Number(prompt("Digite a nota 4 do aluno!"))

let mediaCalculada = (nota1Digitado + nota2Digitado + nota3Digitado + nota4Digitado) / 4
medias.push(mediaCalculada)



let qtdFaltaDigitado = Number(prompt("Digite a quantidade de falta do aluno!"))
qtdFaltas.push(qtdFaltaDigitado)




if(mediaCalculada>7 && qtdFaltaDigitado< 10){
    situacaoFinal.push("SITUACAO : APROVADO!!")
}else{
    situacaoFinal.push("SITUACAO : REPROVADO");
}



let resposta = prompt("Quer continuar o programa? (S/N)")
if (resposta=="n") {
encerrar ="s"
} 




    
} while (encerrar=="n");




for (let i = 0; i < nomes.length; i++) {
    document.write("=======================================")
   
    document.write("NOME DO ALUNO "+ nomes[i])
    document.write("MEDIA DO ALUNO "+ medias[i])
    document.write("QUANTIDADE DE FALTA DO ALUNO "+ qtdFaltas[i])
    document.write(situacaoFinal[i]);
    
    document.write("=======================================")
}


