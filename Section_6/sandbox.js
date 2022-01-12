//// THE DOCUMENT OBJECT MODEL (DOM) ////

/// the query selector ///

// const para = document.querySelector(".error");
// const divPara = document.querySelector("div.error");
// const browserSel = document.querySelector("body > h1");

// console.log(para);
// console.log(divPara);
// console.log(browserSel);

// const paras = document.querySelectorAll("p");
// const errors = document.querySelector(".error");

// paras.forEach((para) => {
//   console.log(para);
// });

// console.log(paras);
// console.log(paras[2]);

/// another query selector ///

// get an element by ID
// const title = document.getElementById("page-title");
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[2]);
// // errors.forEach((error) => {
// //   console.log(error);
// // });

// // get elements by their tag name
// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);

/// adding and changing page content ///
// const para = document.querySelector("p");

// // console.log(para.innerText);
// // para.innerText = "ninjas are awesome!";

// const paras = document.querySelectorAll("p");

// // paras.forEach((para) => {
// //   console.log(para.innerText);
// //   para.innerText += " new Text";
// // });

// const content = document.querySelector(".content");

// console.log(content.innerHTML);
// content.innerHTML += "<h2>this is a new h2</h2>";

// const people = ["mario", "luigi", "yoshi"];

// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

/// getting and setting attributes///
// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://google.com");
// link.innerText = "Google.com";

// const mssg = document.querySelector("p");

// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");
// mssg.setAttribute("style", "color: green");

/// changing CSS styles///
// const title = document.querySelector("h1");

// // title.setAttribute("style", "margin: 50px");

// console.log(title.style);
// console.log(title.style.color);
// //adding style
// title.style.margin = "50px";
// title.style.color = "crimson";
// title.style.fontSize = "60px";
// //removing style
// title.style.margin = "";

/// adding and removing Classes///
// // const content = document.querySelector("p");

// // console.log(content.classList);
// // content.classList.add("error");

// // content.classList.remove("error");
// // content.classList.add("success");

// // CHALLENGE
// // My sollution
// // const paras = document.querySelectorAll("section p");

// // paras.forEach((para) => {
// //   console.log(para.innerText);
// //   if (para.innerText.includes("error")) {
// //     //para.style.color = "crimson";
// //     para.classList.add("error");
// //   } else if (para.innerText.includes("success")) {
// //     //para.style.color = "green";
// //     para.classList.add("success");
// //   } else {
// //     para.innerText += " <--- not eddited text";
// //   }
// // });

// // console.log(paras);

// //Mr.Ninja's sollution
// // const paras = document.querySelectorAll("section p");

// // paras.forEach((p) => {
// //   console.log(p.textContent);
// //   if (p.textContent.includes("error")) {
// //     p.classList.add("error");
// //   }
// //   if (p.innerText.includes("success")) {
// //     p.classList.add("success");
// //   }
// // });

// // const title = document.querySelector(".title");

// // if doesn't have it adds it, if has it removes it
// title.classList.toggle("test");
// title.classList.toggle("test");

/// Parents, Children & Siblings///

// const article = document.querySelector("article");

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

// Array.from(article.children).forEach((child) => {
//   child.classList.add("article-element");
// });

// const title = document.querySelector("h2");

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// // chaining
// console.log(title.nextElementSibling.parentElement.children);

/// Event basics (click events)///
// // const button = document.querySelector("button");

// // button.addEventListener("click", () => {
// //   console.log("You clicked me");
// // });

// // const items = document.querySelectorAll("li");

// // items.forEach((item) => {
// //   item.addEventListener("click", (e) => {
// //     // console.log("Item clicked");
// //     // console.log(e);
// //     // console.log(e.target);
// //     e.target.style.textDecoration = "line-through";
// //   });
// // });

// // creating and removing elements and event bubbling (and delegation)
// const ul = document.querySelector("ul");
// // ul.remove();
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   // ul.innerHTML += `<li>something new</li>`;
//   const li = document.createElement("li");
//   li.textContent = "something new to do";
//   //adds it to the bottom
//   // ul.append(li);
//   //adds it to the top
//   ul.prepend(li);
// });

// // const items = document.querySelectorAll("li");

// // items.forEach((item) => {
// //   item.addEventListener("click", (e) => {
// //     console.log("event in LI");
// //     e.stopPropagation();
// //     e.target.remove();
// //   });
// // });

// ul.addEventListener("click", (e) => {
//   // console.log("event in UL");
//   console.log(e);
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }
// });

// const copy = document.querySelector(".copy-me");

// copy.addEventListener("copy", (e) => {
//   console.log("OI! My content is copyright!");
// });

// const box = document.querySelector(".box");

// box.addEventListener("mousemove", (e) => {
//   // console.log(e.offsetX, e.offsetY);
//   box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
// });

// document.addEventListener("wheel", (e) => {
//   console.log(e.pageX, e.pageY);
// });
