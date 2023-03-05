// Code to generate six random pokemon, their names,
// and their sprites from the converted JSON file

async function generateRandomPokemonWithSprites() {
    const numPokemon = 898; // The total number of Pokemon in the PokeAPI
    const pokemonIDs = []; // An array to store the IDs of the chosen Pokemon
    
    // Generate six random numbers between 1 and 898
    while (pokemonIDs.length < 6) {
      const randomID = Math.floor(Math.random() * numPokemon) + 1;
      if (!pokemonIDs.includes(randomID)) {
        pokemonIDs.push(randomID);
      }
    }
  
    const pokemonData = []; // An array to store the fetched Pokemon data
  
    // Fetch data for each random Pokemon ID and store it in the pokemonData array
    await Promise.all(pokemonIDs.map(async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      pokemonData.push(data);
    }));
  
    // Output the chosen Pokemon data
    console.log(pokemonData);
  
    // Output the chosen Pokemon sprites
    pokemonData.forEach((pokemon) => {
      console.log(pokemon.name, pokemon.sprites.front_default);
    });
  }

// Code to assign an eventlistener to the user clicking the div
// to redirect user to new page with the generated team

var div = document.getElementsByClassName('pokeball')[0].addEventListener('click', function (event) (
  
))