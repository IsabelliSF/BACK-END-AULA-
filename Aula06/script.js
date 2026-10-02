console.log(document.getElementById("título"));

// =================================
// Selecionando elementos DOM
// =================================

// Selecionado por ID   
let titulo = document.getElementByID("titulo");
let subtitulo = document.getElemetyIdBuId;("subtitulo");
let paragrafo = document.getElemetyIdBuId;("paragrafo");
let imagem = document.getElemetyIdBuId;("imagemteste");

// selecionando por classe
let caixas = document.getElementyByClassName("box");

// mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

// =================================
// função para alterar o conteúdo
// =================================

function alterar() {
    titulo.innerHTML = "jarvis dominou tudo";
    subtitulo.innerHTML = "Só que não!";
    paragrafo.innerText = "O texto do parágrafo foi modificado pelo JavaScript";

    // Alterando elemento da classe
    caixas[0].innerText = "Primeiro parágrafo lterado";
    caixas[1].innerText = "Segundo parágrafo lterado";

    // Alterando imagens
    imagem.src = "https://br.pinterest.com/pin/916834436649479387/";
}

 