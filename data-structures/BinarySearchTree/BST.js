class ElementNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  finMaxNode(node) {
    let _node = node;
    while (_node.right !== null) {
      _node = _node.right;
    }
    return _node;
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }
    // 노드보다 작을 경우, 왼쪽
    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    // 노드보다 클 경우, 오른쪽
    if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // 타겟 노드일 경우
    // case1) left, right node 없을 경우
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    // case2) left or right node 둘 중 하나만 있을 경우
    // right node 있을 경우
    if (node.left === null) {
      node = node.right;
      return node;
    }
    // left node 있을 경우
    if (node.right === null) {
      node = node.left;
      return node;
    }

    // case3) left와 right node 둘다 있을 경우.
    const leftSubTreeMinNode = this.finMaxNode(node.left);
    node.data = leftSubTreeMinNode.data;
    node.left = this.removeNode(node.left, leftSubTreeMinNode.data);
    return node;
  }

  preOrder(node, result = []) {
    if (node !== null) {
      result.push(node.data);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  insert(data) {
    const newNode = new ElementNode(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    } else this.insertNode(this.root, newNode);
  }

  insertNode(currentNode, newNode) {
    // 비교 노드가 더 클 경우, 왼쪽으로
    if (currentNode.data > newNode.data) {
      // 왼쪽 비어있을 경우 삽입
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
      // 비교 노드가 더 작을 경우, 오른쪽으로
    } else if (currentNode.data < newNode.data) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    } else {
      return;
    }
  }
}

const BST_TEST = new BST();
BST_TEST.insert(10);
BST_TEST.insert(6);
BST_TEST.insert(12);
BST_TEST.insert(15);
BST_TEST.insert(8);
BST_TEST.remove(6);

console.log(BST_TEST.preOrder(BST_TEST.root, []));
