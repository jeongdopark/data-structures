class ElementNode {
  data: number;
  next: ElementNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: ElementNode | null;
  tail: ElementNode | null;
  count: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  clear() {
    this.head = null;
  }

  length() {
    return this.count;
  }

  printAll() {
    let print_str = "";
    let current_node = this.head;
    while (current_node !== null) {
      print_str += `${" " + current_node.data}`;
      current_node = current_node.next;
    }
    return print_str;
  }

  insert(data: number) {
    const new_node = new ElementNode(data);
    if (this.head === null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      const tail_node = this.tail;
      tail_node!.next = new_node;
      this.tail = new_node;
    }
    this.count += 1;
  }

  delete() {
    let current_node = this.head;
    let _count = 1;
    if (current_node === null) return "no element";
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
      this.count -= 1;
      return;
    }
    while (_count <= this.count) {
      if (_count + 1 === this.count) {
        current_node!.next = null;
        this.tail = current_node;
        this.count -= 1;

        return;
      }
      current_node = current_node!.next;
      _count += 1;
    }
  }
  insertAt(index: number, data: number) {
    if (index > this.count || index < 0) return "범위를 넘었습니다.";
    const new_node = new ElementNode(data);
    if (index === 0) {
      new_node.next = this.head;
      this.head = new_node;
      this.count += 1;
    } else {
      let current_node = this.head;
      let count = 0;
      while (true) {
        if (count + 1 === index) {
          new_node.next = current_node!.next;
          current_node!.next = new_node;
          this.count += 1;
          return;
        }
        count += 1;
        current_node = current_node!.next;
      }
    }
  }

  deleteAt(index: number) {
    if (index < 0 || this.count < index) return console.log("범위를 넘었습니다.");
    if (index === 0) {
      const delete_node = this.head;
      this.head = this.head!.next;
      this.count -= 1;
      return delete_node;
    }
    let current_node = this.head;
    for (let i = 0; i < index - 1; i++) {
      current_node = current_node!.next;
    }
    const delete_node = current_node!.next;
    current_node!.next = delete_node!.next;
    this.count -= 1;
    return delete_node;
  }
}

const linked_list = new LinkedList();
linked_list.insert(1);
linked_list.insert(2);
linked_list.insert(3);
linked_list.insert(4);
console.log(linked_list.length());
linked_list.delete();
linked_list.delete();
linked_list.insert(4);
console.log(linked_list.insertAt(2, 5));
console.log(linked_list.deleteAt(2));
console.log(linked_list.length());
console.log(linked_list);
console.log(linked_list.printAll());
