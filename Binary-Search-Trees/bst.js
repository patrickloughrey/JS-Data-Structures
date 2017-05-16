/*
*
*
* Binary Search Trees - Data Structures in JavaScript
* Creating a binary search tree using classes 
*
*
*/

/* First we have to create a Node class to create each node */
class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

/* Next we have to create the entire binary tree of nodes */
class BST {
	constructor() {
		this.root = null;
	}

	add(data) {
		const node = this.root;

		/* If the new node created is the first node to be added */
		if(node === null) {
			this.root = new Node(data);
			return;

		} else {
			/* Recursive function to properly place new node */
			const searchTree = (node) => {
				/* If the value of the node being added is less than root node, we traverse the left side of tree */
				if(data < node.data) {
					if(node.left === null) {
						node.left = new Node(data);
						return;
					} else if(node.left != null) {
						return searchTree(node.left);
					}
				  /* If the value of the node being added is greater than root, we traverse right side of tree */
				} else if(data > node.data) {
					if(node.right === null) {
						node.right = new Node(data);
						return;
					} else if(node.right != null) {
						return searchTree(node.right);
					}

				} else {
					return null;
				}

			}; /* End of search tree function */

			return searchTree(node);
		}
	}

	/* Function to find the minimum node in the tree */
	findMin() {
		let curr = this.root;
		while(curr.left != null) {
			curr = curr.left;
		}

		return curr.data;
	}

	/* Function to find the maximum node in the tree */
	findMax() {
		let curr = this.root;
		while(curr.right != null) {
			curr = curr.right;
		}
		return curr.data;
	}


}