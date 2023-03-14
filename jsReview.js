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

// JavaScript behind the scenes
// JavaScript is a Just-in-time (JIT) compilation: Entire code is converted into machine code at once then executed immediately

/* Execution Context
- Variable Environment
- Scope chain
- this keyword
*/

/*
Scope chain
- Scoping asks the question "Where do variables live?" or "Where can we acceess certain variables or where not"
- There are 3 types of scope y JS: the global scope, scopes defined by functions and scopes defined by blocks;
- Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope;
- In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code function and blocks are written
- Every scope always has access to all the variables from all its outer scopes. This is the scope chain
- When a variable is no the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. The is called variable lookup
- The scope chain is a one-way street: a scope will never, have access to the variables of a inner scope
- The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all
*/

/*
Variable Environment
- Hoisting makes some types of variables accessible/usable in the code before they are actually declared
- Why TDZ? Makes it easier to avoid and catch errors: accesing variables declaration is bad practice and should be avoided
- function declarations: hoisted:yes, initial value:actual funnction, scope: block
- var variables: hoisted:yes, initial value:undefined, scope:block
- let and const variables: hoisted:no, initial value: <uninitialized>, TDZ, scope:block
- function expressions and arrows: Depends if using var or let/const --> same behavior as variables
*/
