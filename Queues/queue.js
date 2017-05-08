/*
*
*
* Queues - Data Structures in JavaScript 
* Creating a Queue data structure using JavaScript's native ArrayList
*
*
*
*/

function Queue() {
	let collection = [];
	/* Displays the current items in the queue as an array */
	this.print = () => {
		console.log(collection);
	};

	/* Adds an item to the queue */
	this.enqueue = (element) => {
		collection.push(element);
	};

	/* Deletes and returns item at the beginning of the queue */
	this.dequeue = () => {
		return collection.shift(); /* shift() pulls off the first item of the array */
	};

	/* Returns the item at the beginning of the queue */
	this.front = () => {
		return collection[0];
	};

	/* Determines the size of the queue */
	this.size = () => {
		return collection.length;
	};

	/* Checks to see if the queue is empty */
	this.isEmpty = () => {
		return (collection.length === 0);
	};

}

/* Testing out Queue */
let q = new Queue();
q.enqueue('P');
q.enqueue('a');
q.enqueue('t');
q.print();
q.dequeue();
q.front();
q.print();

/* The Big-O running time for the methods in the queue data structure are the same as those of the stack, O(1) or constant time. 
   In a similar fashion to the stack, the queue performs each function on the first item in the queue. The only difference is which 
   item is added and removed from the data structure. In a queue, an item is added and removed in a FIFO (First In First Out) manner.
   However, the running times are the exact same. */
