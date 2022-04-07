// GLOBAL VARS
const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.getElementById("poke-form");
const pokeFormContainer = document.getElementById("poke-form-container");

// EVENT LISTENER
pokeForm.addEventListener("submit", addPoke);


// create poke function will not work with our API -- yet. But it still works with our static pokemonDB.
function addPoke(e) {
  e.preventDefault();
  const name = document.getElementById("name-input").value;
  const img = document.getElementById("img-input").value;

  const newPoke = {
    id: pokemonDB.length + 1, // temporary solution using static array db.json
    name: name,
    img: img,
    likes: 0,
  };

  renderPokemon(newPoke)
  // add new character object to pokemonDB array. Note: this will not persist on page refresh.
  pokemonDB.push(newPoke)
  pokeForm.reset()
  alert("nice job! your new poke is added to page")
}


//  SHOW PAGE - 1 POKE
function showCharacter(character) {
  fetch(`http://localhost:3000/characters/${character.id}`)
  .then(resp => resp.json())
  .then(returnedChar => {
    const newPokeCard = renderPokemon(returnedChar)
    newPokeCard.id = 'poke-show-card'
    // newPokeCard.dataset.id = returnedChar.id
    loadComments(newPokeCard, returnedChar)
    pokeContainer.replaceChildren(newPokeCard)
    pokeFormContainer.replaceChildren(commentsForm())
  })
  } 
// reminder: when we invoke our commentsForm method as our argument above, we are passing the RETURN VALUE of the function to our replaceChildren method. The return value is the comments form

// CREATE COMMENT FORM FOR SHOW PAGE
function commentsForm() {
  const form = document.createElement("form");
  form.id = "comment-form";

  // attach an event listener to the #comment-form here

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
  const newComment = document.createElement("li")
  newComment.textContent = comment.content
  ul.append(newComment)
  return newComment
}

// LOAD COMMENTS AND RENDER THEM ON POKE SHOW PAGE

  
// INITIALIZE
// re-written to catch any errors
function getPokemon(){
  fetch('http://localhost:3000/characters')
  .then(resp => {
    // debugger
    if(resp.ok){
      return resp.json()
    } else {
      // if there is an error, we create a new Error and pass it to .catch()
      throw new Error("yikes there was an error: ", resp.status, resp.statusText)
    }
  })
  .then(returnedArr => returnedArr.forEach(pokeObject => renderPokemon(pokeObject)))
  .catch(function(err){
    console.log(err)
  })
}

// INVOKE INITIALIZE
getPokemon()


function renderPokemon(character) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${character.id}`;
  pokeCard.className = "poke-card";

  pokeCard.addEventListener("click", () => showCharacter(character))

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

  function addLikes(e) {
    e.stopPropagation()
    character.likes += 1; 
    likesNum.textContent = character.likes;
  }

  
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    pokeCard.remove()
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBtn, deleteBtn);
  pokeContainer.append(pokeCard);

  // returning our pokeCard so we can use the return value of the render function in our pokeCard div event listener
  return pokeCard
}
