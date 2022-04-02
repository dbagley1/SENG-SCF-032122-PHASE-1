/*FYI regarding defer tag and waiting for index.html page load.... you might come across this event listener sometimes instead of defer tag in your index.html. Serves same purpose but doesn't look as clean...
 */
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     // all JS (or all JS that refers to elements in the index.html) would go in here.
//     const container = document.querySelector(".container")
// });

function renderPokemon(pokemon = pokemonDB[0]) {
  const pokemonDiv = document.createElement('div');
  pokemonDiv.id = `poke-${pokemon.id}`;
  pokemonDiv.classList.add('card', 'm-2', "shadow-lg");
  pokemonDiv.style.background = 'white';
  pokemonDiv.innerHTML = /*html*/`
    <div class="card-body text-center">
        <div class="row d-grid m-0"><h3>${pokemon.name}</h3></div>
        <div class="row d-grid m-0"><p>${pokemon.type}</p></div>
        <div class="container"><img src="${pokemon.img}" /></div>
        <div class="row row-cols-2 m-0">
          <button class="like-button btn btn-outline-danger">♥ ${pokemon.likes}</button>
          <button class="delete-button btn btn-danger fw-bold">Delete</button>
        </div>
      </div>
    </div>
    `;
  return pokemonDiv;
}
// document.body.append(renderPokemon());

const pokeContainer = document.querySelector('#poke-container');

pokemonDB.forEach(pokemon => {
  const pokemonDiv = fetchPokemon(pokemon.name);
});

const likeButtons = document.querySelectorAll('.like-button');
const deleteButtons = document.querySelectorAll('.delete-button');
const form = document.querySelector('#poke-form');
const nameInput = document.querySelector('#name-input');
const imgInput = document.querySelector('#img-input');

async function fetchPokemon(pokemonName) {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const response = await fetch(url);
  const data = await response.json();

  const newPokemon = {
    id: pokemonDB.length + 1,
    name: data.name,
    type: data.types[0].type.name,
    img: data.sprites?.other['official-artwork']?.front_default || data.sprites?.front_default || 'no image',
    likes: 0,
  };
  pokemonDB.push(newPokemon);
  const pokemonDiv = renderPokemon(newPokemon);
  pokeContainer.append(pokemonDiv);
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchPokemon(nameInput.value);
});
