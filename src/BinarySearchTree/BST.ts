// class BSTNode {
//   data: number;
//   left: BSTNode | null;
//   right: BSTNode | null;
//   constructor(data: number) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   root: BSTNode | null;
//   constructor() {
//     this.root = null;
//   }

//   finMaxNode(node: BSTNode) {
//     let _node = node;
//     while (_node.right !== null) {
//       _node = _node.right;
//     }
//     return _node;
//   }

//   remove(data: number) {
//     this.root = this.removeNode(this.root, data);
//   }

//   removeNode(node: BSTNode | null, key: number) {
//     if (node === null) {
//       return null;
//     }
//     // 노드보다 작을 경우, 왼쪽
//     if (key < node.data) {
//       node.left = this.removeNode(node.left, key);
//       return node;
//     }
//     // 노드보다 클 경우, 오른쪽
//     if (key > node.data) {
//       node.right = this.removeNode(node.right, key);
//       return node;
//     }
//     // 타겟 노드일 경우
//     // case1) left, right node 없을 경우
//     if (node.left === null && node.right === null) {
//       node = null;
//       return node;
//     }
//     // case2) left or right node 둘 중 하나만 있을 경우
//     // right node 있을 경우
//     if (node.left === null) {
//       node = node.right;
//       return node;
//     }
//     // left node 있을 경우
//     if (node.right === null) {
//       node = node.left;
//       return node;
//     }

//     // case3) left와 right node 둘다 있을 경우.
//     const leftSubTreeMinNode = this.finMaxNode(node.left);
//     node.data = leftSubTreeMinNode.data;
//     node.left = this.removeNode(node.left, leftSubTreeMinNode.data);
//     return node;
//   }

//   preOrder(node: BSTNode | null, result: number[] = []) {
//     if (node !== null) {
//       result.push(node.data);
//       this.preOrder(node.left, result);
//       this.preOrder(node.right, result);
//     }
//     return result;
//   }

//   insert(data: number) {
//     const newNode = new BSTNode(data);
//     if (this.root === null) {
//       this.root = newNode;
//       return;
//     } else this.insertNode(this.root, newNode);
//   }

//   insertNode(currentNode: BSTNode, newNode: BSTNode) {
//     // 비교 노드가 더 클 경우, 왼쪽으로
//     if (currentNode.data > newNode.data) {
//       // 왼쪽 비어있을 경우 삽입
//       if (currentNode.left === null) {
//         currentNode.left = newNode;
//         return;
//       } else {
//         this.insertNode(currentNode.left, newNode);
//       }
//       // 비교 노드가 더 작을 경우, 오른쪽으로
//     } else if (currentNode.data < newNode.data) {
//       if (currentNode.right === null) {
//         currentNode.right = newNode;
//         return;
//       } else {
//         this.insertNode(currentNode.right, newNode);
//       }
//     } else {
//       return;
//     }
//   }
// }

// const BST_TEST = new BST();
// BST_TEST.insert(10);
// BST_TEST.insert(6);
// BST_TEST.insert(12);
// BST_TEST.insert(15);
// BST_TEST.insert(8);
// BST_TEST.remove(6);

// console.log(BST_TEST.preOrder(BST_TEST.root, []));

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
      return console.log("이미 값이 존재합니다.");
    }
  }
}

const BST_TEST = new BST();
BST_TEST.insert(10);
BST_TEST.insert(8);
BST_TEST.insert(5);
BST_TEST.insert(12);
BST_TEST.insert(14);

BST_TEST.preOrder(BST_TEST.root);

export default BST;
export { BSTNode };
