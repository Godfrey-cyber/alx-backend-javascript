import getResponseFromAPI from "./0-promise.js";
import getFullResponseFromAPI from './1-promise';
import handleProfileSignup from "./3-all";
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

handleProfileSignup();

const response = getResponseFromAPI();
console.log(response instanceof Promise);
