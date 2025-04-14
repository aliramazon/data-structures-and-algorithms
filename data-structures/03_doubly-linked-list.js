class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    #length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.#length = 0;
    }

    get length() {
        return this.#length;
    }

    /* O(1) */
    push(value) {
        let newNode = new Node(value);

        if (this.#length === 0) {
            this.tail = newNode;
            this.head = this.tail;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        return ++this.#length;
    }

    /* O(1) */
    pop() {
        let popped = this.tail;
        if (!popped) {
            return undefined;
        }

        if (this.#length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            popped.prev = null;
        }
        this.#length--;
        return popped;
    }

    /* O(1) */
    unshift(value) {
        let newNode = new Node(value);

        if (this.#length === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        return ++this.#length;
    }

    /* O(1) */
    shift() {
        let shiftedNode = this.head;
        if (!shiftedNode) return undefined;

        if (this.#length === 1) {
            this.tail = null;
            this.head = this.tail;
        } else {
            this.head = this.head.next;
            shiftedNode.next = null;
        }
        this.#length--;
        return shiftedNode;
    }

    /* Remove the first node with the given value: O(n) */
    remove(value) {
        let current = this.head;
        if (!current) return false;

        // If the value is at the head, remove it directly
        if (current.value === value) {
            this.shift();
            return true;
        }

        // Traverse to find the node whose next has the target value
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        const nodeToRemove = current.next;

        // If the value was not found, return false
        if (!nodeToRemove) return false;

        // Bypass the node to remove
        current.next = nodeToRemove.next;

        // If the removed node is not the tail, fix the backward link
        if (nodeToRemove.next) {
            nodeToRemove.next.prev = current;
        } else {
            // If it was the tail, update the tail reference
            this.tail = current;
        }

        this.#length--;
        return true;
    }

    /* O(values.length) */
    build(values) {
        for (const value of values) {
            this.push(value);
        }

        return this;
    }
}

export { DoublyLinkedList };
