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
		while(curr.left !== null) {
			curr = curr.left;
		}

		return curr.data;
	}

	/* Function to find the maximum node in the tree */
	findMax() {
		let curr = this.root;
		while(curr.right !== null) {
			curr = curr.right;
		}
		return curr.data;
	}

	/* Function to find a node in the BST */
	find(data) {
		let curr = this.root;
		while(curr.data !== data) {
			if(data < curr.data) {
				curr = curr.left;

			} else {
				curr = curr.right;
			}
			/* If node was not found */
			if(curr === data) {
				return null;
			}
		}

		return curr;
	}
	
	/* Boolean function to see if a node is present */
	isPresent(data) {
		let curr = this.root;
		while(curr) {
			if(data === curr.data) {
				return true;
			}
			if(data < curr.data) {
				curr = curr.left;

			} else {
				curr = curr.right;
			}
		}

		return false;
	}

	/* Function to remove a node from the BST */
	remove(data) {
		const removeNode = (node, data) => {
			/* If tree is empty */
			if(node == null) {
				return null;
			}
			if(data == node.data) {
				/* Scenario 1: Node to be removed has no children */
				if(node.left == null && node.right == null) {
					return null;
				}

				/* Scenario 2: Node to be removed has no left children */
				if(node.left == null) {
					return node.right;
				}

				/* Scenario 3: Node to be removed has no right children */
				if(node.right == null) {
					return node.left;
				}

				/* Scenario 4: Node has both children */
				let temp = node.right;
				/* We replace the node to be deleted with the smallest node in the entire subtree */
				/* We traverse the subtree until temp.left = null, then we promote that node since it has no children */
				while(temp.left != null) {
					temp = temp.left;
				}
				node.data = temp.data;
				node.right = removeNode(node.right, temp.data);
				return node;

			} else if(data < node.data) {
				node.left = removeNode(node.left, data);
				return node;

			} else {
				node.right = removeNode(node.right, data);
				return node;
			}
		}

		this.root = removeNode(this.root, data);
	}
}

/* Test out the Binary Search Tree */
const bst = new BST();

bst.add(1);
bst.add(2);
bst.add(3);
bst.add(10);
bst.add(7);
bst.add(6);
bst.add(12);
bst.add(4);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.findMax());
console.log(bst.isPresent(4));
