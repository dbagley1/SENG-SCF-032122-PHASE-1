### Fetch - making a POST request

Agenda:<br>
6:00-7:00pm - Review our Pokemon project codebase & begin our warm up exercise in groups<br>
7:00-7:10pm - BREAK <br>
7:10-8:10pm - Continue warm up exercise as needed. Then discuss the process of making a fetch POST request <br>
8:10-8:20pm - BREAK <br>
8:20-9:00pm - Make a POST request on our Poke project! <br>

***

### Objectives

- Make POST requests with values submitted through HTML forms
- POST new objects using .fetch()
- Render new data to the DOM

### Using JSON Server

- You should have already installed JSON Server by running the following command in the terminal: `npm install -g json-server`
- To start the JSON server, run `json-server --w db.json --r routes.json` while in the directory that contains the `db.json` file i.e. `SCF-SENG.../08-js-fetch-post`
- For this project, we will start with the following endpoint: `http://localhost:3000/characters`

### Warm up exercise

1. Create a function `loadComments()`:

- Accepts two parameters, pokeCard and character

- Create a new ul element and store in the variable 'commentsList'.

- Assign the id `comment-card-${character.id}` to the commentsList.

- Create a new `h4` element and store in the variable `numComments`. The new header should return the textContent: `{2} comments:` where the number dynamically reflects how many comments each character has associated. (Stretch goal: if there is only one comment, the text content should conditionally render `{1} comment: `)

- Append the `numComments` element to `commentsList`

- Append the `commentsList` to the `pokeCard`

- Inspect the `character` parameter in the console and consider how each comment associated with the character can be passed to the `renderComment` function that has been defined. 

- Comment back in 2 lines inside of `showCharacter()` to test if comments will render to the DOM when a character card is clicked

- Finally, locate the `form` variable that is inside of `commentsForm()`, attached an event listener with the accurate event type, and `console.log()` some message to ensure the event listener was attached correctly.

***

### Tonight's Deliverable

1. Submit a POST request with a new pokemon character and append to the DOM

***
### Resources

- [Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

- [HTTP DOGS](https://httpstatusdogs.com/) and [HTTP CATS](https://http.cat/)

- [Postman](https://www.postman.com/)