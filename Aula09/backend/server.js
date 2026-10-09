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
const { getActiveResourcesInfo } = require("process");
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
    return array[i];
}

//===============================//
// ROTAS DA API
//===============================//

// ROTA 1 - Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
    // req - request (requisição)= é o pedido que chega ao servidor, por exemplo, o navegador pede uma foto de cachorro
    // res - response (resposta) = é p que o servidor envia de volta,por exemplo, o endereço da foto do cachorro

    // Pegar todas as fotos de todas as raças 
    // oject.values pega os valores do objeto
    // flat transforma tudo em um único array
    const todasAsFotos = Object.values(cachorros).flat();


    // Sorteia uma foto aleatória
    const item = sortear(todasAsFotos)

    // resposde para o cliente em formato JSON
    res.json({
        // status da resposta
        status: "success",
        // Url da imagem que foi sorteada
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

    // Rota 2- Cachorro por raça
    // Exmplo de Acesso
    // http:localhpst:3000/api/cachorros/husky

    app.get = ("/api/cachorros/:raca", (req, res) => {
        // pega o parametro da URL (ex: husky)
        const raca = req.params.raca.toLocaleLowerCase();
        // params = contém os parâmetros definidos na URL da rota
        // .raca = acessa paâmetro chamado raça.
        // .toLowerCase() = Transforma todas as letras em minúsculas
        if (!cachorros[raca]) {
            // Cachorros[raca]: procurar a raça dentro do objeto *cachorros*
            // !: significa nãp: Nesse caso, verifica se a raça não existe ou se seu valor é falso
            // Se não existir, retorna erro 404
            res.status(404).json({
                status: "error",
                message: `Raça "${raca}" não encontrada`
            });

            // Encerra a execução da rota
            return;
        }

        // Sorteia uma fota da raça solicitada
        const item = sortear(cachorros[raca]);

        // Retorna a resposta em JSON
        res.jason({
            status: "success",
            message: `http://localhost:${PORT}/fotos/${item}`
        });
    });

    //==========================================//
    // INICIA O SERVIDOR
    //==========================================//

    // Inicia o servidor express
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
        console.log(`Coloque as fotos manualmente em: data/fotos/`);
});