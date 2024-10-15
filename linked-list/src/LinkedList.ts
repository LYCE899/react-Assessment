export class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null = null;

  add(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print(): void {
    let current = this.head;
    const elements: T[] = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}
