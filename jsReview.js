// Strict mode, forbids to do bad things and shows errors in the console
"use strict";

// Ternary Operator, write if statement in one line
// ? do
// : else
const age = 23;

age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// Functions, we need to use it multiple times

function logger() {
  console.log("My name is Jonas");
}

logger(); //Calling, running, invoking function

// example
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

// Arrow functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991));

// Arrays

const friends = ["Michael", "Steven", "Peter"];
const years = new Array(1991, 1994, 2008, 2020);
console.log(friends.length);
friends[2] = "Jay";

// array methods
friends.push("Jayden"); // adding elem at the end
friends.unshift("John"); // adding elem at the begi
friends.pop(); // remove last elem, returns elem
friends.shift(); // remove first elem, returns
friends.indexOf("Steven"); // index of element
friends.includes("Steven"); // returns boolean

// Object

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  }, // object methods
};

// adding values to object
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";

// For Loop

for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetition");
}

// While Loop

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
