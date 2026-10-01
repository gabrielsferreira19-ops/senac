
/* ler o número do mes (de jan a mar), 
e informar o nome do mes */

let mes = Number(prompt("Informe o número do mês"));
switch (mes) {
    case 1:
        document.write("Janeiro");
        break;
    case 2:
        document.write("Fevereiro");
        break;
    case 3:
        document.write("Março");
        break;
    default:
        document.write("Você digitou um número fora do intervalo");
}