//IIFE
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
    function getAll() {
      return pokemonList;
    };
  
    function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon && "detailsUrl" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct')
    }
  }

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
                console.log(pokemon);
            });
        } catch (e) {
            console.error(e);
        }
    };
  
  async function loadDetails(item) {
    let url = item.detailsUrl;
    try {
          const response = await fetch(url);
          const details = await response.json();
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types.map((type) => type.type.name).join(',');
          item.weight = details.weight;
      } catch (e) {
          console.error(e);
      }
  };
  
  //creating the elements in the modal
  function addListItem(pokemon) {
    let allPokemon = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemon-modal')
    button.classList.add('btn')
    listItem.appendChild(button);
    allPokemon.appendChild(listItem);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  };
    //passing the details to the modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon)
    });
  }
  
  //Setting up the details of the modal
  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');
  
    modalTitle.empty();
    modalBody.empty();
  
    let name = $('<h1>' + pokemon.name + '</h1>');
    let image = $('<img class="modal-img">');
    image.attr('src', pokemon.imageUrl);
    let height = $('<p>' + 'Height: ' + pokemon.height + '</p>');
    let weight = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');
    let types = $('<p>' + 'Types: ' + pokemon.types + '</p>');
  
    modalHeader.append(name);
    modalTitle.append(name);
    modalBody.append(image);
    modalBody.append(height);
    modalBody.append(weight);
    modalBody.append(types);
  }
  
    return {
      getAll : getAll,
      add : add,
      addListItem : addListItem,
      loadList : loadList,
      loadDetails : loadDetails,
      showDetails : showDetails
    };
  })();
  
  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });