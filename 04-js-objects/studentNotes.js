// this is where you can take notes without risking merge conflicts when you pull down new code from Github (the remote is called origin => i.e., where your online repo for this directory is located)

// also feel free to use this as a sandbox!

// Running the file ```node notes.js``` (without the backticks) will allow you to explore/play around with code. Make sure you have cd'ed into the inner folder before you do this.

console.log("hi there!!");
let arr = [1,2,3,4];
let arr2 = [];
for (let i = 0; i < arr.length * 4; i++) {
    arr2.push(arr[i % arr.length]);
}
arr2;
[...arr, ...arr, ...arr, ...arr];
