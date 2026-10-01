/*
ler um valor e testa se este valor é 
igual a 10, menor do que 10 ou maior
*/
let valor = Number(prompt("Digite um valor"));
let msg = (valor>10) ? "Maior do que 10" : (valor<10)? "Menor do que 10" : "Igual a 10";
document.write(msg);