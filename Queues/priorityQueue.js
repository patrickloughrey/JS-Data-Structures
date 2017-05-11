/*
*
*
* Building a queue from scratch without using native JavaScript ArrayLists
*
*
*/

function priorityQueue() {
	var collection = [];
	this.printCollection = () => {
		console.log(collection);
	};

	this.enqueue = (element) => {
		if(this.isEmpty()) {
			collection.push(element);
		} else {
			var added = false;
			/* If the queue is non-empty, you must check the priorites to properly place the new element */
			for(var i = 0; i < collection.length; i++) {
				/* Element is passed into enqueue function, first parameter is the item to be entered and second is the priority */
				/* We compare the priority paramter of the new element with each element in the collection */
				if(element[1] < collection[i][1]) {
					/* Add element to collection by splicing array and entering new element */
					collection.splice(i,0,element);
					added = true;
					break;
				}
			}

			/* This line is just to make sure element was added properly */
			if(!added) {
				collection.push(element);
			}
		}
	};

	this.dequeue = () => {
		let value = collection.shift();
		return value[0];
	};

	this.front = () => {
		return collection[0];
	};

	this.size = () => {
		return collection.length;
	};

	this.isEmpty = () => {
		return if(collection.length === 0);
	};

}

/* Create a new priority queue and populate it with entries and priorities */
let pq = new priorityQueue();
pq.enqueue(['Russell Westbrook', 3]);
pq.enqueue(['Lebron James', 5]);
pq.enqueue(['Kawhi Leonard', 4]);
pq.enqueue(['Stephen Curry', 4]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
