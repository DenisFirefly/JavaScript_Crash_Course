//// Object Oriented JavaScript ////

/// Object Literal Recap ///
// const userOne = {
//   username: "denis",
//   email: "denis@gmail.com",
//   login() {
//     console.log("user logged in");
//   },
//   logout() {
//     console.log("user logged out");
//   },
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

// const userTwo = {
//   username: "mario",
//   email: "mario@gmail.com",
//   login() {
//     console.log("user logged in");
//   },
//   logout() {
//     console.log("user logged out");
//   },
// };

// console.log(userTwo.email, userTwo.username);
// userTwo.login();

// const userThree = new User("luigi@gmail.com", "luigi");

/// Class Constructors ///

// // the old way (under the hood, how it functions)
// // function User(username, email) {
// //   this.username = username;
// //   this.email = email;
// // }

// // // Prototypal method
// // User.prototype.login = function () {
// //   console.log(`${this.username} has logged in`);
// //   return this;
// // };
// // User.prototype.logout = function () {
// //   console.log(`${this.username} has logged out`);
// //   return this;
// // };

// // function Admin(username, email, title) {
// //   // Prototypal Inheritance
// //   User.call(this, username, email);
// //   this.title = title;
// // }
// // // Prototypal Inheritance
// // Admin.prototype = Object.create(User.prototype);
// // Admin.prototype.deleteUser = function() {
// //   users = users.filter((u) => u.username !== user.username);
// // }

// // the new way
// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   // class methods
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore() {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// // clas inheritance
// class Admin extends User {
//   constructor(username, email, title) {
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter((u) => u.username !== user.username);
//   }
// }

// const userOne = new User("mario", "mario@gmail.com");
// const userTwo = new User("luigi", "luigi@gmail.com");
// const userThree = new Admin("denis", "denis@gmail.com", "super-admin");

// console.log(userOne, userTwo, userThree);
// // class method chaining
// userOne.login().incScore().incScore().logout();

// // the "new" keyword
// // 1 - it creates a new empty object {}
// // 2 - it binds the value of "this" to the new empty object
// // 3 - it calls the constructor function to "build" the object

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);
