import getBudgetObject from './7-getBudgetObject.js';
import { taskFirst, taskNext } from './0-constants.js';
import getSanFranciscoDescription from './6-string-interpolation.js';
import concatArrays from './5-spread-operator.js';
import returnHowManyArguments from './4-rest-parameter.js';
import getSumOfHoods from './3-default-parameter.js';
import getNeighborhoodsList from './2-arrow.js';
import taskBlock from './1-block-scoped.js';


console.log(`${taskFirst()} ${taskNext()}`);

console.log(getBudgetObject(400, 700, 900));

console.log(getSanFranciscoDescription());

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);

console.log(taskBlock(true));
console.log(taskBlock(false));