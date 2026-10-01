/* ler o codigo do produto (de 1 ate 4) e informar
o preco do produto */

let codigo = Number(prompt ("informe o codigo do produto"));
switch (codigo) {
    case 1:
        document.write("cafe -R$5,00");
        break;
    case 2:
        document.write("leite - R$8,00");
        break;
    case 3:
        document.write("bolo formigueiro - R$ 10,00");
        break;
    default:
        document.write("codigo invalido");

        
                

}