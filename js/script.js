//IIFE 
let pokemonRepository = (function (){
    let pokemonList = [  
    {id: 1, name: 'bulbasaur', type: ['grass', 'poison'],  HP: 45, Attack: 49, height: 1.0},
    {id: 2, name: 'squirtle', type: ['water'],  HP: 44, Attack: 49, height: 0.5},
    {id: 3, name: 'charmander', type:['fire'],  HP: 39, Attack: 52, height: 1.7},
    {id: 4, name: 'pidgey', type: ['normal', 'flying'],  HP: 35, Attack: 55, height: 1.0}];

    function add(pokemon){
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon
          ) {
            pokemonList.push(pokemon);
          } else {
            console.log("Enter correct pokemon data");
          }
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})()

// Calling the GetAll to find respoitory Data
pokemonRepository.getAll().forEach(Poke => {
    document.write('</br>' + Poke.name + ': ' 
                    + '</br>attack: ' + Poke.Attack + ' '
                    + '</br>type: ' + Poke.type + ' '
                    + '</br>hp: ' + Poke.HP + ' '
                    + '</br>height: ' + Poke.height + ' ');

    if (Poke.height >= 1.0) {
    document.write('- WOW! Thats BIG!!');
    }
    document.write('</br>');
});

document.write('</br>');

// Using the add function to add another pokemon
pokemonRepository.add({
    id: 5, name: 'pikachu', type: ['electric'],  HP: 49, Attack: 55, height: 1.5
})

document.write('</br>');

// Calling the gatAll functrion again to verify it was added
pokemonRepository.getAll().forEach(Poke => {
    document.write(`</br>${Poke.name}: </br>ID: ${Poke.id} </br>attack: ${Poke.Attack} </br>type: ${Poke.type} </br>hp: ${Poke.HP} </br>height: ${Poke.height} `);

    if (Poke.height >= 1.0) {
    document.write('- WOW! Thats BIG!!');
    }
    document.write('</br>');
});
