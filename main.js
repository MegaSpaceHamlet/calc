/**
 * A REPL that takes math operations as words, e.g. 'add', 'subtract', 'divide', 'multiply',
 * and then a series of numbers, either on multiple lines, or same line delimited by spaces.
 * Only one value or expression is allowed per line.
 * 
 * The result is only shown when the user enters '=' or 'done'. The user can also enter 'clear' to
 * clear the current stack.
 * 
 * The user can also enter 'stack' to see the current stack.
 * 
 * 'operator' will return the current operator.
 * 
 * 
 * Upon entering '=' or 'done' (the accumulator operator), the stack is cleared and the result is returned and pushed onto the stack.
 * 
 * The user can also enter 'help' to see a list of commands.
 * 
 */
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import evaluate from './eval.js';
const rl = readline.createInterface({ input, output });

(async function loop() {
  const line = (await rl.question('> ')).trim();
  const val = evaluate(line);
  if (val) {
    console.log(val);
  }
  loop();
}
)();

