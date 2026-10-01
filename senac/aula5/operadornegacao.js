const idade = 20
const possuiingresso = true

const resultdoCondicao= idade >=18 && possuiingresso

console.log(
    'resultado da condicao -> ${!resultado)'
)
if (idade >=18 && possuiingresso){
    console.log("entrada permitida")
} else{
    console.log("entrada negada")
}


const nome = "gabriel"


if (!(nome.length > 0)){
    console.log( "é obrigatorio o preenchimento")
}
