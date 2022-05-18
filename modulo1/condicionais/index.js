/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} */

// Se o resto da divisão deste número por 2 for igual a 0, passou no teste. Se não, não passou no teste.
// Números pares passam no teste, números ímpares não.


/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

//a) Se a fruta for laranja o preço é 3.5, se for maçã é 2.25...e assim vai. E se a fruta não estiver declarada o preço é 5.
//b) O preço da fruta é R$ 2,25
//c) O preço da fruta é R$ 5,5



const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) transformando em number o número recebido
//b) erro
// c) haverá um erro se o número for menor que 0 pois não existe a condicional else para se o número for menor que 0.