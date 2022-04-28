What do we mean when we talk about efficiency in our code? 
* Readability - good variables, breaking our logic into smaller functions for reusability. refactor to DRY up code. Going forward, we will also consider time and space complexity when discussing writing efficient code.

***

Algorithm => Wikipedia: "an algorithm is a finite sequence of well-defined instructions, typically used to solve a class of specific problems or to perform a computation." Thus an algorithm is simply a function.

***

Time and Space Complexity is a concept that is language agnostic. It will apply to any programming language we are writing in.

Time complexity: how much time does it take to run/complete a particular algorithm, based on our input (n)? Sometimes we can improve on our time complexity and sometimes we cannot. Sometimes we will choose a different type of data structure to optimize that runtime.

Space complexity: how much memory space is used in a particular algorithm, also based on our input (n)? This does not refer to the memory space of the function itself or the memory of its input, just the variables declared inside the function.

Especially with the state of our modern computers: these days memory is cheap but time can be expensive. So we generally trade off and prioritize time over space (if we have to choose).

***

O(logN) Binary Search or Divide and Conquer - is often compared to checking a phone book or a dictionary. Looking for a word that starts with G. Split the book in half. Is M before or after G. Discard the entire last half and check from A - M. Keep splitting until we find what we are looking for. Great time complexity, many fewer operations. (This algorithm is only effective with sorted data structures, like a sorted array, or a dictionary!)

***


PS! You can Google Youtube videos and watch developers strategize, whiteboard and code out all kinds of algorithms. But I've also had plenty of friends get good developer jobs without doing this work. It just depends on what kind of job you're looking for, and there may be some luck involved too!







