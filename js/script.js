
let pokemonList = [
    {
    name: 'bulbasaur', 
    type: ['grass', 'poison'],  
    HP: 45, 
    Atack: 49, 
    height: 0.7
    },
    {name: 'squirtle', type: 'water',  HP: 44, Atack: 49, height: 0.5},
    {name: 'charmander', type: 'fire',  HP: 39, Atack: 52, height: 0.6},
    {name: 'pikachu', type: 'electric',  HP: 35, Atack: 55, height: 0.4}
]

pokemonList.forEach(pokemonList => {
    for (let pokemon in pokemonList) {
        document.write(`${pokemon}: ${pokemonList[pokemon]}`);
    }
})