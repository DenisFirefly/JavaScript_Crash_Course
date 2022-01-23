//// Modern Workflow with Babel & Webpack ////

/// NPM Scripts & watching Files ///

// const greet = (name) => {
//   console.log(`hello ${name}`);
// };

// greet("mario");
// greet("luigi");
// greet("denis");

// class User {
//   constructor() {
//     this.score = 0;
//   }
// }

/// Introduction to Modules ///
import { styleBody, addTitle, contact } from "./dom";
import users, { getPremUsers } from "./data";

const PremUsers = getPremUsers(users);
console.log(users, PremUsers);

console.log("test 23");

// console.log("index file");
// addTitle("test");
// styleBody();
// console.log(contact);
