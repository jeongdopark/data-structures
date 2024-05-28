class BSTNode {
  data: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: BSTNode | null;
  constructor() {
    this.root = null;
  }

  preOrder(node: BSTNode | null, order: number[] = []) {
    if (node !== null) {
      order.push(node.data);
      this.preOrder(node.left, order);
      this.preOrder(node.right, order);
    }
    return order;
  }

  inOrder(node: BSTNode | null, order: number[] = []) {
    if (node !== null) {
      this.inOrder(node.left, order);
      order.push(node.data);
      this.inOrder(node.right, order);
    }
    return order;
  }

  postOrder(node: BSTNode | null, order: number[] = []) {
    if (node !== null) {
      this.postOrder(node.left, order);
      this.postOrder(node.right, order);
      order.push(node.data);
    }
    return order;
  }

  insert(value: number) {
    // 추가할 노드 생성
    const newNode = new BSTNode(value);

    // 루트 노드가 비었을 경우 루트 노드에 삽입
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  insertNode(currentNode: BSTNode, newNode: BSTNode) {
    // 비교노드의 값이 더 큰 경우, 왼쪽으로 이동
    if (currentNode.data > newNode.data) {
      // 비교노드의 왼쪽이 비었을 경우
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
      // 비교노드의 값이 더 작은 경우, 오른쪽으로 이동
    } else if (currentNode.data < newNode.data) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
      // 이미 값이 존재하는 경우
    } else {
      return "이미 값이 존재합니다.";
    }
  }

  findMaxNode(node: BSTNode) {
    let maxNode = node;
    while (maxNode.right !== null) {
      maxNode = maxNode.right;
    }
    return maxNode;
  }

  delete(target: number) {
    this.root = this.deleteNode(this.root, target);
  }

  deleteNode(node: BSTNode | null, target: number) {
    if (node === null) {
      return null;
    }
    // 비교노드 < target, 오른쪽 이동
    if (node.data < target) {
      node.right = this.deleteNode(node.right, target);
      return node;
    }
    // 비교노드 > target, 왼쪽 이동
    if (node.data > target) {
      node.left = this.deleteNode(node.left, target);
      return node;
    }
    // node.data === target
    // case1 left, right node 없을 경우
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // case2 left or right 둘 중 한 곳에 node가 있을 경우
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node;
    }

    // case3 left & right 모두에 node가 있을 경우
    const leftSubTreeMaxNode = this.findMaxNode(node.left);
    node.data = leftSubTreeMaxNode.data;
    node.left = this.deleteNode(node.left, leftSubTreeMaxNode.data);
    return node;
  }
}

const BST_TEST = new BST();
BST_TEST.insert(10);
BST_TEST.insert(8);
BST_TEST.insert(5);
BST_TEST.insert(12);
BST_TEST.insert(14);
BST_TEST.delete(12);
BST_TEST.preOrder(BST_TEST.root);

export default BST;
export { BSTNode };
