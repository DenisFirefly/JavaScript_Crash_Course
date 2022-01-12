//// FUNCTIONS & METHODS ////

// /// function expression ///
// const speak = function () {
//   console.log("Good day");
// };

// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

// /// function expression ///
// function greet() {
//   console.log("Hello there");
// }

/// arguments & parameters ///

// const speak = function (name = "Luigi", time = "night") {
//   console.log(`Good ${time} ${name}`);
// };

// // console.log(name);

// // speak("mario", "morning");
// speak("Denis");

/// returning values ///

// const calcArea = function(radius) {
//   return 3.14 * radius * 2;
// };

// const a = calcArea(5);
// console.log(a);

// const calcVol = Function(area) {

// };

// calcVol();

/// arrow function ///

// // one parameter - without () ; one return - without word return and {}
// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log("area is: ", area);

// // practise arrow function

// const greet = () => "hello world";

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));

/// functions vs methods ///
// const name = "denis";

// // functions

// const greet = () => "hello";

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

/// callbacks & foreach ///

// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(value => {
//   // do something
//   console.log(value);
// });

// let people = ["mario", "denis", "ryu", "shaun", "chun-li"];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

/// get a reference to the "ul" ///
// const ul = document.querySelector(" .people");

// const people = ["mario", "denis", "ryu", "shaun", "chun-li"];

// let html = ``;

// people.forEach((person) => {
//   //create html template
//   html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;
