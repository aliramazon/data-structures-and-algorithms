class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    #length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.#length = 0;
    }

    /* Get length: O(1) */
    get length() {
        return this.#length;
    }

    #newNode(value) {
        return new Node(value);
    }

    /* O(1) */
    push(value) {
        const newNode = this.#newNode(value);

        if (this.#length === 0) {
            this.tail = newNode;
            this.head = this.tail;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        return ++this.#length;
    }

    /* O(1) */
    unshift(value) {
        let newNode = this.#newNode(value);

        if (this.#length === 0) {
            this.tail = newNode;
            this.head = this.tail;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return ++this.#length;
    }

    /* O(N) */
    pop() {
        const popped = this.tail;
        if (!popped) return undefined;

        if (this.#length === 1) {
            this.tail = null;
            this.head = this.tail;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.#length--;

        return popped;
    }

    /* O(1) */
    shift() {
        const shifted = this.head;
        if (!shifted) return undefined;

        if (this.#length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.#length--;
        return shifted;
    }

    /* O(N) */

    remove(value) {
        let current = this.head;
        if (!current) return false;

        if (current.value === value) {
            this.shift();
            return true;
        } else {
            while (current.next && current.next.value !== value) {
                current = current.next;
            }
            if (!current.next) return false; // if we could not find the value, return false
            // If we find the value, direct current node to next next node.
            current.next = current.next.next;

            // If removed node was the last node, then set tail to current node.
            if (!current.next) {
                this.tail = current;
            }
            this.#length--;
        }
        return true;
    }

    /* O(values.length) */
    build(values) {
        for (const value of values) {
            this.push(value);
        }

        return this;
    }

    /* O(N) */

    reverse() {
        let current = this.head;
        let prev = null;
        let nextNode;

        while (current) {
            nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }
}

export { SinglyLinkedList };
