//// OBJECT LITERALS ////

/// object literals ///

// let user = {
//   name: "Cristal",
//   age: 30,
//   email: "cristal@email.com",
//   location: "Berlin",
//   blogs: ["Why mac & cheese rules", "10 things to make with marinate"],
// };

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// const key = "location";
// console.log(user[key]);

// console.log(user["email"]);
// user["name"] = "Denis";
// console.log(user["name"]);

// console.log(typeof user);

/// object literals with methods ///

// const blogs = [
//   { title: "Why mac & cheese rules", likes: 30 },
//   { title: "10 things to make with marinate", likes: 50 },
// ];

// console.log(blogs);

// let user = {
//   name: "Cristal",
//   age: 30,
//   email: "cristal@email.com",
//   location: "Berlin",
//   blogs: [
//     { title: "Why mac & cheese rules", likes: 30 },
//     { title: "10 things to make with marinate", likes: 50 },
//   ],
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("user logged out");
//   },
//   logBlogs() {
//     // console.log(this.blogs);
//     console.log("This user has written the following blogs:");
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// user.login();
// user.logout();
// user.logBlogs();

// const name = "Denis";
// name.toUpperCase();
// // console.log(this);

/// Math Object ///

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 5.3;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

/// Primitive vs Reference types ///

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `score Two: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `score Two: ${scoreTwo}`);

// // reference values

// const userOne = { name: "Denis", age: 25 };
// const userTwo = userOne;
// console.log(userOne, userTwo);

// userOne.name = "Maria";
// userOne.age = 30;

// console.log(userOne, userTwo);
