class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  head() {
    return this.head;
  }

  addFirst(node) {
    this.head = node;
  }

  toString() {
    console.log(this.head);
  }
}

const testList = new LinkedList();
const testNode1 = new Node('test');

testList.addFirst(testNode1);
console.log(testList);
