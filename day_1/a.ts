const fs = require("fs");

class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

// Example usage
// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.pop()); // Output: 3
// console.log(stack.peek()); // Output: 2
// console.log(stack.size()); // Output: 2
// console.log(stack.isEmpty()); // Output: false

// stack.clear();
// console.log(stack.isEmpty()); // Output: true

fs.readFile("input.txt", "utf-8", (err: any, data: any) => {
  if (err) {
    console.error(err);
    return;
  }
  const input = data;
  solutio(input);
});

function solutio(data: string) {
  const input = data.split("");
  const up = new Stack<string>();
  const down = new Stack<string>();
  var count = 0;
  input.map((x) => {
    if (x === "(") {
      up.push(x);
    } else if (x === ")") {
      down.push(x);
    }
  });
  console.log(up.size() - down.size());
}
