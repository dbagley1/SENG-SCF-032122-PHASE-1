const pokeForm = document.getElementById("poke-form");

pokeForm.addEventListener("submit", addPoke);

// create poke function will not work with our API -- yet. But it still works with our static pokemonDB.
function addPoke(e) {
  e.preventDefault();
  const name = document.getElementById("name-input").value;
  const img = document.getElementById("img-input").value;

  const newPoke = {
    id: pokemonDB.length + 1,
    name: name,
    img: img,
    likes: 0,
  };

  renderPokemon(newPoke);
  // add new character object to pokemonDB. Note: this will not persist on page refresh.
  pokemonDB.push(newPoke);
  pokeForm.reset();
  alert("nice job! your new poke is added to page");
}

function renderPokemon(character) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${character.id}`;
  pokeCard.className = "poke-card";
  pokeCard.addEventListener('click', () => {
    showCharacter(character);
  });

  pokeCard.addEventListener("click", () => showCharacter(character));
  // NOTE: the below listener does not work because we haven't passed our character object as an argument
  // pokeCard.addEventListener("click", showCharacter)

  const pokeImg = document.createElement("img");
  pokeImg.src = character.img;
  pokeImg.alt = `picture of ${character.name}`;

  const pokeName = document.createElement("h3");
  pokeName.classList.add("poke-name");
  pokeName.innerText = character.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.classList.add("poke-likes");
  pokeLikes.innerText = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.classList.add("likes-num");
  likesNum.textContent = character.likes;

  const likeBtn = document.createElement("button");
  likeBtn.className = "like-btn";
  likeBtn.textContent = "♥";

  likeBtn.addEventListener("click", addLikes);

  function addLikes() {
    character.likes += 1;
    likesNum.textContent = character.likes;
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    pokeCard.remove();
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBtn, deleteBtn);
  pokeContainer.append(pokeCard);

  // returning our pokeCard so we can use the return value of the render function in our pokeCard div event listener
  return pokeCard;
}

const pokeContainer = document.querySelector("#poke-container");

async function getPokemon() {
  return fetch('http://localhost:3000/characters')
    .then(response => response.json());
}

function showCharacter(character) {
  console.log(character);
  pokeContainer.innerHTML = "";
  renderPokemon(character);
}
