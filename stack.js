/**
 * @class Stack
 * Although this is called Stack, it's really a queue, because we're using shift() instead of pop().
 * AKA, it's a FIFO queue.
 */
export default class Stack {
  data = [];

  get length() {
    return this.data.length;
  }

  empty() {
    return this.data.length === 0;
  }

  push(val) {
    this.data.push(val);
  }

  pop() {
    return this.data.shift();
  }

  peek() {
    return this.empty() ? null : this.data[0];
  }

  clear() {
    this.data = [];
  }

  accumulate(operator) {
    let acc = this.pop();
    while (!this.empty()) {
      acc = operator(acc, this.pop());
    }
    this.push(acc);
    return acc;
  }

}
