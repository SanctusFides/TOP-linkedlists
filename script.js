class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}

class LinkedList {

  constructor() {
    this.listHead = null;
  }

  
  prepend(node) {
    this.listHead = node;
  }
  
  head() {
    return this.listHead;
  }

  // Walks through until it finds a node with no pointer - indicating the end of the chain- and returns that value
  tail() {
    if(this.listHead == null) {return "No nodes attached to this linked list";}
    let node = this.head();
    while(node.pointer != null) {node = node.pointer;}
    return node;
  }

  size() {
    if (this.listHead != null) {
      let counter = 1;
      let node = this.head();
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
    if(this.listHead == null) {return "No nodes attached to this linked list";}
    let node = this.head();
    for (let i = 1; i < index; i++) {
      node = node.pointer;
      if (node == null) {
        return `No node at index of ${index}, last index value was ${i}` ;
      }
    }
    return node;
  }

  append(newNode) {
    if(this.listHead == null) {return "No nodes attached to this linked list";}
    let node = this.head();
    while (node.pointer != null) {
      node = node.pointer;
    }
    node.pointer = newNode;
  }

  // Pop normally removes and returns the final value of a list, but the instructions just say remove
  // So I will be following the instructions and only removing it from the list
  pop() {
    if(this.listHead == null) {return "No nodes attached to this linked list";}
    let node = this.head();
    // prevNode keeps track of the last checked node so that if the end is found (pointer val is null) then set prevNode
    // pointer to null, thus disconnecting it from the linkedlist.
    let prevNode = null;
    while(node.pointer != null) {
      prevNode = node;
      node = node.pointer;
      if (node.pointer == null) {
        prevNode.pointer = null;
      }
    }    
  }

  contains(value) {
    if(this.listHead == null) {return "No nodes attached to this linked list";}
    let node = this.head();
    // This while loop will check everything up to the last value
    while (node.pointer != null) {
      if (node.value == value) {return true;}
      node = node.pointer;
    }
    // If the value isn't found in the while loop above, this is if statement checks the final value of the chain
    if (this.tail().value == value) {return true;} else {return false;}
  }

  toString() {
    if (this.listHead == null) {
      console.log("No nodes attached to this linked list");
      return;
    }
    let string = "";
    //setting currentNode to head sets the starting place for moving through the while walking through
    let currentNode = this.head();
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

const testNode5 = new Node("test5");
// testNode4.pointer = testNode5;
// const testNode6 = new Node("test6");
// testNode5.pointer = testNode6;

testList.prepend(testNode1);
testList.append(testNode5);

testList.toString();
// console.log(testList.head());
// console.log(testList.tail());
// console.log(testList.size());
// console.log(testList.at(4));
// testList.pop();
console.log(testList.contains("test6"));

// testList.toString();

