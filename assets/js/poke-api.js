const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;     // criação de variável para definir a url da API

    return fetch(url)                                          // fazendo requisição em HTTP
        .then((response) => response.json())            // convertendo o body p/ json
        .then((jsonBody) => jsonBody.results)           // pega o json convertido e pega somente o results do body
}

Promise.all([                                       // transformando o pokemon em lista de novas requisições e depois utilizaremos o resultado delas
    fetch('https://pokeapi.co/api/v2/pokemon/1'),

    fetch('https://pokeapi.co/api/v2/pokemon/2'),

    fetch('https://pokeapi.co/api/v2/pokemon/3'),

    fetch('https://pokeapi.co/api/v2/pokemon/4'),

    fetch('https://pokeapi.co/api/v2/pokemon/5'),

    fetch('https://pokeapi.co/api/v2/pokemon/6'),

    fetch('https://pokeapi.co/api/v2/pokemon/7'),

    fetch('https://pokeapi.co/api/v2/pokemon/8'),

    fetch('https://pokeapi.co/api/v2/pokemon/9'),

    fetch('https://pokeapi.co/api/v2/pokemon/10')
]).then((results) => {
    console.log(results)
})