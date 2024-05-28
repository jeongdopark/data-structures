import BST from "./BST";

describe("BinarySearchTree", () => {
  let tree: BST;

  beforeEach(() => {
    tree = new BST();
  });

  test("insert", () => {
    tree.insert(50);
    tree.insert(35);
    tree.insert(55);
    tree.insert(30);
    tree.insert(40);
    tree.insert(52);
    tree.insert(60);
    tree.insert(15);
    tree.insert(34);
    tree.insert(38);
    tree.insert(51);
    tree.insert(53);

    const root = tree.root;
    expect(root?.data).toBe(50);
    expect(root?.left?.data).toBe(35);
    expect(root?.left?.left?.data).toBe(30);
    expect(root?.right?.data).toBe(55);
    expect(root?.right?.right?.data).toBe(60);
  });

  test("insert & preOrder", () => {
    tree.insert(50);
    tree.insert(35);
    tree.insert(55);
    tree.insert(30);
    tree.insert(40);
    tree.insert(52);
    tree.insert(60);
    tree.insert(15);
    tree.insert(34);
    tree.insert(38);
    tree.insert(51);
    tree.insert(53);

    const result = tree.preOrder(tree.root);
    expect(result).toEqual([50, 35, 30, 15, 34, 40, 38, 55, 52, 51, 53, 60]);
  });

  test("insert & inOrder", () => {
    tree.insert(50);
    tree.insert(35);
    tree.insert(55);
    tree.insert(30);
    tree.insert(40);
    tree.insert(52);
    tree.insert(60);
    tree.insert(15);
    tree.insert(34);
    tree.insert(38);
    tree.insert(51);
    tree.insert(53);

    const result = tree.inOrder(tree.root);
    expect(result).toEqual([15, 30, 34, 35, 38, 40, 50, 51, 52, 53, 55, 60]);
  });

  test("insert & postOrder", () => {
    tree.insert(50);
    tree.insert(35);
    tree.insert(55);
    tree.insert(30);
    tree.insert(40);
    tree.insert(52);
    tree.insert(60);
    tree.insert(15);
    tree.insert(34);
    tree.insert(38);
    tree.insert(51);
    tree.insert(53);

    const result = tree.postOrder(tree.root);
    expect(result).toEqual([15, 34, 30, 38, 40, 35, 51, 53, 52, 60, 55, 50]);
  });

  test("insert & delete & inOrder", () => {
    tree.insert(50);
    tree.insert(35);
    tree.insert(55);
    tree.insert(30);
    tree.insert(40);
    tree.insert(52);
    tree.insert(60);
    tree.insert(15);
    tree.insert(34);
    tree.insert(38);
    tree.insert(51);
    tree.insert(53);

    tree.delete(55);
    let result = tree.inOrder(tree.root);
    expect(result).toEqual([15, 30, 34, 35, 38, 40, 50, 51, 52, 53, 60]);

    tree.delete(50);
    result = tree.inOrder(tree.root);
    expect(result).toEqual([15, 30, 34, 35, 38, 40, 51, 52, 53, 60]);

    tree.delete(15);
    result = tree.inOrder(tree.root);
    expect(result).toEqual([30, 34, 35, 38, 40, 51, 52, 53, 60]);

    tree.delete(53);
    result = tree.inOrder(tree.root);
    expect(result).toEqual([30, 34, 35, 38, 40, 51, 52, 60]);
  });
});
