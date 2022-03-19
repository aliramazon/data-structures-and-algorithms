class BinaryMinHeap {
    #data;
    constructor() {
        this.#data = [];
    }

    get length() {
        return this.#data.length;
    }

    get #root() {
        return this.#data[0];
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
        if (value === undefined) return;
        this.#data.push(value);
        let newNodeIdx = this.length - 1;
        let parentIdx = this.#parentIdx(newNodeIdx);

        while (
            parentIdx >= 0 &&
            this.#data[newNodeIdx] < this.#data[parentIdx]
        ) {
            [this.#data[parentIdx], this.#data[newNodeIdx]] = [
                this.#data[newNodeIdx],
                this.#data[parentIdx]
            ];

            newNodeIdx = parentIdx;
            parentIdx = this.#parentIdx(newNodeIdx);
        }
    }

    #calculateSmallerChildIdx(trickleNodeIdx) {
        let leftChildIdx = this.#leftChildIdx(trickleNodeIdx);
        let rightChildIdx = this.#rightChildIdx(trickleNodeIdx);
        let finalCompareIdx;

        if (
            (this.#data[rightChildIdx] || this.#data[rightChildIdx] === 0) &&
            this.#data[rightChildIdx] < this.#data[leftChildIdx]
        ) {
            finalCompareIdx = rightChildIdx;
        } else {
            finalCompareIdx = leftChildIdx;
        }

        if (
            (this.#data[finalCompareIdx] ||
                this.#data[finalCompareIdx] === 0) &&
            this.#data[finalCompareIdx] < this.#data[trickleNodeIdx]
        ) {
            return finalCompareIdx;
        }

        return trickleNodeIdx;
    }

    delete() {
        let smallestValue = this.#root;
        let lastNode = this.#data.pop();
        if (!this.length) return lastNode;
        this.#data[0] = lastNode;
        let trickleNodeIdx = 0;
        let smallerChildIdx = this.#calculateSmallerChildIdx(trickleNodeIdx);

        while (trickleNodeIdx !== smallerChildIdx) {
            [this.#data[trickleNodeIdx], this.#data[smallerChildIdx]] = [
                this.#data[smallerChildIdx],
                this.#data[trickleNodeIdx]
            ];
            trickleNodeIdx = smallerChildIdx;
            smallerChildIdx = this.#calculateSmallerChildIdx(trickleNodeIdx);
        }
        return smallestValue;
    }
}
