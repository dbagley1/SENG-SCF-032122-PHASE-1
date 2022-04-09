// GLOBAL VARS
const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.getElementById("poke-form");
const pokeFormContainer = document.getElementById("poke-form-container");
const commentsContainer = document.getElementById("comments-list");

// EVENT LISTENER
pokeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameInput = e.target.children['name-input'].value;
  addPoke(nameInput);
});


// create poke function will not work with our API -- yet. But it still works with our static pokemonDB.
function addPoke(name) {
  const newPoke = {
    name: name,
    likes: 0,
  };

  renderPokemon([newPoke]);

  // add new character object to pokemonDB array. Note: this will not persist on page refresh.
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

//  SHOW PAGE - 1 POKE
function showCharacter(character) {
  hideAllPokemon();

  fetch(`http://localhost:3000/characters/${character.id}`)
    .then(resp => resp.json())
    .then(returnedChar => {
      const newPokeCard = renderPokemon([returnedChar]);
      newPokeCard.id = 'poke-show-card';
      // newPokeCard.dataset.id = returnedChar.id
      loadComments(newPokeCard, returnedChar);
      pokeContainer.appendChild(newPokeCard);
    });
  pokeFormContainer.replaceChildren(commentsForm());
}

// TODO: add comments to show page ✏
function loadComments(pokeCard, character) {
  const commentsList = document.createElement("ul");
  commentsList.id = `comment-card-${character.id}`;

  const numComments = document.createElement("h4");
  commentsList.append(numComments);
  pokeCard.append(commentsList);

  const comments = character.comments;
  numComments.textContent = comments.length;
  numComments.textContent += comments.length === 1 ? " comment" : " comments";

  comments.forEach(comment => renderComment(commentsList, comment));
}

// TODO: Finish function to submit comments
function addComment(e) {
  console.log(e);
  const inputText = e.target.children['comment-input'].value;
  const newComment = {
    content: inputText,
    id: comments.length + 1,
    characterId: e.target.dataset.id || undefined,
  };
  comments.push(newComment);
  const commentsList = document.getElementById(`comment-card-${returnedChar.id}`);
}
/**
 * ? Darrian created this function instead of replacing the content of the pokeContainer
 * */
function hideAllPokemon() {
  const allPokemon = document.querySelectorAll(".poke-card");
  allPokemon.forEach(poke => poke.setAttribute("hidden", true));
}

// reminder: when we invoke our commentsForm method as our argument above, we are passing the RETURN VALUE of the function to our replaceChildren method. The return value is the comments form

// CREATE COMMENT FORM FOR SHOW PAGE
function commentsForm(character) {
  const form = document.createElement("form");
  form.id = "comment-form";
  if (character) {
    form.dataset.id = character.id;
  }

  // attach an event listener to the #comment-form here
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const textInput = e.target.children['comment-input'].value;
    e.target.children['comment-input'].value = "";
    addComment(textInput, character.id);
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
// get all pokemon from database
function getAllPokemon() {
  return fetch("http://localhost:3000/characters")
    .then(resp => resp.json());
}
// render all pokemon
function renderAllPokemon() {
  getAllPokemon().then(pokemonArray => {
    renderPokemon(pokemonArray);
  });
}

// INVOKE INITIALIZE
renderAllPokemon(getAllPokemon());


function renderPokemon(characterArray) {
  characterArray.forEach(character => {
    const pokeCard = document.createElement("div");
    pokeCard.id = `poke-${character.id}`;
    pokeCard.className = "poke-card";

    pokeCard.addEventListener("click", () => showCharacter(character));

    if (character.img) {
      const pokeImg = document.createElement("img");
      pokeImg.src = character.img;
      pokeImg.alt = `picture of ${character.name}`;
      pokeCard.append(pokeImg);
    }

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

    function addLikes(e) {
      e.stopPropagation();
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

    pokeCard.append(pokeName, pokeLikes, likesNum, likeBtn, deleteBtn);
    pokeContainer.append(pokeCard);

    // returning our pokeCard so we can use the return value of the render function in our pokeCard div event listener
    return pokeCard;
  });
}
