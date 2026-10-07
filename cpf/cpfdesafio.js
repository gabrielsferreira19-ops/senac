/* 1 Receber ou armazenar um CPF com 11 dígitos. OK
2 Verificar se o CPF possui exatamente 11 números. OK
3 Não aceitar CPFs formados por todos os dígitos iguais. OK
4 Calcular o primeiro dígito verificador usando os 9 primeiros números. OK
5 Comparar o primeiro dígito calculado com o décimo dígito informado. OK
6 Calcular o segundo dígito verificador usando os 10 primeiros números. 
7 Comparar o segundo dígito calculado com o último dígito informado.
8 Criar uma função chamada validarCPF(cpf). OK 
9 A função deverá retornar true para CPF válido e false para CPF inválido. OK 
10 O programa principal deverá chamar a função e exibir CPF válido ou CPF inválido. OK */
//conj -> lista -> array



function validarCPF(cpf) {

    let digito10 = cpf[9]
    let digito11 = cpf[10]

    let cpfInvalido = "11111111111" ||
        "22222222222" || "33333333333"
        || "44444444444" || "55555555555"
        || "66666666666" || "77777777777"
        || "88888888888" || "99999999999"
        || "00000000000"

    if (cpf.length != 11) {
        console.log("CPF INVALIDO tamanho")
    }

    if (cpf === cpfInvalido) {
        console.log("CPF INVALIDO")
    }

    let mult = 10
    let soma = 0

    for (let i = 0; i < 9; i++) {
        soma = soma + cpf[i] * mult
        mult--
    }

    let digito10Calculado = retornaDigitoCalculado(soma)
    console.log("DIGITO 10 " + digito10Calculado)

    soma = 0
    mult = 10

    for (let i = 1; i < 10; i++) {
        soma = soma + cpf[i] * mult
        mult--
    }


    let digito11Calculado = retornaDigitoCalculado(soma)

    retornaResultado(digito10Calculado, digito10, digito11, digito11Calculado)


}

function retornaDigitoCalculado(soma) {
    let resto = soma % 11

    if (resto === 0 || resto === 1) {
        return 0
    }

    return 11 - resto
}

function retornaResultado(digito10Calculado, digito10, digito11, digito11Calculado) {
    if (digito10Calculado === Number(digito10)
        && Number(digito11) === digito11Calculado) {
        console.log("CPF VÁLIDO")
        return
    }

    console.log("CPF INVÁLIDO")
}

validarCPF("18748234729")
