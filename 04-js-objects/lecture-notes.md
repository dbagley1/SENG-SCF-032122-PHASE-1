# JS OBJECTS

* Remember that array methods and object methods do not generally overlap. Check the MDN docs for your particular data type if you can't get the method to run.


- object.key => requires exact key name, or...
- object["key"] => again, if using exact key name
- object["new-key"] => if key contains non-standard chars
- object[key] => if using a variable, i.e., <br>
 ```const newObj = {};```<br> ```const name = "name";``` <br> ```newObj[name] = "your name goes here"```


Assignment: define a pokemon variable and assign it to an object containing name, img, and likes keys. The value of likes should be 0 while name and img can be whatever pokemon character data you like. 'img' should be an address as a string. (Doesn't have to be a working url) . *See index.js for answer*


Q. What would happen if we set a key = to a value and then try to initialize another key using the same name?

A. Object keys must be unique. Setting an existing key to another value would overwrite the original value.

Assignment: define a function increaseValue() that should take 2 parameters: 'object' and 'key'. Increment the value returned from the 'key' by 1 so that every time the function is invoked, the number of likes will increment. *See index.js for answer*

---

- Non-Destructive Update - Create New Object:

1. Object.assign(target, existingObj, newProps) - takes three arguments. The third argument of key/value pairs should be written as an object ```{key: value, key: value}```

2. Easier and newer way: spread operator ```{ ...object }```

---

- Destructive Delete use delete keyword! ex: ```delete char.abilities```

- Non-Destructive Delete: use spread and then delete keyword
ex: ```const newChar = {...char}``` then => ```delete newChar.abilities```

Write a function charDetails() that takes a character object in as an argument and loops through the object using the for...in method to print out the values of each property *See index.js for answer*

 -- CALL TO ACTION - create a new complex object that represents you (inside this object you can use arrays, objects, strings, numbers, null, anything that makes sense for your data), and practice accessing various properties manually. Then write functions to try to access those same values.

 ---

 Answers for tonight's reviewAssignment.js:

 1. const add = (num1, num2) => num1 + num2;

 2. const sub = (num1, num2) => Math.abs(num1 - num2);

 3. const compute = (callback) => callback(3,6);

 3. (3b) compute(sub)

 4. compute(function sub(num1, num2){
        return Math.abs(num1 - num2);
    })

5. setInterval(function(){console.log("Hi")}, 3000)

NOTE: To clear this setInterval grab the number id as returned in the console and pass it as an argument into clearInterval(id)