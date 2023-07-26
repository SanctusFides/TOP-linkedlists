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

  // Walks through until it finds a node with no pointer - indicating the end of the chain- and returns that value
  tail() {
    if(this.head == null) {return "No nodes attached to this linked list";}
    let node = this.head;
    while(node.pointer != null) {node = node.pointer;}
    return node;
  }

  size() {
    if (this.head != null) {
      let counter = 1;
      let node = this.head;
      while (node.pointer != null) {
        counter++;
        node = node.pointer;
      }
      return counter;
    } else {
      return "No nodes attached to this linked list";
    }
  }

  at(index) {
    if(this.head == null) {return "No nodes attached to this linked list";}
    let node = this.head;
    for (let i = 1; i < index; i++) {
      node = node.pointer;
      if (node == null) {
        return `No node at index of ${index}, last index value was ${i}` ;
      }
    }
    return node;
  }

  // Pop normally removes and returns the final value of a list, but the instructions just say remove
  // So I will be following the instructions and only removing it from the list
  pop() {
    let node = this.head;
  }

  toString() {
    if (this.head == null) {
      console.log("No nodes attached to this linked list");
      return;
    }
    let string = "";
    //setting currentNode to head sets the starting place for moving through the while walking through
    let currentNode = this.head;
    // set a nullcheck on linked list to ensure it has a start
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

// const testNode5 = new Node("test4");
// testNode4.pointer = testNode5;
// const testNode6 = new Node("test6");
// testNode5.pointer = testNode6;

testList.prepend(testNode1);
testList.toString();
// console.log(testList.tail());
// console.log(testList.size());
console.log(testList.at(5));

