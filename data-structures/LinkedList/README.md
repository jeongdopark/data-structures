# Linked List

특징

- 특정 위치에서 요소를 삽입하거나 삭제하는 작업이 배열보다 효율적입니다.
  배열에서는 중간에 요소를 삽입하거나 삭제할 때 나머지 요소를 이동시켜야 하지만, Linked List는 포인터만 변경하면 됩니다.

### Linked List

<img width="590" alt="CleanShot 2024-05-27 at 16 47 49@2x" src="https://github.com/jeongdopark/data-structures/assets/72500346/5d1f348f-e261-4cf7-b4b2-0527e3eff108">

### 삭제 시

<img width="655" alt="CleanShot 2024-05-27 at 16 48 13@2x" src="https://github.com/jeongdopark/data-structures/assets/72500346/11e0f986-be63-491e-8421-9076d3086bca">

### 삽입 시

<img width="642" alt="CleanShot 2024-05-27 at 16 48 02@2x" src="https://github.com/jeongdopark/data-structures/assets/72500346/5e29cbf8-23a7-413f-9642-33efcc23fa61">

## Linked List 요소 노드

```js
class ElementNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

## LinkedList

### constructor

```ts
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
```

### clear

- Linked List 초기화

```ts
  clear() {
    this.head = null;
  }
```

### length

- Linked List 요소 개수 반환

```js
  length() {
    return this.count;
  }

```

### printAll

- Linked List 모든 요소의 data 출력

```js

  printAll() {
    let print_str = "";
    let current_node = this.head;
    while (current_node !== null) {
      print_str += `${" " + current_node.data}`;
      current_node = current_node.next;
    }
    return print_str;
  }

```

### insert

- Linked List 마지막에 노드 추가

```ts
  insert(data) {
    const new_node = new ElementNode(data);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      const tail_node = this.tail;
      tail_node.next = new_node;
      this.tail = new_node;
    }
    this.count += 1;
  }

```

### delete

- Linked List 마지막 노드 제거

```ts
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
        current_node.next = null;
        this.tail = current_node;
        this.count -= 1;

        return;
      }
      current_node = current_node.next;
      _count += 1;
    }
  }
```

### insertAt(index, data)

- index에 노드 삽입

```js
  insertAt(index, data) {
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
          new_node.next = current_node.next;
          current_node.next = new_node;
          this.count += 1;
          return;
        }
        count += 1;
        current_node = current_node.next;
      }
    }
  }
```

### deleteAt(index, data)

- index에 해당하는 노드 제거

```js
  deleteAt(index) {
    if (index < 0 || this.count < index) return console.log("범위를 넘었습니다.");
    if (index === 0) {
      const delete_node = this.head;
      this.head = this.head.next;
      this.count -= 1;
      return delete_node;
    }
    let current_node = this.head;
    for (let i = 0; i < index - 1; i++) {
      current_node = current_node.next;
    }
    const delete_node = current_node.next;
    current_node.next = delete_node.next;
    this.count -= 1;
    return delete_node;
  }

```
