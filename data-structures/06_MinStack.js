class MinStack {
    #stack;
    #minHolder;

    constructor() {
        this.#stack = [];
        this.#minHolder = [];
    }

    top() {
        let currentTop = this.#stack[this.#stack.length - 1];
        return currentTop ? currentTop : null;
    }

    push(value) {
        this.#stack.push(value);
        let currentMin = this.#minHolder[this.#minHolder.length - 1];

        this.#minHolder.push(
            value < currentMin || currentMin === undefined ? value : currentMin
        );
    }

    pop() {
        this.#minHolder.pop();
        return this.#stack.pop();
    }

    getMin() {
        return this.#minHolder[this.#minHolder.length - 1];
    }

    popMin() {
        let temp = [];
        let poppedMin = this.#minHolder.pop();

        while (this.top() !== poppedMin) {
            temp.push(this.pop());
        }
        this.#stack.pop();

        while (temp.length) {
            this.push(temp.pop());
        }
        return poppedMin;
    }
}
