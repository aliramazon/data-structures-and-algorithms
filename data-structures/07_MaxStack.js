class MaxStack {
    #maxHolder;
    #stack;
    constructor() {
        this.#maxHolder = [];
        this.#stack = [];
    }

    push(number) {
        this.#stack.push(number);
        let currentMax = this.#maxHolder[this.#maxHolder.length - 1];

        this.#maxHolder.push(
            currentMax < number || currentMax === undefined
                ? number
                : currentMax
        );
    }

    pop() {
        this.#maxHolder.pop();
        return this.#stack.pop();
    }

    top() {
        return this.#stack[this.#stack.length - 1];
    }

    peekMax() {
        return this.#maxHolder[this.#stack.length - 1];
    }

    popMax() {
        let temp = [];
        let poppedMax = this.#maxHolder.pop();
        while (this.top() !== poppedMax) {
            temp.push(this.pop());
        }
        this.#stack.pop();

        while (temp.length) {
            this.push(temp.pop());
        }

        return poppedMax;
    }
}
