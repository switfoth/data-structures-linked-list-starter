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
    constructor(value) {
        this.value = value
        this.next = null
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here - 1 > 2 > 3
    addToTail(value) {
        this.length += 1
        const newNode = new Node(value);
        let curr = this.head;
        if (!curr){
            this.head = newNode;
            this.tail = this.head;
        } else {
        this.tail.next = newNode;
        this.tail = newNode;
        }
        return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        let oldTail = this.tail
        let curr = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length -= 1
            return oldTail
        } else if (this.length) {
             let prev;

             while (curr.next) {
                 prev = curr;
                 curr = curr.next;
             }
            // while (curr.next){
            //     // if (curr.next === oldTail){
            //     //     curr.next = null;
            //     // }
            //     curr = curr.next;
            // }
            prev.next = null;
            this.tail = prev;
            // this.tail.next = null;
            this.length -= 1
            return oldTail;
        } else {
            return undefined;
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(value) {
        if (this.length){
            let oldHead = this.head;
            this.head = new Node(value);
            this.head.next = oldHead
            this.length += 1
        }else{
            this.head = new Node(value);
            this.tail = this.head;
            this.length += 1
        }
        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 1){
            let oldHead = this.head;
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return oldHead;
        } else if (this.length > 1) {
            let oldHead = this.head;
            let newHead = this.head.next;
            this.head = newHead;
            this.length -= 1;
            return oldHead;
        } else {
            return undefined;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let curr = this.head

        while(curr) {  
            if(curr.value === target) {
                return true
            }
            curr = curr.next
        }
        return false
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length) return null
        let curr = this.head;
        let currIdx = 0;

        while (currIdx < index) {
            curr = curr.next;
            currIdx++
        }

        return curr
    }

    // TODO: Implement the set method here
    set(index, value) {
        let curr = this.head;
        let currIdx = 0;

        while (currIdx < index) {
            curr = curr.next;
            currIdx++
        }

        if(curr) {
            curr.value = value;
            return true
        } else {
            return false;
        }
    }

    // TODO: Implement the insert method here
    insert(index, value) {
        const newNode = new Node(value);
        if (index === 0) {
            let prevHead = this.head;
            this.head = newNode;
            this.head.next = prevHead;
            this.length += 1;
            return true;
        } else if (index <= this.length) {
            this.insertAt(index, value);
            this.length += 1;
            return true;
        } else {
            return false;
        }

    }

    // TODO: Creating Insert At helper method

    insertAt(index, value) {
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
        if (index > this.length) return undefined;
        let curr = this.head;
        let currIdx = 0;
        let prev;
        while (currIdx < index){
            prev = curr;
            curr = curr.next;
            currIdx++;
        }
        prev.next = curr.next;
        this.length -= 1;
        return curr;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
