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