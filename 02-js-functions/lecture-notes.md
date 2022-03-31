# Functions!!!

What are functions and why do we use them?? 
- a block of code made to do a specific task
- Good to make a function generic so it can be reused and we can keep our code DRY - Don't Repeat Yourself
- functional programming for readability and reduced repetition
- we often use the value of a function for another task (see ```let me = prompt()``` on index.js, line 12)

---

## The anatomy of a function:

Declaring a function:
1. We start with the ```function``` keyword (JS recognizes this word)
2. Followed by the name of the function (this is called the identifier.)
3. Then open and close parenthesis```()```. We may or may not pass a parameter (variable) inside these parenthesis
4. Then a code block ```{}```


Invoking/calling a function: <br>
sayHi(name) => ```name``` is an argument, this is the value of the variable that was declared by our ```(parameter)```

- About parameters: The name should be relatively generic. This is our variable.
- About arguments: We can pass any data type as an argument. (If we pass a variable it should be declared first!) 

- We can pass more than one parameter with corresponding argument, or pass no parameter/argument

```return``` keyword in a function tells JavaScript that the following code is the *return value* of the function. If there is no return keyword (when we're declaring using the standard ```function``` keyword), JavaScript does not assign a value. Therefore the return value of that function is undefined. (This can be fine if we do not intend to provide a return value to that function.)


arrow function => ES6 syntax for writing functions ex: <br> ```const addNum = (num1, num2) => num1 + num2```<br>
- with arrow functions, if the function is written on one line we remove the {} and the *return* is implicit

---

## Functions as First Class Citizens

1. (Anonymous) function can be assigned as the value to a variable (function expression) => ex: <br> ```const addNum = function(num1, num2){return num1 + num2}```

2. Function can be passed as an argument (callback function) => ex: <br> ```const passingFunc = () => console.log("imma callback function")``` <br> ```const genericFunc = (callback) => callback()``` ```genericFunc(passingFunc)```

Important note: whenever we pass a cb function as our argument, DO NOT INVOKE THE FUNCTION. Just reference it (without the ```()```). Function will be invoked inside the body of the function declaration.

3. function that takes a (callback) function as an argument, or it can return a function (HOF) => ex: <br> ```function addNums(){return 2 + 2}```<br>```const HOF = () => addNums() * 2``` <br> or => ```setTimeout(() => console.log("...i'm waiting"), 3000)```





