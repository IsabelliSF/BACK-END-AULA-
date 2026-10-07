<!-- JSON significa JavaScript Object Notation e é um formato de representação e troca de dados. -->

JSON É COMO FICHA DE CADASTRO.

FICHA FÍSICA:           JASON:
Nome: João              "nome": "João"
Idade: 25               "idade": 25
Cidade: SP              "cidade": "SP"

É um formato para ORGANIZAR DADOS que TODO MUNDO entende (qualquer linguagem)

<!-------------------------------------------------------->
{
    "cachorro": {
        "nome": "Doug",
        "idade": 3,
        "raça": "Golden Retriver",
        "vacinado": true,
        "peso": 25.5,
        "brinquedo": ["bola", "osso", "frisbee"],
    "dono" {
        "nome": "Carl",
        "telefone": "11940028922",
    }
    }
}
<!-------------------------------------------------------->
EXPLICAÇÃO
<!-------------------------------------------------------->
// STRING (texto) - Sem aspas
"idade": 3,
"peso": 25.5,

//BOOLEAN (true/false)
"vacinado": true,

//ARRAY (lista) - com colchetes
"brinquedos": ["bola", "osso"]

OBJECT (objeto) - com chaves
"dono": {
    "nome": "João",
    "telefone": "11940028922"
}

//NULL (vazio)
"dataFalecimento": null
