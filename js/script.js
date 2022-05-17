let pokemonList = [
    {id: 1, name: 'bulbasaur', type: ['grass', 'poison'],  HP: 45, Attack: 49, height: 1.0},
    {id: 2, name: 'squirtle', type: 'water',  HP: 44, Attack: 49, height: 0.5},
    {id: 3, name: 'charmander', type: 'fire',  HP: 39, Attack: 52, height: 1.7},
    {id: 4, name: 'pikachu', type: 'electric',  HP: 35, Attack: 55, height: 0.4}
];

function tableCall(){

    let pokeTable = "<table border='1|1'>";
    
    pokeTable += '<thead>';
    pokeTable += '<tr>';
    pokeTable += '<td>' + "ID" + '</td>';
    pokeTable += '<td>' + "Name" + '</td>';
    pokeTable += '<td>' + "Type" + '</td>';
    pokeTable += '<td>' + "HP" + '</td>';
    pokeTable += '<td>' + "Attack" + '</td>';
    pokeTable += '<td>' + "Height" + '</td>';
    pokeTable += '</tr>';
    pokeTable += '</thead>';

    for (i=0; i < pokemonList.length; i++){
        if (pokemonList[i].height >= 1.0) {
            document.write("WOW! Thats BIG!!");
        }
        pokeTable += '<tr>';
        pokeTable += '<td>' + pokemonList[i].id + '</td>';
        pokeTable += '<td>' + pokemonList[i].name + '</td>';
        pokeTable += '<td>' + pokemonList[i].type + '</td>';
        pokeTable += '<td>' + pokemonList[i].HP + '</td>';
        pokeTable += '<td>' + pokemonList[i].Attack + '</td>'; 
        pokeTable += '<td>' + pokemonList[i].height + '</td>';
        pokeTable += '</tr>';
    }
    document.getElementById("table").innerHTML = pokeTable;
}



tableCall();

