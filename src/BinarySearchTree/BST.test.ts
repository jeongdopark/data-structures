import BST, { BSTNode } from "./BST";

describe("BinarySearchTree", () => {
  let tree: BST;

  beforeEach(() => {
    tree = new BST();
  });

  test("should insert nodes correctly", () => {
    tree.insert(10);
    tree.insert(8);
    tree.insert(5);
    tree.insert(12);
    tree.insert(14);

    const root = tree.root;
    expect(root?.data).toBe(10);
    expect(root?.left?.data).toBe(8);
    expect(root?.left?.left?.data).toBe(5);
    expect(root?.right?.data).toBe(12);
    expect(root?.right?.right?.data).toBe(14);
  });

  test("should perform pre-order traversal correctly", () => {
    tree.insert(10);
    tree.insert(8);
    tree.insert(5);
    tree.insert(12);
    tree.insert(14);

    const result = tree.preOrder(tree.root);
    expect(result).toEqual([10, 8, 5, 12, 14]);
  });

  test("should perform in-order traversal correctly", () => {
    tree.insert(10);
    tree.insert(8);
    tree.insert(5);
    tree.insert(12);
    tree.insert(14);

    const result = tree.inOrder(tree.root);
    expect(result).toEqual([5, 8, 10, 12, 14]);
  });

  test("should perform post-order traversal correctly", () => {
    tree.insert(10);
    tree.insert(8);
    tree.insert(5);
    tree.insert(12);
    tree.insert(14);

    const result = tree.postOrder(tree.root);
    expect(result).toEqual([5, 8, 14, 12, 10]);
  });
});
