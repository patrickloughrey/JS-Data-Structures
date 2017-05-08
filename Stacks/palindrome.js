/*
*
* Stacks - Data Structures in JavaScript 
* Stacks can be implemented in JavaScript using an ArrayList or created from scratch 
* This program will implement a stack using an ArrayList to hold the stack's elements since the ArrayList can have 
* the same properties as a stack natively
*
*
*/

/* A palindrome is a word that, if spelt backwards, results in the same word */
let letters = [];
let word = "racecar";
let reverseWord = "";

/* We will use a loop to push each letter of the word onto the stack using the stack method 'push' */
for(let i = 0; i < word.length; i++) {
	letters.push(word[i]);
}

/* Now we pop the letters off of the stack in reverse order */
/* This will result in the word in reverse order since a stack follows a LIFO (Last In First Out) methodology */
for(let i = 0; i < word.length; i++) {
	reverseWord += letters.pop();
}

/* Now check to see if the word is a palindrome */
if(reverseWord === word) {
	console.log(word + " is a palindrome!\n");

} else {
	console.log(word + " is not a palindrome!\n");
}

/* The Big-O running time for push() and pop() in the stack data structure is O(1) or constant time, because, when using these
   stack functions, we are only working with the topmost item in the stack, the rest of the items are irrelevant. For example, 
   when pushing an item onto the stack, the new item is simply placed at the top of the stack. No additional comparisons are 
   made, so there is only 1 item that needs to be pushed or popped, resulting in a constant running time. */