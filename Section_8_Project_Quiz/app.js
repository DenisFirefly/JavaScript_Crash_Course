//// THE QUIZ PROJECT ////
const correctAnswers = ["A", "A", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  scrollTo(0, 0);
  // show results on page
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// window object (global object)

// console.log("hello");
// window.console.log("hello");

// console.log(document.querySelector("form"));
// console.log(window.document.querySelector("form"));

// alert("hello");
// window.alert("hello");

// setTimeout(() => {
//   alert("hello, everyone");
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//   console.log("hello");
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);
