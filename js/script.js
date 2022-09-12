//IIFE 
let pokemonRepository = (function (){
    fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
        return response.json(); // This returns a promise!
    }).then(function (pokemonList) {
    console.log(pokemonList); // The actual JSON response
    }).catch(function () {
    // Error
    });

    function getAll() {
        return pokemonList;
    }

    function addPokemonItem(Poke) {
        let pokeList = document.querySelector('.pokemon-List');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = Poke.name;
        button.classList.add('button-class')
        listItem.appendChild(button);
        pokeList.appendChild(listItem);
    }

    return {
        add: add,
        getAll: getAll,
        addPokemonItem: addPokemonItem
    };
})()

// let pokemonRepository = (function (){
//     let pokemonList = [  
//     {id: 1, name: 'bulbasaur', type: ['grass', 'poison'],  HP: 45, Attack: 49, height: 1.0},
//     {id: 2, name: 'squirtle', type: ['water'],  HP: 44, Attack: 49, height: 0.5},
//     {id: 3, name: 'charmander', type:['fire'],  HP: 39, Attack: 52, height: 1.7},
//     {id: 4, name: 'pidgey', type: ['normal', 'flying'],  HP: 35, Attack: 55, height: 1.0}];

//     function add(pokemon){
//         if (
//             typeof pokemon === 'object' &&
//             'name' in pokemon
//           ) {
//             pokemonList.push(pokemon);
//           } else {
//             console.log("Enter correct pokemon data");
//           }
//     }

//     function getAll() {
//         return pokemonList;
//     }

//     function addPokemonItem(Poke) {
//         let pokeList = document.querySelector('.pokemon-List');
//         let listItem = document.createElement('li');
//         let button = document.createElement('button');
//         button.innerText = Poke.name;
//         button.classList.add('button-class')
//         listItem.appendChild(button);
//         pokeList.appendChild(listItem);
//     }

//     return {
//         add: add,
//         getAll: getAll,
//         addPokemonItem: addPokemonItem
//     };
// })()


// Using the add function to add another pokemon
pokemonRepository.add({
    id: 5, name: 'pikachu', type: ['electric'],  HP: 49, Attack: 55, height: 1.5
})

document.write('</br>');


// Calling the getAll function again to verify it was added
pokemonRepository.getAll().forEach(Poke => {
   pokemonRepository.addPokemonItem(Poke);
});
