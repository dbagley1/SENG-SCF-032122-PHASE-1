## DOM Manipulation Cont. and DOM Events

Reminder that the DOM is like a tree with a collection of nodes that form a familial (parent/child/sibling relationship). (You can use these relationships to target a particular node.) Each node is an object with properties.

Our whole pokemon card render will take place inside one function. How do we iterate over each object to access the values?

pokemonDB.forEach(el => renderPokemon(el))


function renderPokemon(character) {
    // our render functionality will go in here
}

***

We have created some Pokemon cards and slapped them on the DOM. Yay! But now we have a static webpage: there are no events attached. We can click on things but nothing happens when we click. 

Dynamic webpage: interactive, we have events, we have the ability to change things that were initially rendered or add or delete elements. We call this full CRUD.

For this we have:

1) Events: some interaction with our html elements -- a few event types are: click, submit, mouseover, keydown. This event is an object.

2) Event listeners: we will attach to an element so that it triggers some response <br>
&emsp; - .addEventListener() takes in 2 arguments: 1. event type, 2. callback function (event handler) which is a response to the event.

3) Event handler: the callback function provided to the .addEventListener() method, and is responsible for doing something after the event is triggered. Remember that the event handler is a callback function: need to be written as function declaration or function reference. Do not invoke your callback functions or they will fire off before the event is triggered (i.e., on page load / before click or submit).

### work flow 

// 1. find our target (the element we are attaching an event to)
// 2. attach the event listener to the target and provide 2 things: event type, and event handler

*Note on forms: form type is always submit, even if we are clicking a button. We pass (e) as the parameter in our event handler, and start the function with with e.preventDefault() to prevent automatic page refresh on form submit. Input fields have value property that we use to capture what the user types into the field*

