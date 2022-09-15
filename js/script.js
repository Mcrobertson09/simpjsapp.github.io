//IIFE
let pokemonRepository = (function () {
    
    let pokemonList = [];
    let apiUrl ='https://pokeapi.co/api/v2/pokemon/?limit=151';
    let pokemonListElement = document.querySelector('.pokemon-list');

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    //function to pull pokemon list from API
    async function loadList() {
        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        } catch (e) {
            console.error(e);
        }  
    }
    //funtion to grab pokemon details from API
    async function loadDetails(item) {
        let url = item.detailsUrl;
        try {
            const response = await fetch(url);
            const details = await response.json();
            item.height = details.height;
            item.types = details.types;
            item.imageUrl = details.sprites.front_default;
        } catch (e) {
            console.error(e);
        }
    }

    //Adding API info to the Pokedex List
    function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
 
        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);
        button.addEventListener('click', function(event) {
            showDetails(pokemon)
        })
    }; 
    
    //passing the details to the modal
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showDetailsModal(pokemon);
        });
    };

    //Modal creation and passing the info to modal
    function showDetailsModal(pokemon) {
        let modalContainer = document.querySelector('.pokemon-modal');

        modalContainer.innerText = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let title = document.createElement('h1');
        title.innerText = pokemon.name;

        let height = document.createElement('p');
        height.innerText = 'Height: ' + pokemon.height;

        let image = document.createElement('img');
        image.src = pokemon.imageUrl;

        modal.appendChild(title);
        modal.appendChild(height);
        modal.appendChild(image);
        modalContainer.appendChild(modal);

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        })

        modalContainer.classList.add('is-visible');
    }

    //function to hid the modal
    function hideModal() {
        let modalContainer = document.querySelector('.pokemon-modal');
        modalContainer.classList.remove('is-visible');
    }

    //escape key to close modal
    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('.pokemon-modal');
        if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    })

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    }
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

