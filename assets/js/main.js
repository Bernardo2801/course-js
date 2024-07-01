
const offset = 0;   // criação de variável para definir paginação
const limit = 10;   // criação de variável para definir limite de item por página
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;     // criação de variável para definir a url da API

fetch(url)                                           // processo de manipulação da resposta
    .then((response) => response.json())            // 1° then recebe url e trata em formato de json
    .then((jsonBody) => response.json (jsonBody))   // recebe o json convertido e try
    .catch((error) => response.json (error))        // em caso de erro, return error