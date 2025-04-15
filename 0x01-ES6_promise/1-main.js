import getResponseFromAPI from "./0-promise.js";
import getFullResponseFromAPI from './1-promise';

const response = getResponseFromAPI();
console.log(response instanceof Promise);
