const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.getElementById("poke-form");
const pokeFormContainer = document.getElementById("poke-form-container");
const BASE_URL = "http://localhost:3000";


const standardError = (resp) => {
  return `yikes there was an error: ${resp.status} - ${resp.statusText}. Please try again.`
}

/* NOTE: we can (and we should) use try/catch blocks with async functions but we cannot use them with standard fetch i.e., using .thens 
ALSO if we have a try block, we must also use a catch block
*/
const getPokemon = async () => {
  try {
    const resp = await fetch(`${BASE_URL}/characters`);
    if (resp.ok) {
      const returnedArr = await resp.json();
      returnedArr.forEach((pokeObject) => renderPokemon(pokeObject));
    } else {
      throw new Error(
        standardError(resp)
      );
    }
  } catch (err) {
    alert(err);
  }
};

const addPoke = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name-input").value;
  const img = document.getElementById("img-input").value;

  const newPoke = {
    name,
    img,
    likes: 0,
  };

  // const newPoke = {
  //   name: name,
  //   img: img,
  //   likes: 0,
  // };

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newPoke),
  };

  try {
    const response = await fetch(`${BASE_URL}/characters`, config);
    if (response.ok) {
      const newPokeObj = await response.json();
      renderPokemon(newPokeObj);
      alert("nice job! your new poke is added to page");
      pokeForm.reset();
    } else {
      throw new Error(
        standardError(response)
      );
    }
  } catch (err) {
    alert(err);
  }
  // // async await without try catch block - no error handling at all booooo
  // // reminder that we cannot mix and match async await with thens inside of a function
  // const response = await fetch(`${BASE_URL}/characters`, config)
  // const newPokeObj = await response.json()
  // renderPokemon(newPokeObj)
};

const init = () => {
  pokeForm.addEventListener("submit", addPoke);
  getPokemon();
};

init();

// NOTE: kudos to Darrian with 2 r's for the great idea!
const createHtmlElement = (tagName, attributes) => {
 const newEl = document.createElement(tagName)
 for(key in attributes) {
   // remember that we use bracket notation because key is a variable!
   newEl[key] = attributes[key]
 }
 return newEl
}

//  SHOW PAGE - 1 POKE - without error handling boooo
const showCharacter = async (character) => {
  const resetBtn = createHtmlElement("button", {className: "reset", textContent: "GO HOME"})
  resetBtn.addEventListener("click", () => location.reload());

  const resp = await fetch(`${BASE_URL}/characters/${character.id}`);
  if (resp.ok) {
    const returnedCharObj = await resp.json();
    const newPokeCard = renderPokemon(returnedCharObj);
    newPokeCard.id = "poke-show-card";
    newPokeCard.dataset.id = returnedCharObj.id;
    // newPokeCard.dataset.ability = "toxicwhip" // another example of using dataset
    loadComments(newPokeCard, returnedCharObj);
    pokeContainer.replaceChildren(newPokeCard);
    pokeFormContainer.replaceChildren(commentsForm(), resetBtn);
  }
};
// reminder: when we invoke our commentsForm method as our argument in replaceChildren above, we are passing the RETURN VALUE of the function. The return value is the comments form.

function commentsForm() {
  const form = document.createElement("form");
  form.id = "comment-form";

  form.addEventListener("submit", (e) => {
    submitComment(e);
    form.reset();
  });

  const commentInput = createHtmlElement("input", {type: "text", id: "comment-input"})
  const label = createHtmlElement("label", {className: "form-label", textContent: "Give this Poke some 💙 ...  "})
  const submit = createHtmlElement("input", {type: "submit", id: "submit"})
  
  form.append(label, commentInput, submit);
  return form;
}

function submitComment(e) {
  e.preventDefault();

  const commentsList = document.querySelector("ul");
  const content = document.querySelector("#comment-input").value;
  const character = document.getElementById("poke-show-card");
  const characterId = parseInt(character.dataset.id);

  // or chain the methods for a one-liner. We don't use the character so we don't need the variable.
  // const characterId = parseInt(document.getElementById('poke-show-card').dataset.id)

  const newComment = {
    content: content,
    characterId: characterId,
  };
  // from here we will POST and then we have a renderComment function (keeping .thens for your review. feel free to refactor if desired. don't forget to add async to function!)
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newComment),
  }

  fetch(`${BASE_URL}/comments`, configObj)
    .then((response) => response.json())
    .then((commentObj) => renderComment(commentsList, commentObj));

  //optimistic rendering
  // renderComment(commentsList, commentObj)
}

function renderComment(ul, comment) {
  const newComment = document.createElement("li");
  newComment.textContent = comment.content;
  ul.append(newComment);
  return newComment;
}

function loadComments(pokeCard, character) {
  const commentsDiv = document.createElement("div");
  commentsDiv.id = `comment-card-${character.id}`;

  const commentsList = document.createElement("ul");
  const numComments = document.createElement("h4");

  numComments.textContent = `${character.comments.length} ${
    character.comments.length > 1 ? "comments" : "comment"
  } : `;

  // numComments.textContent = character.comments.length + (character.comments.length === 1 ? ' comment:': ' comments:' )

  commentsDiv.append(numComments, commentsList);
  pokeCard.append(commentsDiv);

  character.comments.forEach((comment) => renderComment(commentsList, comment));
}

const handleLike = async (e, character, likesNum) => {
  e.stopPropagation();

  const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ likes: ++character.likes }),
  };

  const resp = await fetch(`${BASE_URL}/characters/${character.id}`, configObj);
  if (resp.ok) {
    const updatedChar = await resp.json();
    // pessimistic rendering
    likesNum.textContent = updatedChar.likes;
  } else {
    console.log(
      standardError(resp)
    );
  }
};

const handleDelete = async (e, character, card) => {
  e.stopPropagation();

  const resp = await fetch(`${BASE_URL}/characters/${character.id}`, {
    method: "DELETE",
  });

  //pessimistic rendering with ternary!
  resp.ok ? card.remove() : console.log(standardError(resp));
  
  //optimistic rendering
  // pokeCard.remove();

  // if we delete a card on it's show page we reload the page and "return home"
  pokeContainer.innerHTML === "" ? location.reload() : null;
};

const renderPokemon = (character) => {
  const pokeCard = createHtmlElement("div", {id: `poke-${character.id}`, className: "poke-card"});
  pokeCard.addEventListener("click", () => showCharacter(character));

  const pokeImg = createHtmlElement("img", {src: character.img, alt: `picture of ${character.name}`})
  const pokeName = createHtmlElement("h3", {innerText: character.name})
  const pokeLikes = createHtmlElement("h3", {innerText: "Likes: "})
  const likesNum = createHtmlElement("h5", {className: "likes-num", textContent: character.likes})

  const likeBtn = createHtmlElement("button", {className: "like-btn", textContent: "♥"})
  likeBtn.addEventListener("click", (e) => handleLike(e, character, likesNum));
  
  const deleteBtn = createHtmlElement("button", {className: "delete-btn", textContent: "Delete"})
  deleteBtn.addEventListener("click", (e) =>
    handleDelete(e, character, pokeCard)
  );

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBtn, deleteBtn);
  pokeContainer.append(pokeCard);

  return pokeCard;
};
