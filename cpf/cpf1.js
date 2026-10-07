let cpfInvalido = "11111111111" || "22222222222" || "33333333333" || "44444444444" || "55555555555" || "66666666666" || "77777777777" || "88888888888" || "99999999999" || "00000000000"
let mensagem;
let cpf = [];

function validarCPF(cpf) {





    if (cpf === cpfInvalido) {
        console.log(mensagem = "CPF inválido")
        return


    }


    if (cpf.length == 11) {
        console.log("Seu CPF é: " + cpf)

    }
    else {
        console.log(mensagem = "Quantidade de números está errada")
        return
    }



    let soma = 0

    for (let i = 0; i < 9; i++) {
        soma = soma + (cpf[i] * (10 - i))
    }
    let digitoVerificador = soma % 11;
    digitoVerificador = 11 - digitoVerificador
    if (digitoVerificador >= 10) {
        digitoVerificador = 0

    }

    soma = 0

    for (let i = 0; i < 10; i++) {
        soma = soma + (cpf[i] * (11 - i))
    }
    let digitoVerificador2 = soma % 11;
    digitoVerificador2 = 11 - digitoVerificador2
    if (digitoVerificador2 >= 10) {
        digitoVerificador2 = 0

    }


    if (digitoVerificador2 == cpf[10] && digitoVerificador == cpf[9]) {
        console.log(mensagem = "O CPF está correto")

    } else {
        console.log(mensagem = "O CPF está incorreto")

    }








}

validarCPF("")

