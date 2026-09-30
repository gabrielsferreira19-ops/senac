/*
ler duas notas, calcular a média
e informar se o aluno está reprovado ou
aprovado, considerando a média aprov = 6 
*/  



let nota1 = Number ( prompt ("informe a nota 1"))
let nota2 = Number(prompt("informe a nota 2"))
let media = (nota1+nota2)/2;
let mresultado = (media>=6) ? "aprovado" : "reprovado";
document.write(resultado);   
 
