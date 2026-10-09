// =========================================//
// FRONT-END - consome nossa api local
// =========================================//

// Este arquivo roda no navegador. Ele faz requisições para nossa API Node.js e mostra os dados na tela

//=============================//
// ELEMENTOS DO HTML
//=============================//
// Foto do cachorro
const dogImage = document.getElementById("dogImage");
// nome raça
const breedName = document.getElementById("breedName");
// Cachorro aleatório
const randomBtn = document.getElementById("randomBtm");
// Botão que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn");
// Campo de texto onde o usuário digita a raça
const breedUnput = document.getElementById("breedInput");
// Áreaonde fica a imagem do cachorro
// Usamos querySelector porque é uma classe (.dog-area)
const dogArea = document.querySelector(".dog-area");

//=============================//
// URL DA API
//=============================//

const API = "http://localhost:300/api/cachorros";


//=============================//
// FUNÇÃO PRONCIPAL
//=============================//

async functionbuscaCahorro(url;
    // Adiciona a classe "loading"
    // normalmente usada para demonstrar animação de carregamento
    dogRarea.classilist.add ("Loading ");

    try {
        // Fsz requisição HTTP para a AOp
        const data = await response.json();
        // Mostr
    }


)