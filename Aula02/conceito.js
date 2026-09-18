// INICIO BACKEND - JSVSSCRIPT

// VARIÁVEIS

//ANTIGO!!!!!!!!!!, pode ser redeclarado e mudar o valor.
var idade = 10
var idade = 20 // não gera erro

// mais moderno, pode mudar de valor, mas não pode ser redeclarado e mudar o valor.
let nome = "Julia"
nome = "Dafny"; //permitido

//let nome = "jose"; //erro


//const é fixo, não pode mudar de valor
const pi = 3.14;
// pi = 40; // erro

// FORMAS DE ESCREVER UM CÓDIGO

//CAMEL CASE ---- *A mais famosa
// - Primeira palavra minúscula
// - Palavas seguintes começam com maiúscula

// let nomeCompleto; let idadeUsuario; funtionCalcularIdade(){}
let NOMECOMPLETO;

// -------------------------
// PASCALCASE
// - Todas as palavras começam com letra maiúscula

// class UsuarioSistema {
//     constructor(nome, idade) {
//             this.nome = nome;
//             this =idade;
//     }
// };


// ------------------------
// SNAKE CASE
// - Palavras separadas por underscore_

//  let nome_completo; let total_vendas;

// Template String
console.log(`Sua idade : ${idade} anos.`)