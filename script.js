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

  prepend(node) {
    this.head = node;
  }

  toString() {
    let string = "";
    //setting currentNode to head sets the starting place for moving through the while loop
    let currentNode = this.head;
    // set a nullcheck on linked list to ensure it has a start
    if (currentNode == null) {
      return "No nodes attached to this linked list";
    }
    // While there is the next nodes pointer set, attach this nodes value to our string
    // this will NOT include the last node to the string
    while (currentNode.pointer != null) {
      string += `(${currentNode.value}) -> `
      currentNode = currentNode.pointer;
    }
    // This attached this first AND OR final node to the string followed by the null info to indicate end
    string += `(${currentNode.value}) -> null`;
    console.log(string);
  }
}

const testList = new LinkedList();
const testNode1 = new Node("test1");

const testNode2 = new Node("test2");
testNode1.pointer = testNode2;

const testNode3 = new Node("test3");
testNode2.pointer = testNode3;

const testNode4 = new Node("test4");
testNode3.pointer = testNode4;

testList.prepend(testNode1);
console.log(testList.toString());

