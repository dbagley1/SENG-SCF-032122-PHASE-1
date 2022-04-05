const pokeForm = document.getElementById("poke-form");

pokeForm.addEventListener("submit", addPoke);


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

  renderPokemon(newPoke)
  // add new character object to pokemonDB. Note: this will not persist on page refresh.
  pokemonDB.push(newPoke)
  pokeForm.reset()
  alert("nice job! your new poke is added to page")
}

const pokeContainer = document.querySelector("#poke-container");


pokemonDB.forEach((obj) => renderPokemon(obj));

function renderPokemon(character) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${character.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = character.img;
  pokeImg.alt = `picture of ${character.name}`;

  const pokeName = document.createElement("h3");
  pokeName.innerText = character.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.innerText = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "likes-num";
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

  deleteBtn.addEventListener("click", () => pokeCard.remove());

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBtn, deleteBtn);
  pokeContainer.append(pokeCard);

}
