const {
    SinglyLinkedList,
} = require("../../data-structures/02_singly-linked-list");

const reverse = (list) => {
    let current = list.head;
    let prevNode = null;
    let nextNode;

    while (current) {
        nextNode = current.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }

    [list.head, list.tail] = [list.tail, list.head];

    return list;
};

const list1 = new SinglyLinkedList();
list1.build([1, 2, 3, 4, 5]);
console.log(reverse(list1));
