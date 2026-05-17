// Ejercicio 9
// Realizamos una petición a la PokeAPI.
// Cada vez que se recargue la página, saldrá un Pokémon aleatorio
// de la primera generación, es decir, del 1 al 151.

const randomImage = document.querySelector(".random-image");

const randomPokemonId = Math.floor(Math.random() * 151) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
  .then((response) => response.json())
  .then((pokemon) => {
    randomImage.src = pokemon.sprites.other["official-artwork"].front_default;
  });