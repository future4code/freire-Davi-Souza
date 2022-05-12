let array
console.log('a. ', array) //Undefined

array = null
console.log('b. ', array) //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor) //9






const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 
// SUBI NUM ÔNIBUS EM MIRROCOS 27





const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o seu e-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}`)





const comidaPreferida = ["pizza", "hamburguer", "strogonoff", "churrasco", "lasanha"]
console.log(comidaPreferida)

console.log("Essas são minhas comidas preferidas:",
"pizza",
"hamburguer",
)


const comidaPrefUsuario = prompt("Qual a sua comida preferida?")

const listaUsuarioMinuscula = comidaPrefUsuario.toLowerCase()

const listaUsuario = comidaPreferida.replaceAll(1, listaUsuarioMinuscula)

console.log(listaUsuario);


