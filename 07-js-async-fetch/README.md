## Async JS and Fetch

Agenda / Objectives:<br>
6:00-7:00pm - Warm up exercise & intro to how the web works<br>
7:00-7:10pm - BREAK <br>
7:10-8:10pm - Test our endpoint with Postman and use fetch to make a GET request <br>
8:10-8:20pm - BREAK <br>
8:20-9:00pm - Continuing GET requests and pokemon functionality (talk about single page applications, aka SPAs) <br>

***

### Objectives

- Define client vs server side
- Explain the request-response cycle
- Identify the importance of HTTP verbs
- Describe asynchronous functions in JavaScript
- Use fetch() to retrieve data from server

### Using JSON Server

- Install JSON Server by running the following command in the terminal: `npm install -g json-server`
- To start the JSON server, run `json-server --watch db.json --routes routes.json` while in the directory that contains the `db.json` file i.e. `SCF-SENG.../07-async-fetch`
- For this project, we will start with the following endpoint: `http://localhost:3000/characters`

### Warm up exercise

1. Attach a ‘click’ event to each individual `pokeCard` div created in `renderPokemon()`

2. Define a new function, `showCharacter()` that will accept a character object parameter

3. `showCharacter()` will be used as the event handler for the click event attached to the `pokeCard`. The pokemon object defined in `renderPokemon()` should be passed as an argument to `showCharacter()`.

4. Inside the function `showCharacter()`, log the character parameter to confirm that the object is being passed successfully through each click made on the pokeCard element.

✨ BONUS: Confirm the return value of `renderPokemon()` inside `showCharacter()` using debugger. To do so:

- Add a debugger inside the function, `showCharacter()`
- In the browser, click a pokeCard element to invoke the debugger
- Navigate to the console tab in the dev tools
- Run the following line inside the console: renderPokemon(character)

### Deliverables

#### 1. Create a function `getPokemon()`

- Fetches all pokemon via `http://localhost:3000/characters`

- Invokes renderPokemon() for each returned character

#### 2. Create a function `showCharacter()`

- Accepts 1 parameter, character

- Fetches the pokemon character data via `http://localhost:3000/characters/:id`

- Invokes renderPokemon() for the returned character

- Update the id of the card returned by renderPokemon() to 'poke-show-card'

- Replaces `pokeContainer` innerHTML with the matched character only. HINT: use `.replaceChildren()`

### Resources

- [Anatomy of a URL](https://medium.com/@joseph.pyram/9-parts-of-a-url-that-you-should-know-89fea8e11713)

- [RESTful Routes Cheatsheet](https://www.learnhowtoprogram.com/c-and-net/basic-web-applications/introduction-to-restful-routing)

- [MDN .replaceChildren()](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)

- [Event.stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

- [MDN debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)