class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        return ++this.length;
    }

    pop() {
        let popped = this.tail;
        if (!popped) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            popped.prev = null;
        }
        this.length--;
        return popped;
    }

    unshift(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        return ++this.length;
    }

    shift() {
        let shiftedNode = this.head;
        if (!shiftedNode) return undefined;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }
}

module.exports = DoublyLinkedList;
