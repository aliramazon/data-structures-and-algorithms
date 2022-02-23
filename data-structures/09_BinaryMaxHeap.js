class BinaryMaxHeap {
    #data;
    constructor() {
        this.#data = [];
    }
    get length() {
        return this.#data.length;
    }

    get root() {
        return this.#data[0];
    }

    get #lastNode() {
        return this.#data[this.length - 1];
    }

    #leftChildIdx(parentIdx) {
        return parentIdx * 2 + 1;
    }

    #rightChildIdx(parentIdx) {
        return parentIdx * 2 + 2;
    }

    #parentIdx(childIdx) {
        return Math.floor((childIdx - 1) / 2);
    }

    insert(value) {
        this.#data.push(value);
        let newNodeIdx = this.length - 1;

        let parentIdx = this.#parentIdx(newNodeIdx);

        while (
            this.#data[newNodeIdx] > this.#data[parentIdx] &&
            newNodeIdx > 0
        ) {
            [this.#data[newNodeIdx], this.#data[parentIdx]] = [
                this.#data[parentIdx],
                this.#data[newNodeIdx]
            ];
            newNodeIdx = parentIdx;
            parentIdx = this.#parentIdx(newNodeIdx);
        }
    }
}
