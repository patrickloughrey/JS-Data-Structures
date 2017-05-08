/*
*
*
* Creating a stack data structure from scratch without using JavaScript's native ArrayList functions
*
*
*/

let Stack = () => {
	this.count = 0; /* Will keep track of items in stack */
	this.storage = {}; /* Empty object */

	/* Adds an item to the top or "end" of the stack */
	this.push = (value) => {
		this.storage[this.count] = value;
		this.count++;
	}

	/* Removes or "pops" item off the top of the stack */
	this.pop = () => {
		if(this.count == 0) {
			return -1;
		}

		this.count--;
		let result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	/* Returns current size of stack */
	this.size = () => {
		return this.count;
	}

	/* Looks at or "peeks" at the item at the top of stack, but DOES NOT delete it */
	this.peek = () => {
		return this.storage[this.count - 1];
	}

}

/* Testing data structure out */
let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); /* Should log "2" */
consolelog(myStack.pop()); /* Should log "2" */
console.log(myStack.peek()); /* Should log "1" */
