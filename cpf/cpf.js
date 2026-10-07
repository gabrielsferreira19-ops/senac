function validarCPF(cpf) {
    // Verifica se o CPF possui exatamente 11 números
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais
    let todosIguais = true;

    for (let i = 1; i < cpf.length; i++) {
        if (cpf[i] !== cpf[0]) {
            todosIguais = false;
            break;
        }
    }

    if (todosIguais) {
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = soma % 11;
    let primeiroDigito = 11 - resto;

    if (primeiroDigito >= 10) {
        primeiroDigito = 0;
    }

    // Compara com o décimo dígito informado
    if (primeiroDigito !== Number(cpf[9])) {
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    resto = soma % 11;
    let segundoDigito = 11 - resto;

    if (segundoDigito >= 10) {
        segundoDigito = 0;
    }

    // Compara com o último dígito informado
    if (segundoDigito !== Number(cpf[10])) {
        return false;
    }

    return true;
}


// Programa principal
let cpf = prompt("Digite o CPF com 11 números:");

if (validarCPF(cpf)) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}

