const {
    SinglyLinkedList,
} = require("../../data-structures/02_singly-linked-list");

const printValues = (list) => {
    let current = list.head;

    while (current) {
        console.log(current.value);
        current = current.next;
    }
};

const list1 = new SinglyLinkedList();
list1.build([1, 2, 3, 4, 5]);
const list2 = new SinglyLinkedList();
list2.build([1]);

printValues(list1);
printValues(list2);
