class Stack {
    #stack;
    constructor() {
        this.#stack = [];
    }

    /* Get the size of stack: O(1) */
    get size() {
        return this.#stack.length;
    }

    /* Checks whether the stack is empty:  O(1) */
    isEmpty() {
        return this.#stack.length === 0;
    }

    /* Get the top item from the stack: O(1) */
    peek() {
        return this.#stack[this.#stack.length - 1];
    }

    /* Insert an element into the stack: O(1) */
    push(x) {
        this.#stack.push(x);
    }

    /* Delete an element from the stack: O(1) */
    pop() {
        if (this.isEmpty()) {
            return false;
        }
        return this.#stack.pop();
    }
}
