class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.#insert(newNode, this.root);
        }
    }

    #insert(newNode, node) {
        if (newNode.value < node.value) {
            if (!node.leftChild) {
                node.leftChild = newNode;
            } else {
                this.#insert(newNode, node.leftChild);
            }
        } else {
            if (!node.rightChild) {
                node.rightChild = newNode;
            } else {
                this.#insert(newNode, node.rightChild);
            }
        }
    }

    /* #lift(nodeToDelete, nodeToDeleteRightChild) {
        if (nodeToDeleteRightChild.leftChild) {
            nodeToDeleteRightChild.leftChild = this.#lift(
                nodeToDelete,
                nodeToDeleteRightChild.leftChild
            );
            return nodeToDeleteRightChild;
        } else {
            nodeToDelete.value = nodeToDeleteRightChild.value;
            return nodeToDeleteRightChild.rightChild;
        }
    } */

    search(value, node = this.root) {
        if (!node || node.value === value) {
            return node;
        } else if (value < node.value) {
            return this.search(value, node.leftChild);
        } else if (value > node.value) {
            return this.search(value, node.rightChild);
        }
    }

    delete(valueToDelete, node = this.root) {
        if (!node) {
            return node;
        } else if (valueToDelete < node.value) {
            node.leftChild = this.delete(valueToDelete, node.leftChild);
            return node;
        } else if (valueToDelete > node.value) {
            node.rightChild = this.delete(valueToDelete, node.rightChild);
            return node;
        } else if (valueToDelete === node.value) {
            if (!node.rightChild && !node.leftChild) {
                return null;
            } else if (!node.leftChild) {
                return node.rightChild;
            } else if (!node.rightChild) {
                return node.leftChild;
            } else {
                if (!node.rightChild.leftChild) {
                    node.value = node.rightChild.value;
                    node.rightChild = node.rightChild.rightChild;
                } else {
                    let parentMinNode = node.rightChild;
                    let min = node.rightChild.leftChild;

                    while (min.leftChild) {
                        parentMinNode = min;
                        min = min.leftChild;
                    }
                    node.value = min.value;
                    this.delete(min.value, parentMinNode);
                }
                return node;

                /* node.rightChild = this.#lift(node, node.rightChild);
                return node; */
            }
        }
    }
}

/*
                            15
                      7              20
                    4   8       18       25
                 2         10         22 
                    3        11     21
                                      21.5

*/

// let bst = new BinarySearchTree();
// let seq = [15, 10, 9, 12, 11, 14, 8, 9.5, 19, 18, 21, 17, 18.5, 20, 22];

// for (let val of seq) {
//     bst.add(val);
// }
