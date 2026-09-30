/*
1. Fácil — Lanches disponíveis
Crie um array contendo cinco lanches. Apresente o segundo e o último. Altere um item e mostre a
lista atualizada.

2. Fácil–médio — Pedidos
Comece com três pedidos cadastrados. Adicione outros quatro e apresente todos os pedidos e a
quantidade total.

3. Médio — Valores dos pedidos
Os valores são 25, 80, 45, 120, 30, 95 e 150 reais. Percorra os valores e informe quais pedidos
custaram R$ 80 ou mais. Ao final, apresente quantos pedidos atingiram esse valor.

Orientação: leia a situação, identifique os dados que precisam ser armazenados e desenvolva a
solução em JavaScript. Teste o programa após concluir
*/

let lanches = ["pizza", "cachorro quente", "hamberguer", "pastel", "misto quente"]
console.log (lanches[1])
console.log (lanches[5])
lanches[1] = "bolo"



lanches.push('bolo')
console.log(lanches)



let valores =[25, 80, 45, 120, 30, 95, 150]
let qtd = 0

console.log("Pedidos com valor maior ou igual a R$ 80:");

for (let i = 0; i < valores.length; i++) {
    const valores = valores [i];
    if(valores>=80)
    qtd++
    
    
}
