/* 
Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
*/

class HashMap {
    #hashMap;
    constructor() {
        this.#hashMap = {};
    }

    put(key, value) {
        this.#hashMap[key] = value;
    }

    get(key) {
        if (!this.#hashMap[key] && this.#hashMap[key] !== 0) return -1;
        return this.#hashMap[key];
    }

    remove(key) {
        delete this.#hashMap[key];
    }
}

class MyHashMap {
    #hashMap;
    constructor() {
        this.#hashMap = [];
    }

    static hashKey(key) {
        let sum = 0;
        for (let char of key.toString()) {
            sum += char.charCodeAt();
        }
        return sum % 127;
    }

    set(key, value) {
        let bucketIdx = MyHashMap.hashKey(key);
        let bucket = this.#hashMap[bucketIdx];
        if (!bucket) {
            this.#hashMap[bucketIdx] = [[key, value]];
        } else {
            for (let i = 0; i < bucket.length; i++) {
                let pair = bucket[i];
                if (pair[0] === key) {
                    pair[1] = value;
                    return;
                }
            }
            bucket.push([key, value]);
        }
    }

    get(key) {
        let bucketIdx = MyHashMap.hashKey(key);
        let bucket = this.#hashMap[bucketIdx];
        if (!bucket) return -1;

        for (let pair of bucket) {
            if (pair[0] === key) return pair[1];
        }
        return -1;
    }

    remove(key) {
        let bucketIdx = MyHashMap.hashKey(key);
        let bucket = this.#hashMap[bucketIdx];
        if (!bucket) return;

        let removablePairIdx = bucket.length;
        for (let i = 0; i < bucket.length; i++) {
            let pair = bucket[i];
            if (pair[0] === key) {
                removablePairIdx = i;
                break;
            }
        }
        bucket.splice(removablePairIdx, 1);
    }
}
