class Stack {
    #stack;
    constructor() {
        this.#stack = [];
    }

    /* Checks whether the stack is empty? */
    isEmpty() {
        return this.#stack.length === 0;
    }

    /* Get the top item from the stack */
    top() {
        return this.#stack[this.#stack.length - 1];
    }

    /* Insert an element into the stack */
    push(x) {
        this.#stack.push(x);
    }

    /* Delete an element from the stack. */
    pop() {
        if (this.isEmpty()) {
            return false;
        }
        return this.#stack.pop();
    }
}
