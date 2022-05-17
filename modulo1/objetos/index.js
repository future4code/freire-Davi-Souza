const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) // canal: globo , horário: 14h



const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // nome: "Juca", idade: 3, raca: "SRD"
console.log(gato) // nome: "Juba", idade: 3, raca: "SRD"
console.log(tartaruga) // nome: "Jubo", idade: 3, raca: "SRD"



function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // false (Descrição de backender)
console.log(minhaFuncao(pessoa, "altura")) // undefined (não existe o item altura)




 const pessoaa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 
 console.log(`Eu sou ${pessoaa.nome}, mas pode me chamar de: ${pessoaa.apelidos[0]}, ${pessoaa.apelidos[1]} ou ${pessoaa.apelidos[2]}`)
 
 
const individuo = 

{...pessoaa, apelidos: ["Amandita", "Manda", "Ama"]    


}

console.log(`Eu sou ${individuo.nome}, mas pode me chamar de: ${individuo.apelidos[0]}, ${individuo.apelidos[1]} ou ${individuo.apelidos[2]}`)





