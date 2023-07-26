class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  head() {
    return this.head;
  }

  addFirst(node) {
    this.head = node;
  }

  toString() {
    let string;
    let currentNode = this.head;
    while (currentNode.pointer != null) {
      string += `(${currentNode.value}) ->`
    }
    string += ` -> null`;
    console.log(string);
  }
}

const testList = new LinkedList();
const testNode1 = new Node("test1");

const testNode2 = new Node("test2");
testNode1.pointer = testNode2;

testList.addFirst(testNode1);
console.log("boop");
console.log(testList.toString());

