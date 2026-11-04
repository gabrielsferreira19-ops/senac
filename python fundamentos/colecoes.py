#tuplas - colecoes imutaveis

frutas = ("maca", "uva", "laranja")
frutas[0] = "abacaxi"
print(frutas[0])


#lists
filmes = ["seven", "avatar", "cara de barro"]
filmes[1] = "carros"
filmes.append("jojo")
filmes.clear()
print(filmes)

#dict: chave->valor
cadastro = {
    "nome":"gabriel", "idade":30 , "sexo": "M"
}

print(cadastro["nome"])
cadastro["idade"]= 202
print(cadastro.get("nome"))

#set - valores irrepitiveis
valorUnico ={1,2,2,2, "gabriel", "gabriel"}
print(valorUnico)


#mistura

teste = [{1,2},{"gabriel"},{"nome": "gabriel"},("gg","kk")]