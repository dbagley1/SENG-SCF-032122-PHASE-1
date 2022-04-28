//an example of how our runtime might grow as our input increases. the greater our number n, the more loops or operations our function would be required to do to complete.

function log(n) {
  let faveNum = 0 // this is "better" in terms of space complexity, it is O(1), Constant Space. we are only initializing a variable and setting aside memory space one time (and reassigning its value with each loop)
  for (let i = 0; i < n; i++) {
    faveNum = i 
    // let faveNum = i // this would be O(n) space complexity because we are initializing and setting aside memory space once for every time we loop.
    console.log(faveNum);
  }
}


// ------------------------------------- //

// Constant Time Complexity: Big O(1)
function doMath(n) {
  console.log("ops"); // this console.log will only run one time, regardless of how large our input is
  return 1 + n * 10 / 2;
}

// doMath(10) // 1
// doMath(300000) // 1



// what do we think is the Big O of the following?
function getVal(obj, key) {
  return obj[key];
}

const poke = {
  name: "bulbusaur",
  cuteness: 50,
  skills: [
    "so many skills",
    "I mean lots of skills",
    "these skills could go on and on",
  ],
  likes: 100,
};
// getVal(poke, "likes") // 1

// ------------------------------------- //

// Logarithmic Time Complexity: Big O(log n)
// NOTE: log is the opposite of an exponent. For our purposes we can consider this a fraction of N.

// algorithm: is item in the array? if so, return the index of item. otherwise return null
const binarySearch = (arr, item) => {
  let start = 0;
  // set end to the index of the last element in the array
  let end = arr.length - 1;
  console.log("start idx", start, "end idx", end);
  while (start <= end) {
    console.log("---------------");
    console.log("full arr: ", arr, "item: ", item);
    console.log("where we are looking: ", arr.slice(start, end+1), "item: ", item);

    // finding the midpoint of the array
    const middle = Math.floor((start + end) / 2);
    
    console.log("middle idx", middle);

    console.log("compare middle element to item");
    console.log("middle element", arr[middle], "item", item);
    // if the element in the middle matches the
    // item we are searching for, return and exit
    if (arr[middle] === item) {
      return middle;
    }

    // if the element in the middle is greater than the item
    // look to the left of the data set
    if (arr[middle] > item) {
      
      end = middle - 1;
      console.log("start", start, "new end idx", end);
      // else look to the right of the data set
    } else {
      start = middle + 1;
      console.log("new start idx", start, "end", end);
    }
  }

  return null; //if not found
};

// binarySearch([1, 2, 3, 4, 5], 10); // null
// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7); // 6


// ------------------------------------- //

// Linear Time Complexity: Big O(N)

// we talk about Big O in terms of worst case scenario: if the element we are looking for is at the very end of our data structure. if our algorithm required us to iterate through every element of our array, this would be O(N) time complexity
const arr = [1,2,4,6,7,9,100,1000]



// possible challenge in coding interview to see if you know how to write Math.max without using the built in method.
function findMaxEl(arr) {
  let result = -Infinity
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > result) {
      console.log("result", result, "array el", arr[i])
      result = arr[i]
    }
  }
  return result
}

// findMaxEl([2,44,6,1000,17,19,100])


// why is shifting from an array O(n) time complexity?
function removeFromQueue(arr) {
  return arr.shift();
}

// const queue = [1,2,4,300]
// removeFromQueue(queue)

function reverseArr(originalArray) {
  let newArray = [];
  for (let i = originalArray.length - 1; i >= 0; i--) {
    // console.log("operations")
    newArray.push(originalArray[i]);
  }

  return newArray;
}

// reverseArr([4, 5, 6])
// reverseArr([6, 5, 4, 3, 2, 1]);

// ------------------------------------- //

// Quadratic Time Complexity: Big O(N^2) - nested loops or iterators

function multAllElements(arr1) {
  let sumOfProducts = 0;

  for (let el of arr1) {
    console.log("outer loop el: ", el);
    for (let subEl of arr1) {
      console.log("inner loop el: ", subEl);
      sumOfProducts += el * subEl;
    }
  }
  return sumOfProducts;
}

// multAllElements([1, 2]); // 1*1 (1) 1*2 (2) 2*1 (2) 2*2 (4)
// multAllElements([1, 2, 3, 4])