class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    // newNode 값이 작을 경우
    if (newNode.data < node.data) {
      // newNode의 left 비어있을 경우 삽입
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
      // newNode 값이 클 경우
    } else if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      return "같은 값이 존재합니다.";
    }
  }
}

const BST = new BinarySearchTree();
BST.insert(1);
BST.insert(2);
BST.insert(5);
BST.insert(3);
console.log(BST);
