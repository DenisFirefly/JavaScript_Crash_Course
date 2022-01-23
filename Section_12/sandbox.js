//// Async JavaScript ////

/// async code in action ///
// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("callback function fired");
// }, 2000);

// console.log(3);
// console.log(4);

/// HTTP Requests ///
// const getTodos = (resource, callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     // console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       // console.log(request, request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       // console.log("could not fetch the data");
//       callback("could not fetchd data", undefined);
//     }
//   });
//   request.open("GET", resource);
//   request.send();
// };

// console.log(1);
// console.log(2);

// getTodos("todos/luigi.json", (err, data) => {
//   console.log("callback fired");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     getTodos("todos/mario.json", (err, data) => {
//       console.log("callback fired");
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//         getTodos("todos/denis.json", (err, data) => {
//           console.log("callback fired");
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

// console.log(3);
// console.log(4);

/// Promise basics and chaining ///
// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       // console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         // console.log(request, request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         // console.log("could not fetch the data");
//         reject("error getting resource");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos/luigi.json")
//   .then((data) => {
//     console.log("promise resolved: ", data);
//     return getTodos("todos/mario.json");
//   })
//   .then((data) => {
//     console.log("promise 2 resolved:", data);
//     return getTodos("todos/deniss.json");
//   })
//   .then((data) => {
//     console.log("promise 3 resolved:", data);
//   })
//   .catch((err) => {
//     console.log("promise rejected: ", err);
//   });

// promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve("some data");
//     // reject("some error");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/// The fetch API ///

// fetch("todos/luigi.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

/// Async & wait ///

// const getTodos = async () => {
//   const response = await fetch("todos/luigi.json");
//   const data = await response.json();

//   return data;
// };

// console.log(1);
// console.log(2);
// getTodos().then((data) => console.log("resolved", data));

// console.log(3);
// console.log(4);

/// throwing a& catching errors ///

// const getTodos = async () => {
//   const response = await fetch("todos/luigi.json");

//   if (response.status !== 200) {
//     throw new Error("cannot fetch the data");
//   }

//   const data = await response.json();

//   return data;
// };

// console.log(1);
// console.log(2);
// getTodos()
//   .then((data) => console.log("resolved:", data))
//   .catch((err) => console.log("rejected:", err.message));

// console.log(3);
// console.log(4);
