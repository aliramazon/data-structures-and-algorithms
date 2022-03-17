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

    #calculateLargerChildIdx(trickleNodeIdx) {
        let leftChildIdx = this.#leftChildIdx(trickleNodeIdx);
        let rightChildIdx = this.#rightChildIdx(trickleNodeIdx);
        let finalCompareIdx;

        if (
            (this.#data[rightChildIdx] || this.#data[rightChildIdx] === 0) &&
            this.#data[rightChildIdx] > this.#data[leftChildIdx]
        ) {
            finalCompareIdx = rightChildIdx;
        } else {
            finalCompareIdx = leftChildIdx;
        }
        if (
            (this.#data[finalCompareIdx] ||
                this.#data[finalCompareIdx] === 0) &&
            this.#data[finalCompareIdx] > this.#data[trickleNodeIdx]
        ) {
            return finalCompareIdx;
        }

        return trickleNodeIdx;
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

    delete() {
        let largestValue = this.root;
        let lastNode = this.#data.pop();
        if (!this.length) return lastNode;
        this.#data[0] = lastNode;
        let trickleNodeIdx = 0;
        let largerChildIdx = this.#calculateLargerChildIdx(trickleNodeIdx);

        while (trickleNodeIdx !== largerChildIdx) {
            [this.#data[trickleNodeIdx], this.#data[largerChildIdx]] = [
                this.#data[largerChildIdx],
                this.#data[trickleNodeIdx]
            ];
            trickleNodeIdx = largerChildIdx;
            largerChildIdx = this.#calculateLargerChildIdx(trickleNodeIdx);
        }
        return largestValue;
    }
}

const maxHeap = new BinaryMaxHeap();
