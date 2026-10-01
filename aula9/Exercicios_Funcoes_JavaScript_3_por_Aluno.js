/* 
1. Fácil — Criando e chamando uma função
Em um sistema de restaurante, crie uma função chamada abrirAtendimento que apresente a
mensagem “Atendimento iniciado”. Depois, chame a função para verificar seu funcionamento.

2. Fácil–médio — Função com parâmetros e retorno
Crie uma função que receba preço do lanche e quantidade. A função deverá retornar o total do pedido.
Teste a função com pelo menos três valores diferentes e apresente os resultados.

3. Médio — Função com regra de decisão
Crie uma função que analise valor do pedido. Quando o valor for igual ou superior a R$ 80, a função
deverá retornar “Entrega grátis”; caso contrário, deverá retornar “Cobrar entrega”. Faça diferentes
chamadas para testar as duas possibilidades.
*/


function abrirAtendimento() {
    console.log("Atendimento iniciado");
    }

    abrirAtendimento();





function calcularPedido(precolanche, quantidade) {
    return (precolanche * quantidade)
}

console.log("Pedido 1: R$ " + calcularPedido(10,5));
console.log("Pedido 2: R$ " + calcularPedido(10,3));
console.log("Pedido 3: R$ " + calcularPedido(10,2));




function analisePedido(valorPedido) {
    if (valorPedido >= 80) {
    return ("Entrega grátis");
    } else {
    return ("Cobrar entrega");
    }
    }

console.log("Pedido de R$ 30: " + analisePedido(30));
console.log("Pedido de R$ 50: " + analisePedido(50));
console.log("Pedido de R$ 100: " + analisePedido(100));



