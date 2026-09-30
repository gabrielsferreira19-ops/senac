/*
Demanda 1 - Sistema de Controle de Vendas
Uma loja de informática deseja criar um sistema para registrar vendas.
O sistema deverá armazenar nome do cliente, produto comprado, valor da compra e tipo de
cliente.
O sistema deverá aplicar regras de desconto conforme as condições da empresa.
Ao final deverá apresentar as informações da venda, quantidade de vendas realizadas e valor
total vendido.
*/

let nome = []
let produto = []
let valor = []
let tipodecliente = []


let nomeDigitado = prompt("Digite o nome do cliente!")
nomes.push(nomeDigitado)




let produtoDigitado = prompt("Digite o produto!")
produto.push(produtoDigitado)



let valorDigitaod = prompt("Digite o valor!")
valor.push(valorDigitado)


let tipodeclienteDigitado = prompt("Digite o tipodecliente!")
tipodecliente.push(tipodeclienteDigitado)






for (let i = 0; i < nomes.length; i++) {
    document.write("=======================================")
   
    document.write("NOME DO CLIENTE "+ nomes[i])
    document.write("NOME DO PRODUTO "+ produtos[i])
    document.write("VALOR DA COMPRA "+ valor[i])
    document.write([i]);
    
    document.write("=======================================")
}
