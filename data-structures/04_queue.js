const { DoublyLinkedList } = require("./04_DoublyLinkedList.js");

class Queue {
    constructor() {
        this.queue = new DoublyLinkedList();
    }

    /* Get the size of Queue: O(1) */
    get size() {
        return this.queue.length;
    }

    /* Check weather the Queue is empty */
    isEmpty() {
        return this.size === 0;
    }

    /* Add element to the back: O(1) */
    enqueue(element) {
        this.queue.push(element);
        return this.size;
    }

    /* Remove from the front: O(1) */
    dequeue() {
        return this.size ? this.queue.shift().value : undefined;
    }

    /* Peek the value, but do not remove: O(1)*/
    peek() {
        return this.size ? this.queue.head.value : null;
    }
}

export { Queue };
