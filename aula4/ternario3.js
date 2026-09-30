/* 
ler um valor e informar se o valor é par ou impar 
*/
let valor = Number(prompt("Informe um valor"));
let texto = (valor % 2) == 0 ? "Valor par" : "Valor ímpar";
document.write(texto);

