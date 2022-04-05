const arr = [1, 2, 3, 4]; // .map will work for this because it is an array method

const me = { name: "Shelby", job: "teacher", faveFood: "tofu" };
// .map will not work on an object. We have for...in to loop over objects.

me["updated_name"] = "Michelle"; // if using non-standard characters, we need to stringify the key (this applies to snake case as well as any other form of non-standard chars)

// console.log(me)

const pokemon = {
  name: "pikachu",
  age: 7,
  likes: 0,
  abilities: "static"
};

// console.log(pokemon);

// pokemon["name"] = "other name"; // even stringified, this key overwrites the previous name property.

// console.log(pokemon);

function increaseValue(obj, key) {
  return (obj[key] += 1); // or return ++obj[key]
  // vs    return obj[key]++ the value does increment here, however the function returns before the value increments, so the return value of this object is not strictly accurate.
}

increaseValue(pokemon, "likes");
increaseValue(pokemon, "likes");
increaseValue(pokemon, "likes");

// console.log(pokemon)

// non-destructive delete using Object.assign() -> reminder: third argument needs to be an object.
// we then delete key, this protects original data in pokemon obj from being mutated
const newChar = Object.assign({}, pokemon, {
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon-form/1/",
});

delete newChar.abilities
// console.log("newChar: ", newChar, "poke: ", pokemon);

const newPoke = { ...pokemon }; // non-destructive spread, then we delete key to protect original data in pokemon from being mutated.
// if we had called delete keyword on our original pokemon object, this would be destructive.

delete newPoke.abilities;
// console.log(newPoke)

//for...in loop to loop over our pokemon object. key is our variable that points to key. pokemon[key] points to the value
for(const key in pokemon) {
  console.log(`${key}: ${pokemon[key]}`)
}

const pikachu = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
  abilities: [
    {
      name: "static",
    },
    {
      name: "lightning-rod",
    },
  ],
};

function printAbilities(obj) {
  // we want to return a string
  let arr = []
  debugger
  obj.abilities.forEach(ability => {
    debugger
    arr.push(ability.name)
  })
  return `Abilities: ${arr.join(", ")}`
}

// console.log(printAbilities(pikachu));

// example of my object. Now create yours, make it complex!
const shelby = {
  name: "Shelby",
  address: {
    street: {
      direction: "one-way",
      name: "474 48th"
    },
    city: "LIC",
    state: "NY",
  },
  age: null,
  hobbies: ["cooking", "hiking", "tiger rose"],
  pets: [
    {
        name: "Tiger Rose",
        age: 4,
        faveFood: "fish",
      },
      {
        name: "tbd",
        age: 0,
        faveFood: "tbd"
      }
  ],
};












