function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// Será impresso 10 e 50
// Daria erro ao retirar o console.log



let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// esta função serve para o usuário inserir um texto e após isso o texto é colocado em letra minúscula e se houver a string "cenoura" retorna true, se não houver retorna false

// b. i. True, ii. true, iii. false



