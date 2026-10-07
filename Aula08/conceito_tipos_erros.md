<!-- 📊 STATUS CODES (RESPOSTAS DO SERVIDOR) -->

2xx - SUCESSO (tudo certp)
    200 - ok (requisição funcionu)
    201 - Criado (post funcionou)

3xx - REDIRECIONAMENTO (mudou lugar)
        301 - mudou permanentemente

4xx - ERRO DO CLIENTE (você errou)
    400 - requisição errada
    401 - não autorizada (sem login)
    403 - proibido (login sem permissão)
    404 - não encontrada

5xx - ERRO DO SERVIDOR (eles erraram)
    500 - erro interno no servidor
    503 - serviço indisponível

CENÁRIO: você pede uma pizza! 🍕

200 = "Aqui está sua pizza!" ✅
404 = "Não temos essa pizza"❌
500 = "O forno queimou ou querou"💥
401 = "Só entregamos para clientes"🔒
429 = "Muitos pedidos, aguarde"⌛

https://dog.ceo/api/breeds/image/random