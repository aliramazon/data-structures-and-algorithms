const DoublyLinkedList = require('./04_DoublyLinkedList.js');

class Queue {
    constructor() {
        this.queue = new DoublyLinkedList();
    }

    get length() {
        return this.queue.length;
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        return this.length ? this.queue.shift().value : undefined;
    }

    read() {
        return this.length ? this.queue.head.value : null;
    }
}

module.exports = Queue;
