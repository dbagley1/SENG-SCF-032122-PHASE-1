**As per [Geeks for Geeks](https://www.geeksforgeeks.org/what-is-the-difference-between-properties-and-attributes-in-html/) "The DOM is the acronym for the Document Object Model. When the browser parses your HTML code, it creates a corresponding DOM node. The HTML properties are accessed from this node object."**

## Putting it all together! We've started with some foundational concepts:

We've learned variable declarations, creating and looping/iterating over arrays and objects. Going forward we will use these skills to pull data from an API (which is our database) and set values / properties to our variables. From there we will slap things on the DOM! That's the broad overview. To break it down, we will learn how to:

Create an element (or select an element that already exists in our index.html), give that element some properties, and then we will place (or slap!) it on the DOM.

Selectors: <br>
- id - CSS selector (must be unique to index.html, no duplicates in any other HTML tags)<br>
- class - CSS selector (often used to group elements together for styling purposes)<br>
- tag name - img or h1 or ul. HTML tag name

***

To find elements on the page you can use inspector tool and hover over page or use Elements tab in Chrome dev tools. Best to avoid using index.html to target elements because our DOM will evolve past that initial rendering.

- getElementById() is for document object queries only! For instance you cannot target a div and then call this method on the div. Takes an id as an argument (written as a string). returns the first match (we should only have original ids anyway.) ex: const form = document.getElementById("poke-form")

- getElementsByClassName => returns an HTML Collection. We can use Array.from(elements) to turn into an array and use forEach on that array.

- document.querySelector() => most flexible -- returns one element, the first match. Can take class (requires .), id (requires #) or tag name as argument (all need to be written as a string). We will often use querySelector on a card or smaller element from the DOM.

- document.querySelectorAll() => returns a different type of collection. Take a look at the methods for the Prototype. You can use forEach on this. <br>
ex: const allDivs = document.querySelectorAll("div")

- .append() => this method can take multiple arguments. Can even append a string.

- .appendChild() => can take only one argument and that arg must be a node.

***
Saucy Challenge:

1. Go to amazon.com and use .getElementById() to find the div with id of "nav-xshop" and save that div to a variable. Then use that variable to change its background to green. (You can use style.background property = "green")

2. Next find the span with an class of nav-line-2 and change the innerText to "Free Stuff Here"

3. Go [here](https://en.wikipedia.org/wiki/JavaScript) use querySelectorAll to find and iterate over the NodeList and console.log all the p tags (hint: check the Prototype in the console to find the built in iterator function). You can do this in the dev tools console.



***

Answers for tonight's reviewAssignment.js:

 1. for (let i = 0; i < 10; i++) {
        console.log(i);
    }

 2. pokemon.forEach(element => console.log(element.toUpperCase()));

 3. const startsWithS = pokemon.filter((pokes) => pokes.startsWith("S"))

 3. const result = pokemon.filter(letters => letters.length <= 6)

 4. numsArr.map(element => element ** 2)

 5. const sumWithInitial = numsArr.reduce((prev, curr) => prev + curr)
