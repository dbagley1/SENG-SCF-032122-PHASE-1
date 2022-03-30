// this is where you can take notes without risking merge conflicts when you pull down new code from Github (the remote is called origin => i.e., where your online repo for this directory is located)

// also feel free to use this as a sandbox!

// Running the file ```node notes.js``` (without the backticks) will allow you to explore/play around with code. Make sure you have cd'ed into the inner folder before you do this.

console.log("hi there!!");

console.log('This is definitely working now!');

function sayHi(name = "YourName") {
    // console.log("I'm inside the sayHi function!");
    return name + "Help! I'm trapped inside the sayHi function!";
}

const iNeedAHero = sayHi("Batman");
console.log(sayHi());

// create a function faveAnimal that takes in an animal parameter and returns "this is the best animal: " plus the animal

function faveThing(category = "animal", thing = "dog") {
    return "This is the best " + category + ": " + thing;
}
console.log(faveThing("brand", "apple"));
console.log(faveThing("hero", "batman"));
