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
			for(var i = 0; i < collection.length; i++) {
				if(element[1] < collection[i][1]) {
					collection.splice(i,0,element);
					added = true;
					break;
				}
			}

			if(!added) {
				collection.push(element);
			}
		}
	};

	
}