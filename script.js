// Code to generate six random pokemon, their names,
// and their sprites from the converted JSON file

async function generateRandomPokemonWithSpritesAndNamesAndTypes() {
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

  // Output the chosen Pokemon data to a div with class "results"
  const resultsDiv = document.querySelector(".results");
  resultsDiv.innerHTML = "";

  pokemonData.forEach((pokemon) => {
    const pokemonName = pokemon.name;
    const pokemonSpriteURL = pokemon.sprites.front_default;
    const pokemonType = pokemon.types[0].type.name; // Get the first type of the Pokemon

    // Create a new div to hold the Pokemon data
    const pokemonDiv = document.createElement("div");
    pokemonDiv.classList.add("pokemon");

    // Create a new heading for the Pokemon name
    const pokemonNameHeading = document.createElement("h2");
    pokemonNameHeading.textContent = pokemonName;

    // Create a new paragraph for the Pokemon type
    const pokemonTypePara = document.createElement("p");
    pokemonTypePara.textContent = `Type: ${pokemonType}`;

    // Create a new image for the Pokemon sprite
    const pokemonSpriteImg = document.createElement("img");
    pokemonSpriteImg.src = pokemonSpriteURL;

    // Append the name, type, and sprite to the Pokemon div
    pokemonDiv.appendChild(pokemonNameHeading);
    pokemonDiv.appendChild(pokemonTypePara);
    pokemonDiv.appendChild(pokemonSpriteImg);

    // Append the Pokemon div to the results div
    resultsDiv.appendChild(pokemonDiv);
  });
}

window.onload = function() {
  generateRandomPokemonWithSpritesAndNamesAndTypes();
};