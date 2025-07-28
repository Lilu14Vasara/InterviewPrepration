// Stack using Array in JavaScript
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element); // Add element to top
  }

  pop() {
    if (this.isEmpty()) return "Stack Underflow";
    return this.stack.pop(); // Remove top element
  }

  peek() {
    return this.stack[this.stack.length - 1]; // View top element
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  printStack() {
    console.log(this.stack.join(" "));
  }
}

// Usage
const st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.printStack(); // 10 20 30
console.log("Popped:", st.pop()); // 30
console.log("Top:", st.peek()); // 20

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element); // Add to end
  }

  dequeue() {
    if (this.isEmpty()) return "Queue Underflow";
    return this.queue.shift(); // Remove from front
  }

  front() {
    return this.queue[0]; // Get front element
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  printQueue() {
    console.log(this.queue.join(" "));
  }
}

// Usage
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.printQueue(); // 1 2 3
console.log(q.dequeue()); // 1
console.log(q.front()); // 2

class QueueUsingStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    if (this.stack2.length === 0) return "Queue is empty";
    return this.stack2.pop();
  }
}

// Usage
const qs = new QueueUsingStacks();
qs.enqueue(10);
qs.enqueue(20);
qs.enqueue(30);
console.log(qs.dequeue()); // 10
console.log(qs.dequeue()); // 20

//  Singley link list Node structure
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete a node by value
  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Print list
  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

// Usage
const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.printList(); // 10 -> 20 -> 30 -> null

ll.prepend(5);
ll.printList(); // 5 -> 10 -> 20 -> 30 -> null

ll.delete(20);
ll.printList(); // 5 -> 10 -> 30 -> null

//Doubly
// Node class
class DoublyNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Doubly Linked List class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert at the end
  append(data) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // Insert at the beginning
  prepend(data) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  // Delete a node with a given value
  delete(data) {
    if (!this.head) return;

    let current = this.head;

    while (current && current.data !== data) {
      current = current.next;
    }

    if (!current) return; // Not found

    if (current === this.head) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
    } else if (current === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
  }

  // Print from head to tail
  printForward() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }
    result += "null";
    console.log("Forward:", result);
  }

  // Print from tail to head
  printBackward() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }
    result += "null";
    console.log("Backward:", result);
  }
}

// Usage
const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.printForward(); // Forward: 10 <-> 20 <-> 30 <-> null
dll.printBackward(); // Backward: 30 <-> 20 <-> 10 <-> null

dll.prepend(5);
dll.printForward(); // Forward: 5 <-> 10 <-> 20 <-> 30 <-> null

dll.delete(20);
dll.printForward(); // Forward: 5 <-> 10 <-> 30 <-> null

//Tree
// Node structure
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Inorder Traversal: Left, Root, Right
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // Preorder Traversal: Root, Left, Right
  preorder(node) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Postorder Traversal: Left, Right, Root
  postorder(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  // Level Order Traversal (BFS)
  levelOrder() {
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}

// Example Usage:
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

/*
          1
         / \
        2   3
       / \
      4   5
  */

console.log("Inorder:");
tree.inorder(tree.root); // 4 2 5 1 3

console.log("Preorder:");
tree.preorder(tree.root); // 1 2 4 5 3

console.log("Postorder:");
tree.postorder(tree.root); // 4 5 2 3 1

console.log("Level Order:");
tree.levelOrder(); // 1 2 3 4 5

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  // Add a vertex
  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  // Add an edge
  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1); // For undirected graph
  }

  // Print the graph
  printGraph() {
    for (let [vertex, neighbors] of this.adjList) {
      console.log(vertex, "->", neighbors.join(", "));
    }
  }

  // Breadth-First Search (BFS)
  bfs(start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
        for (let neighbor of this.adjList.get(vertex)) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }

  // Depth-First Search (DFS)
  dfs(start, visited = new Set()) {
    if (visited.has(start)) return;
    console.log(start);
    visited.add(start);
    for (let neighbor of this.adjList.get(start)) {
      this.dfs(neighbor, visited);
    }
  }
}

// Usage
const g = new Graph();
["A", "B", "C", "D", "E"].forEach((v) => g.addVertex(v));
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");

/*
  Graph:
    A - B - D
     \
      C - E
  */

console.log("Graph:");
g.printGraph();

console.log("BFS from A:");
g.bfs("A"); // A B C D E

console.log("DFS from A:");
g.dfs("A"); // A B D C E (may vary)
