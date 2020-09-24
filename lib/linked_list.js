// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {

    }

    // TODO: Implement the removeTail method here
    removeTail() {

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        this.head = new Node(val)
    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index === 0) {
            prevHead = this.head
            this.addToHead(val)
            this.head.next=prevHead
        } else {
            this.insertAt(index, val)
        }
    }

    // TODO: Creating Insert At helper method

    insertAt(index, val) {
        let curr = this.head;
        let currIdx = 0;
        let prev;

        while (currIdx < index) {
            prev = curr;
            curr = curr.next;

            currIdx++
        }
        const newNode = new Node(value);
        prev.next = newNode;
        newNode.next = curr;
    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
