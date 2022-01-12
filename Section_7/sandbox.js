//// FORMS & FORM EVENTS ////

/// Submit events ///
// const form = document.querySelector(".signup-form");
// // # for id hoockups
// //const username = document.querySelector("#username");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //console.log(username.value);
//   console.log(form.username.value);
// });

/// Regular Expressions (RegEx) ///
// const form = document.querySelector(".signup-form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(form.username.value);
// });

// //testing RegEx
// const username = "deniser";
// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(username);
// // console.log(result);

// // if (result) {
// //   console.log("regex test passed");
// // } else {
// //   console.log("regex test failed");
// // }

// let result = username.search(pattern);
// console.log(result);

/// Basic Form Validation ///
// const form = document.querySelector(".signup-form");
// const feedback = document.querySelector(".feedback");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Validation
//   const username = form.username.value;
//   const usernamePattern = /^[a-zA-Z]{6,12}$/;

//   if (usernamePattern.test(username)) {
//     // feedback good info
//     feedback.textContent = "that username us valid!";
//   } else {
//     // feedback help info
//     feedback.textContent =
//       "username must contain letters only & be between 6 & 12 characters long";
//   }
// });

/// Keyboard Events ///
// const form = document.querySelector(".signup-form");
// const feedback = document.querySelector(".feedback");
// const usernamePattern = /^[a-zA-Z]{6,12}$/;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Validation
//   const username = form.username.value;

//   if (usernamePattern.test(username)) {
//     // feedback good info
//     feedback.textContent = "that username us valid!";
//   } else {
//     // feedback help info
//     feedback.textContent =
//       "username must contain letters only & be between 6 & 12 characters long";
//   }
// });

// // live feedback
// form.username.addEventListener("keyup", (e) => {
//   console.log(e);
//   //console.log(e.target.value, form.username.value);
//   if (usernamePattern.test(e.target.value)) {
//     console.log("passed");
//     form.username.setAttribute("class", "success");
//   } else {
//     console.log("failed");
//     form.username.setAttribute("class", "error");
//   }
// });
