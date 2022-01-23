//// More ES6 Features ////

/// Spread & Rest ///
// rest parameter
const double = (...nums) => {
  // do something
  console.log(nums);
  return nums.map((num) => num * 2);
};

const result = double(1, 3, 5, 6, 7, 9, 13, 55);
console.log(result);

// spread syntax (arrays), the opposite of rest
const people = ["denis", "ryu", "crystal"];
console.log(...people);
const members = ["mario", "maria", "luigi", ...people];
console.log(members);

// spread syntax (objects)
const person = { name: "denis", age: 26, job: "developer" };
const personClone = { ...person, location: "duisburg" };
console.log(personClone);

/// Sets ///
const namesArray = ["ryu", "chun-li", "ryu", "denis"];
console.log(namesArray);

// const namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames = [...namesSet];
// console.log(uniqueNames);

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(44);
ages.add(25);
ages.delete(44);
console.log(ages, ages.size);
console.log(ages.has(20), ages.has(44));
ages.clear();
console.log(ages);

const workers = new Set([
  { name: "shaun", age: 30 },
  { name: "crystal", age: 29 },
  { name: "chun-li", age: 32 },
]);

workers.forEach((worker) => {
  console.log(worker.name, worker.age);
});

/// Symbols (symbols are unique) ///
const symbolOne = Symbol("a generic name");
const symbolTwo = Symbol("a generic name");

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const superperson = {};
superperson.age = 500;
superperson["superpower"] = "super-strenght";
superperson["superpower"] = "invisibility";

superperson[symbolOne] = "Denis";
superperson[symbolTwo] = "Maria";

console.log(superperson);
