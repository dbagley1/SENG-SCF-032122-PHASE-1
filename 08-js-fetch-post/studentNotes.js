const pokemonDB = new PokemonDB();
pokemonDB.getAllPokemon().then(pokemonArray => {
  console.log("Get All Pokemon:", pokemonArray);
  renderPokemon(pokemonArray);
})
  .catch(err => console.log(err));

// GLOBAL VARS
const commentsContainer = document.querySelector("#comments-list");
const pokeContainer = document.querySelector("#poke-container");


// INIT FORM
const pokeForm = document.createElement('form');
pokeForm.setAttribute('id', '#poke-form');
const pokeFormContainer = document.querySelector('#poke-form-container');
pokeFormContainer.appendChild(pokeForm);

// FORM EVENT LISTENER
pokeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameInput = e.target.children['name-input'].value;
  addPoke(nameInput);
});


// INVOKE INITIALIZE
fetchAllPokemon().then(arr => renderAllPokemon(arr));

// create poke function will not work with our API -- yet. But it still works with our static pokemonDB.
function addPoke(name) {
  const newPoke = {
    name: name,
    likes: 0,
  };

  renderPokemon([newPoke]);

  // add new pokemon object to pokemonDB array. Note: this will not persist on page refresh.
  pokemonDB.push(newPoke);

  // clear the form
  // pokeForm.reset();

  addPokemonToDatabase(newPoke);
  displayPokeMessage("nice job! your new poke is added to page");

  console.log(newPoke);
  // return false;
}

function displayPokeMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.id = "message";
  pokeContainer.prepend(messageDiv);
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// TODO: add a new poke to the database
function addPokemonToDatabase(poke) {
  fetch('http://localhost:3000/characters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(poke),
  })
    .then(res => res.json())
    .then(result => {
      console.log(result);
    });
}

// SHOW PAGE - 1 POKE
function pokemonShowPage(pokemon) {
  hideAllPokemon();
  getPokemonById(pokemon.id).then(returnedPokemon => {
    renderPokemon([returnedPokemon]);
    // pokeCardEl.append(commentsForm(returnedPokemon));
    // pokeCardEl.append(renderComments(returnedPokemon));
  });



  // pokeFormContainer.replaceChildren(commentsForm(pokemon.id));
}

// TODO: add comments to show page ✏
function loadComments(pokeCardEl, pokemon) {
  const commentsList = document.createElement("ul");
  commentsList.id = `comment-list-${pokemon.id}`;

  const numComments = document.createElement("h4");
  commentsList.append(numComments);
  pokeCardEl.append(commentsList);

  const comments = pokemon.comments;
  numComments.textContent = comments.length;
  numComments.textContent += comments.length === 1 ? " comment" : " comments";

  comments.forEach(comment => renderComment(commentsList, comment));
}


// TODO: Finish function to submit comments
function submitComment(commentText, id) {
  const newComment = {
    content: commentText,
    characterId: id,
  };
  addCommentToDatabase(newComment);
  renderComment(commentsContainer, newComment);
}


/**
 * ? Darrian created this function instead of replacing the content of the pokeContainer
 * */
// Hide all pokemon for show page
function hideAllPokemon() {
  const pokeCardEls = document.querySelectorAll(".poke-card");
  pokeCardEls.forEach(pokeCardEl => pokeCardEl.classList.add("hide-card"));
}
// Show all pokemon
function showAllPokemon() {
  const pokeCardEls = document.querySelectorAll(".poke-card");
  pokeCardEls.forEach(pokeCardEl => pokeCardEl.classList.remove("hide-card"));
}

// reminder: when we invoke our commentsForm method as our argument above, we are passing the RETURN VALUE of the function to our replaceChildren method. The return value is the comments form

// CREATE COMMENT FORM FOR SHOW PAGE
function commentsForm(pokemon) {
  const form = document.createElement("form");
  form.id = "comment-form";
  form.dataset.id = pokemon.id;

  // attach an event listener to the #comment-form here
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const textInput = e.target.children['comment-input'].value;
    e.target.children['comment-input'].value = "";
    addComment(textInput, pokemon.id);
  });

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.id = "comment-input";

  const label = document.createElement("label");
  label.className = "form-label";
  label.textContent = "Give this Poke some 💙 ...  ";

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "submit";

  form.append(label, commentInput, submit);

  return form;
}

// rendering one comment ("li") and append
function renderComment(ul, comment) {
  const newComment = document.createElement("li");
  newComment.textContent = comment.content;
  ul.append(newComment);
  return newComment;
}

// LOAD COMMENTS AND RENDER THEM ON POKE SHOW PAGE


// INITIALIZE
// get pokemon from database by id
function getPokemonById(id) {
  return fetch(`http://localhost:3000/characters/${id}`)
    .then(resp => resp.json())
    .then(pokemon => {
      return pokemon;
    });
}

// get all pokemon from database
function fetchAllPokemon() {
  return fetch("http://localhost:3000/characters")
    .then(resp => resp.json());
}

function removeCard(id) {
  const cards = document.querySelectorAll(`.poke-id-${id}`);
  cards.forEach(card => card.remove());
}

// render all pokemon
function renderAllPokemon() {
  fetchAllPokemon().then(pokemonArray => {
    console.log(pokemonArray);
    pokeContainer.append(...renderPokemon(pokemonArray));
  });
}

// render one pokemon
function renderPokemon(pokemonArray) {
  pokeCardEls = pokemonArray.map(pokemon => createPokeCardEl(pokemon));
  console.log(pokeCardEls);
  return pokeCardEls;
}

function createPokeCardEl(pokemon) {
  const pokeId = pokemon.id;
  const pokeImg = pokemon.img;
  const pokeName = pokemon.name;

  const pokeCardEl = document.createElement("div");
  pokeCardEl.classList.add(`poke-id-${pokeId}`);
  pokeCardEl.classList.add("poke-card");

  pokeCardEl.addEventListener("click", () => {
    pokemonShowPage(pokemon);
  });

  if (pokeImg) {
    const pokeImgEl = document.createElement("img");
    pokeImgEl.src = pokeImg;
    pokeImgEl.alt = `picture of ${pokeName}`;
    pokeCardEl.appendChild(pokeImgEl);
  }

  const pokeNameEl = document.createElement("h3");
  pokeName.innerText = pokeName;
  pokeCardEl.appendChild(pokeNameEl);

  const deleteBtnEl = createDeleteBtn(pokemon, pokeId);
  pokeCardEl.appendChild(deleteBtnEl);

  const likeBtnEl = createLikeBtn(pokemon, pokeId);
  pokeCardEl.appendChild(likeBtnEl);

  // ! No longer appends, append upon return!
  // pokeContainer.append(pokeCardEl);

  // returning our pokeCardEl so we can use the return value of the render function in our pokeCardEl div event listener

  return pokeCardEl;
}

function createDeleteBtn(pokemon, pokeId) {

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    remove(pokeId);
  });

  return deleteBtn;
}

function createLikeBtn(pokemon, pokeId) {
  let likeCount = pokemon.likes;

  const pokeLikes = document.createElement("h3");
  pokeLikes.innerText = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "likes-num";
  likesNum.textContent = likeCount;

  const likeBtn = document.createElement("button");
  likeBtn.className = "like-btn";
  likeBtn.textContent = "♥";

  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    likeCount++;
    pokemonDB.updatePokemon(pokeId, { "likes": likeCount });
    likesNum.innerText = likeCount;
  });

  const likesContainer = document.createElement("div");
  likesContainer.classList.add("likes-container");
  likesContainer.append(pokeLikes, likesNum, likeBtn);

  return likesContainer;
}
