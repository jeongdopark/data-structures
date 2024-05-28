const BinarySearchTree = require("./BST");

describe("BinarySearchTree", () => {
  let tree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  test("should insert nodes correctly", () => {
    tree.insert(5);
    tree.insert(2);
    tree.insert(6);

    const root = tree.getRoot();
    expect(root.data).toBe(5);
    expect(root.left.data).toBe(2);
    expect(root.right.data).toBe(6);
  });

  test("should traverse pre-order correctly", () => {
    tree.insert(5);
    tree.insert(2);
    tree.insert(6);
    tree.insert(1);
    tree.insert(3);

    const result = tree.preOrder(tree.getRoot());
    expect(result).toEqual([5, 2, 1, 3, 6]);
  });
});
