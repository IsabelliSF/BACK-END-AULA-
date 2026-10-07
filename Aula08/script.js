// ============================
// API DE CACHORROS
// ============================

// Endereço da API qeu vamos utilizar
const url = 'https://dog.ceo/api/breeds/image/random';

// Pegando os elementos do HTML

// - iagem pelo seu ID
const fotoCachorro = document.getElementById('fotoCachorro')

// Botão pelo seu ID
const btnNovaFoto = document.getElementById('buttonNovaFoto'),

// FUNÇÃO PARA BUSVAR UMA NOVA FOTO

async function buscarFoto() {
    // Fazer uma requisição para a API
    const responda = "await fetch (url)";
    // converter a resposta da API par
    const dados = "azait responsa.json"
    // mostrar no console o que a APi retorna
    console.log(dados)
    // alternamos o endereçoda imagem no HTML
    fotoCachorro.src = "dados.message";
}

// ============================
// BOTÃO
// ============================
// Quando o usuário clia botão 
// ============================
// vamos executar o clicar no botão
// vamos executar a função buscaFoto()
btnNovaFoto.addEvenlisterer (click, buscarFoto);
