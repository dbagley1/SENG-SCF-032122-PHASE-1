### Fetch - POST/PATCH/DELETE

Agenda:<br>
9:00-10:00am - Continue with fetch POST => refactor addPoke() and submitComment()<br>
10:00-10:10am - BREAK <br>
10:10-11:10am - PATCH and DELETE <br>
11:10-11:20am - BREAK <br>
11:20-12:00pm - Add one more feature and time for questions! <br>

12:00-1:00pm - LUNCH

1:00-2:00pm - Clean Up Project via 09-pokemon-cleanup<br>
2:00-2:10pm - BREAK <br>
2:10-3:10pm - tbd <br>
3:10-3:20pm - BREAK <br>
3:20-4:00pm - tbd <br>

***

### Objectives

- Make POST requests
- Discuss optimistic vs pessimistic rendering
- Continue with PATCH and DELETE for full fetch CRUD!
- Render new data to the DOM

### Using JSON Server

- You should have already installed JSON Server by running the following command in the terminal: `npm install -g json-server`
- To start the JSON server, run `json-server --w db.json --r routes.json` while in the directory that contains the `db.json` file i.e. `SCF-SENG.../09-js-fetch-patch-delete`
- For this project, we will start with the following endpoint: `http://localhost:3000/characters`

### QUICK warm up exercise

- Locate the `form` variable that is inside of `commentsForm()`, attach an event listener with the accurate event type, and `console.log()` some message to ensure the event listener was attached correctly.

***

### Today's Deliverables

1. Submit a POST request with a new pokemon character and append to the DOM

2. Complete the POST request with a new comment and render to the DOM

3. Make a PATCH request after the like button has been clicked to update the number of likes of the character.

4. Make a DELETE request after the delete button on a character card is clicked.

***

### Resources

- [Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

- [HTTP DOGS](https://httpstatusdogs.com/) and [HTTP CATS](https://http.cat/)

- [Postman](https://www.postman.com/)