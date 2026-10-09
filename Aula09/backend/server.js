//=============================//
// NOSSA API DE CACHORROS
//=============================//

// Agora as fotos NÃO são mais baixados automaticamente!
// Eleas DEVEM existir manualmente na pasta
// data/fotos
//=============================//

// ROTAS:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importar o framework Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: fronted)
const cors = require("cors");
// Importa o módulo de arquivos de NODE
const fs = require("fs");
//  Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças fotos
const cachorros = require("./data/dogs.json");
// criar a aplicação Express
const app = express();
// Definir a porta onde o servidor irá rodar
const PORT = 3000;
// Habilitar o uso do CRS na aplicação
app.use(cors());

//==============================================================================//
// SERVIR ARQUIVOS ESTÁTICOS
//==============================================================================//

// Nós falamos para o express
// "Tudp o que estiver na pasta fata/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") // caminho real da pasta do servidor
    )
)

//==============================================================================//
// FUNÇÃO AUXILIAR
//==============================================================================//

// Função que recebe um array e retorna um item aleatório dele
function sortear(array) {
    // Gera um número aleatório entre 0 e o tamamnho do aray
    // array length - conta quantas itemd rxistem na lista
    // math.rando() - sorteia um número decimal entre 0 e 1
    // math.random( * array length - Multiplica o número sorteado pela quantidade de intens
    // math.floor() - tira a parte decimal, arredondando para baixo.
    const i = Math.floor(Math.random() * arraylength)
    // const i = guarda a posição na variável i
    // retorna o item sorteado
    return array [1]
}
