/*
Um estacionamento possui 3 andares.​

Cada andar possui 5 vagas.​

O sistema precisa representar vagas ocupadas e livres.​

Pense antes de programar​

Como uma matriz pode representar os andares e vagas?​

Qual valor pode indicar vaga livre?​

Qual valor pode indicar vaga ocupada?​

Como percorrer todas as vagas do estacionamento?​
*/


let estacionamento = [
    [1, 2, 3, 4, 5], // Andar 1
    [1, 2, 3, 4, 5], // Andar 2
    [1, 2, 3, 4, 5] // Andar 3
    ]

    for (let andar = 0; andar < estacionamento.length; andar++) {
        for (let vaga = 0; vaga < estacionamento[andar].length; vaga++) {
         
        let status = estacionamento[andar][vaga] === 0
        ? "Livre"
        : "Ocupada";
         
        console.log(
        `Andar ${andar + 1}, Vaga ${vaga + 1}: ${status}`
        );
        }
        }