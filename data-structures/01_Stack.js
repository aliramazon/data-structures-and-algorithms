class Stack {
    #stack;
    constructor() {
        this.#stack = [];
    }

    /* Get the size of stack */
    get size() {
        return this.#stack.length;
    }

    /* Checks whether the stack is empty? */
    isEmpty() {
        return this.#stack.length === 0;
    }

    /* Get the top item from the stack */
    peek() {
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
