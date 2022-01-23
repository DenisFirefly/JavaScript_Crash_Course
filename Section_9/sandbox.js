//// Array Methods ////

/// Filter Method (not destructive) ///
// const scores = [10, 30, 15, 25, 50, 40, 5];

// // const filteredScores = scores.filter((score) => {
// //   return score > 20;
// // });

// // console.log(filteredScores);

// const users = [
//   { name: "Denis", premium: true },
//   { name: "Maria", premium: false },
//   { name: "Mario", premium: false },
//   { name: "Petka", premium: true },
// ];
// const premiumUsers = users.filter((user) => user.premium);

// console.log(premiumUsers);

/// Map Method (not destructive) ///
// const prices = [20, 10, 30, 15, 25, 80, 50, 40, 5];

// // const salePrices = prices.map((price) => price / 2);

// // console.log(salePrices);

// const products = [
//   { name: "gold star", price: 20 },
//   { name: "mushroom", price: 40 },
//   { name: "green shells", price: 30 },
//   { name: "banana skin", price: 10 },
// ];

// const saleProducts = products.map((product) => {
//   if (product.price > 30) {
//     return { name: product.name, price: product.price / 2 };
//   } else {
//     return product;
//   }
// });

// console.log(saleProducts);

/// Reduce Method ///
// // const scores = [20, 10, 30, 75, 95, 80, 50, 40, 5];

// // const results = scores.reduce((accumulator, current) => {
// //   if (current > 50) {
// //     accumulator++;
// //   }
// //   return accumulator;
// // }, 0);

// // console.log(results);

// const scores = [
//   { player: "Denis", score: 50 },
//   { player: "Maria", score: 30 },
//   { player: "Denis", score: 70 },
//   { player: "Petka", score: 60 },
//   { player: "Denis", score: 40 },
//   { player: "Maria", score: 30 },
//   { player: "Denis", score: 70 },
//   { player: "Petka", score: 60 },
//   { player: "Denis", score: 20 },
//   { player: "Maria", score: 30 },
//   { player: "Denis", score: 70 },
//   { player: "Petka", score: 60 },
//   { player: "Denis", score: 100 },
//   { player: "Maria", score: 30 },
//   { player: "Denis", score: 70 },
//   { player: "Petka", score: 60 },
//   { player: "Denis", score: 50 },
//   { player: "Maria", score: 30 },
//   { player: "Denis", score: 70 },
//   { player: "Petka", score: 60 },
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//   if (curr.player === "Denis") {
//     acc += curr.score;
//   }
//   return acc;
// }, 0);

// console.log(marioTotal);

/// Find Method (does not cycle, returns the first met value)///
// const scores = [20, 10, 30, 75, 95, 80, 50, 40, 5];

// const firstHighScore = scores.find((score) => score > 50);

// console.log(firstHighScore);

/// Sort Method (destructive - does not return new aray) ///

// // example 1 - sorting strings
// const names = ["mario", "denis", "maria", "yoshi", "luigi"];

// names.sort();
// names.reverse();
// console.log(names);

// // example 2 - sorting numbers
// const scores = [20, 10, 30, 75, 95, 80, 50, 40, 5];

// // scores.sort();
// // scores.reverse();

// scores.sort((a, b) => b - a);
// console.log(scores);
// scores.sort((a, b) => a - b);
// console.log(scores);

// // example 4 - sorting objects
// const players = [
//   { name: "Denis", score: 50 },
//   { name: "Maria", score: 30 },
//   { name: "Pavel", score: 70 },
//   { name: "Petka", score: 60 },
//   { name: "Mario", score: 40 },
//   { name: "Luigi", score: 20 },
// ];

// // -1 do not switch, a stays first; 1 switches; 0 no change is needed
// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(players);

// // the same as the old sort
// players.sort((a, b) => b.score - a.score);

/// Chaining Array Methods ///
// const products = [
//   { name: "gold star", price: 10 },
//   { name: "mushroom", price: 40 },
//   { name: "green shells", price: 5 },
//   { name: "banana skin", price: 50 },
//   { name: "patka", price: 69 },
// ];

// // const filtered = products.filter((product) => product.price > 20);

// // const promos = filtered.map((product) => {
// //   return `the ${product.name} is ${product.price / 2} pounds`;
// // });

// const promos = products
//   .filter((product) => product.price > 20)
//   .map((product) => `the ${product.name} is ${product.price / 2} pounds`);

// console.log(promos);
