import { taskFirst, taskNext } from './0-constants.js';
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));

console.log(`${taskFirst()} ${taskNext()}`);