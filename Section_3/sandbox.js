//// CONTROL FLOW ////

/// for loops ///

// for(let i = 0; i < 5; i++) {

// }

// const names = ["Shaun", "Mario", "Luigi"];

// for (let i = 0; i < names.length; i++) {
//   console.log(i);
// }

// const names = ["Shaun", "Mario", "Luigi"];

// for (let i = 0; i < names.length; i++) {
//   // console.log([i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

/// while loops ///

// const names = ["Shaun", "Mario", "Luigi"];
// let i = 0;

// while (i < 5) {
//   console.log("in loop: " + i);
//   i++;
// }

// let i = 0;
// while (i < names.length) {
//   console.log("in loop: " + names[i]);
//   i++;
// }

/// do while loops ///

// let i = 3;

// do {
//   console.log("val of i is: " + i);
//   i++;
// } while (i < 5);

/// if statements ///
// const age = 25;

// if (age > 20) {
//   console.log("You are over 20 years old.");
// }

// const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

// if (ninjas.length > 3) {
//   console.log("That's a lot of ninjas");
// }

// const password = "p@ssword";

// if (password.length >= 8) {
//   console.log("That password is long enough");
// }

/// else if statements ///

// const password = "p@ssword";

// if (password.length >= 12) {
//   console.log("That password is mighty strong!");
// } else if (password.length >= 8) {
//   console.log("That password is long enough");
// } else {
//   console.log("password is not long enough");
// }

/// logical operators - OR || and AND && ///

// const password = "p@ssword";

// if (password.length >= 12 && password.includes("@")) {
//   console.log("That password is mighty strong!");
// } else if (
//   password.length >= 8 ||
//   (password.includes("@") && password.length >= 5)
// ) {
//   console.log("That password is long or strong enough");
// } else {
//   console.log("password is not long enough");
// }

/// logical NOT (!) ///

// let user = false;

// if (!user) {
//   console.log("You must be logged to continue");
// }

// console.log(!true);
// console.log(!false);

/// break and continue ///

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }

//   console.log("Your score is: ", scores[i]);

//   if (scores[i] === 100) {
//     console.log("Congrats! You got the high score!");
//     break;
//   }
// }

/// Switch statemens ///
// const grade = "50";

// switch (grade) {
//   case 50:
//     console.log("You got an A!");
//     break;
//   case "b":
//     console.log("You got an B!");
//     break;
//   case "c":
//     console.log("You got an C!");
//     break;
//   case "D":
//     console.log("You got an D!");
//     break;
//   case "E":
//     console.log("You got an E!");
//     break;
//   default:
//     console.log("not a valid grade");
// }

/// Variables and Block Scope ///
// const age = 30;

// if (true) {
//   const age = 40;
//   const name = "Denis";
//   console.log("inside 1st code block: ", age, name);

//   if (true) {
//     const age = 50;
//     console.log("inside 2st code block: ", age);
//     let test = "hello";
//   }
// }

// console.log("outside of code block: ", age, name);
