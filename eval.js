import Stack from './stack.js';

const stack = new Stack();
let operator = null;
let operatorName = '';

export default function evaluate(line) {
  const num = Number(line);
  if (isNaN(num)) {
    switch (line) {
      case 'add':
        return addOp((a, b) => a + b);
      case 'subtract':
        return addOp((a, b) => a - b);
      case 'divide':
        return addOp((a, b) => a / b);
      case 'multiply':
        return addOp((a, b) => a * b);
      case 'stack':
        return stack.data;
      case 'clear':
        stack.clear();
        return 'ok';
      case 'operator':
        return operatorName;
      case '=':
        if (operator) {
          return accumulateAndPeek();
        } else {
          return 'Please choose an operator first';
        }
      case 'help':
        return 'add, subtract, divide, multiply, stack, clear, operator, =, done, help';
      case 'exit':
        process.exit(0);
      default:
        return `Unknown operator -- ${line}`;
    }
  } else {
    stack.push(num);
  }

  function accumulateAndPeek() {
    stack.accumulate(operator);
    return stack.peek();
  }

  function addOp(op) {
    if (!stack.empty() && stack.length > 1) {
      if (operator) {
        return accumulateAndPeek();
      }
    }
    operator = op;
    operatorName = line;
    return 'ok';
  }
}
