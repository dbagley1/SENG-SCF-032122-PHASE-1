/*FYI regarding defer tag and waiting for index.html page load.... you might come across this event listener sometimes instead of defer tag in your index.html. Serves same purpose but doesn't look as clean...
 */
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     // all JS (or all JS that refers to elements in the index.html) would go in here.
//     const container = document.querySelector(".lecture-container")
//     console.log(container)
// });

// removing elements to start Pokemon proj!
document.getElementById("welcome").remove();

const lecContainer = document.querySelector(".lecture-container");
lecContainer.remove();

// adding Pokemon image into header
const header = document.querySelector("#header");
header.innerHTML = `<img
id="header-img"
src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"
/>`;


// target form to add event listener
const pokeForm = document.getElementById("poke-form");

pokeForm.addEventListener("submit", addPoke);


function addPoke(e) {
  // stop the refresh that happens when a form submits
  e.preventDefault();

  // .value property provides us with what the user typed into input fields
  const name = document.getElementById("name-input").value;
  const img = document.getElementById("img-input").value;

  // create a new character object. When we have an API the id will be handled for us. In the meantime we add id manually.
  const newPoke = {
    id: pokemonDB.length + 1,
    name: name,
    img: img,
    likes: 0,
  };

  // pass new object to render function
  renderPokemon(newPoke)
  // add object to pokemonDB. Note: this will not persist on page refresh.
  pokemonDB.push(newPoke)
  // clear form for improved user experience
  pokeForm.reset()
}

const pokeContainer = document.querySelector("#poke-container");

// example of mouseover event listener. If you invoke the alert() instead of wrapping it in arrow function, what happens?

// pokeContainer.addEventListener('mouseover', alert('event fired!')) // vs
// pokeContainer.addEventListener('mouseover', () => alert('event fired!'))

// iterate over our pokemonDB and invoke renderPokemon one time for each object in the array. pokemonDB is a global variable located in our db.js
pokemonDB.forEach((obj) => renderPokemon(obj));

// it is recommended to pseudo code inside our function as we go. We can copy/paste deliverables to concentrate on only one chunk/task at a time
function renderPokemon(character) {
  // create a card div (pokeCard), add id and class and append to parent div (pokeContainer)
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${character.id}`;
  pokeCard.className = "poke-card";
  // create an img tag with appropriate src and alt attributes and
  const pokeImg = document.createElement("img");
  pokeImg.src = character.img;
  pokeImg.alt = `picture of ${character.name}`;

  // c) create an h3 element with text content character.name.
  const pokeName = document.createElement("h3");
  pokeName.innerText = character.name;

  // Create an "h3" element for each Pokemon and store the element in a variable 'pokeLikes'. Use textContent() to fill in the heading with the text "Likes: "
  const pokeLikes = document.createElement("h3");
  pokeLikes.innerText = "Likes: ";

  // Create an "h5" element for each Pokemon and store the element in a variable 'likesNum'.Assign likesNum a className of "likes-num" Use .textContent to fill in the heading with the Pokemon character's number of likes
  const likesNum = document.createElement("h5");
  likesNum.className = "likes-num";
  likesNum.textContent = character.likes;

  // Create a "button" element for each Pokemon and store the element in a variable (likeBtn)
  // Assign likeBtn a className of "like-btn"
  // Use .textContent to fill in the button with: "♥"

  const likeBtn = document.createElement("button");
  likeBtn.className = "like-btn";
  likeBtn.textContent = "♥";

  // easiest/cleanest way to add event listener is inside our render. this way we have all variables and the character object available to us
  likeBtn.addEventListener("click", addLikes);

  function addLikes() {
    //increase likes in the object
    character.likes += 1; // or ++character.likes
    // increase likesNum on the page
    likesNum.textContent = character.likes;
  }

  // Create a "button" element for each Pokemon and stores the element in a variable (deleteBtn)
  // Assign deleteBtn a className of "delete-btn"
  // Use .textContent to fill in the button with a label, "Delete"

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  // we have access to pokeCard from inside this function
  deleteBtn.addEventListener("click", () => pokeCard.remove());

  // Append all variables to "pokeCard"
  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBtn, deleteBtn);
  pokeContainer.append(pokeCard);
}
