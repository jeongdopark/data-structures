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
    this.tail = null;
    this.count = 0; // count를 초기화합니다.
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
      this.tail!.next = new_node;
      this.tail = new_node;
    }
    this.count += 1;
  }

  delete() {
    if (this.head === null) return "no element";
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current_node = this.head;
      // current_node가 null이 아닌지 확인
      if (current_node !== null) {
        while (current_node.next !== this.tail) {
          if (current_node.next === null) break; // next가 null인지 확인
          current_node = current_node.next;
        }
        current_node.next = null;
        this.tail = current_node;
      }
    }
    this.count -= 1;
  }

  insertAt(index: number, data: number) {
    if (index > this.count || index < 0) return "범위를 넘었습니다.";
    const new_node = new ElementNode(data);
    if (index === 0) {
      new_node.next = this.head;
      this.head = new_node;
      if (this.count === 0) {
        // 처음 삽입하는 경우 tail도 설정합니다.
        this.tail = new_node;
      }
    } else {
      let current_node = this.head;
      for (let i = 0; i < index - 1; i++) {
        current_node = current_node!.next;
      }
      new_node.next = current_node!.next;
      current_node!.next = new_node;
      if (new_node.next === null) {
        this.tail = new_node;
      }
    }
    this.count += 1;
  }

  deleteAt(index: number) {
    if (index < 0 || index >= this.count) {
      console.log("범위를 넘었습니다.");
      return null;
    }
    let delete_node: ElementNode | null = null;
    if (index === 0) {
      delete_node = this.head;
      this.head = this.head!.next;
      if (this.count === 1) {
        this.tail = null;
      }
    } else {
      let current_node = this.head;
      for (let i = 0; i < index - 1; i++) {
        current_node = current_node!.next;
      }
      delete_node = current_node!.next;
      current_node!.next = delete_node!.next;
      if (delete_node === this.tail) {
        this.tail = current_node;
      }
    }
    this.count -= 1;
    return delete_node;
  }
}
