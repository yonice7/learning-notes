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
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup
- The scope chain is a one-way street: a scope will never, have access to the variables of a inner scope
- The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all
*/

/*
Variable Environment
- Hoisting makes some types of variables accessible/usable in the code before they are actually declared
- Why TDZ? Makes it easier to avoid and catch errors: accesing variables declaration is bad practice and should be avoided
- function declarations: hoisted:yes, initial value:actual function, scope: block
- var variables: hoisted:yes, initial value:undefined, scope:block
- let and const variables: hoisted:no, initial value: <uninitialized>, TDZ, scope:block
- function expressions and arrows: Depends if using var or let/const --> same behavior as variables
*/

/* 
The this keyword

- Takes the value of (points to) the "owner" of the function in which the this keyword is used
- this is not static. It depends on how the function is called, and its value is only assigned when the function is actually called
- Method --> this = <Object that is calling the method>
- Simple functional call --> this = undefined --> In strict mode! Otherwise: window (in the browser)
- Arrow functions --> this = <this of surrounding function (lexical this)>
- Event listener --> this = <DOM element that the handler is attached to>
*/

/* 
Primitives vs Objects

- Primitives: Number, String, Boolean, Undefined, Null, Symbol, BigInt
- Stored in the Call Stack
- A value in certain address (in memory) is immutable
- When the value of a variable is changed a new address in memory is assigned to it

- Objects: Object literal, Arrrays, Functions, Many more...
- Stored in the Heap
- A new variable gets an address (in memory) assigned and its value is an address from the heap (reference)
- When a value changes in an object it changes not in the call stack but in the heap
- When creating a new object out of another one, we're pointing to the same address in the heap
*/
// Right way to copy objects
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

// Object.assign({}, <variable>) creates a shallow copy
// we'll learn later in the course how to create a deep clone
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = "Davis";

console.log("Before marriage: ", jessica);
console.log("After marriage: ", jessicaCopy);

// Array Destructuring

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian, Pizzeria, Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // opens 24 hours
      close: 24,
    },
  },
  orderDelivery: function (obj) {},
};

const [x, y, z] = restaurant.mainMenu;
const [main, , secondary] = restaurant.categories;
[main, secondary] = [secondary, main]; // reassigning values (switching)

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);

// Destructuring nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested; // this will return separate variables

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];

// Object Destructuring

const { name, openingHours, categories } = restaurant;
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; // assigning a different name to the variables
const { menu = [], starterMenu: starters = [] } = restaurant; // default values
const {
  fri: { open, close },
} = openingHours; // nested values

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // override the initial (let) variables

// The spread operator ...

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
const newArr = [1, 2, ...arr];
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
const jonasName = "Jonas";
const letters = [...jonasName, " ", "S."];

// Rest pattern and parameters

const [ar, br, ...others] = [1, 2, 3, 4, 5];

// objects
const { sat, ...weekdays } = restaurant.openingHours;

// used in a function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
};

add(...xAdd);

// Short circuiting (&& and ||)

// Use ANY data type, return ANY data type, short-circuiting
// Returns the first truthy value
console.log(3 || "Johnny");
console.log("" || "Johnny"); // "" it's a falsy value
console.log(true || 0); // true value
console.log(undefined || null); // undefined is a falsy value
console.log(undefined || 0 || "" || "Hello" || 23 || null); // "Hello is the fist truthy value"

// restaurant.numGuests = 23 -- won't work if the value is 0 because it's false
const guests2 = restaurant.numGuests || 10; // if restaurant.numGuests is undefined it'll return 10 i.e setting default values

// AND
// Returns the first falsy value
console.log("Hello" && 23 && null && "jonas"); // returns null because "null" it's false

// Nullish operator = null and undefined -- doesn't include the 0 (0 or "")
let restaurantGuests = 0;
const guestCorrect = restaurantGuests ?? 10; // it'll return 0

// Logical assignment operators

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
rest1.numGuests = rest1.numGuests || 10; // returns numbers of guest because it's already assigned
rest2.numGuests = rest2.numGuests || 10; // returns 10 because it has not guest n# assigned

// exactly the same as the previous two lines
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
// what if the assigned number is a 0, instead of using || we use the nullish operator ??
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// if the first value is true, return the second one, short-circuting
rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner = rest1.owner && "<ANONYMOUS>"; // it'll return undefined because the 1st value is falsy

// Iterating over arrays, for-of loop

const menu3 = [...restaurant.starterMenu];
for (const item of menu3) console.log(item); // will loop over the entire array and each iteration will perform the command

for (const item of menu3.entries()); // the method .entries() is an array iterator that returns the index of each element
for (const item of menu3.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`); // another way to do it: >>const [i, el] of menu3.entries() >>`${i + 1} : ${el}`
}

// Enhancing Object Literals (ES6)
// inside object just call another object

const openingHours2 = {
  thu: {
    open: 0,
    close: 23,
  },
  fri: {
    open: 0,
    close: 23,
  },
};

const restaurantExample = {
  mainMenu: ["Fried Chicken", "Hamburguer", "Empanadas"],
  starterMenu: ["Gyozas", "Tenders", "Fries"],
  openingHours2, // you just need to call the variable
  // (methods) instead of >> function order(starterIndex, mainIndex)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// optional chaining
if (restaurantExample.openingHours2 && restaurantExample.openingHours2.mon)
  console.log(restaurantExample.openingHours2.mon.open); // checks if they exist because if the wouldn't it returns an error
// optional chaining, better way
console.log(restaurantExample.openingHours2.mon?.open); // if restaurantExample.openingHours2.mon it's false, it'll return undefined instead of an error
console.log(restaurantExample.openingHours2?.mon?.open); // if restaurantExample.openingHours2 it's false, it'll return undefined instead of an error

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  restaurantExample.openingHours2[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
// arrays
const users = [{ name: "Johnny", email: "johnny@email.gg" }];
console.log(users[0]?.name ?? "User array empty");

// looping over objects, it's actually looping over an array, Object.keys creates an array
for (const day of Object.keys(openingHours2)) {
  console.log(day);
}
// property values
const values = Object.values(openingHours);
console.log(values);
// entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Sets

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet); // it'll return only ["Pasta", "Pizza", "Risotto"]

// Sets methods
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

// iterate over a set
for (const order of ordersSet) console.log(order);

// creating an array out of a set
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);
// turning a set into an array
const arrayFromSet = [...staffUnique];

// Maps

/*
Difference between Maps and Objects
En resumen, los Map proporcionan más flexibilidad en cuanto a los tipos de claves y mantienen el orden de inserción, mientras que los objetos son más simples y se utilizan comúnmente para casos simples de clave-valor. La elección entre ambos depende de los requisitos específicos de tu aplicación. (ChatGPT)
*/

const rest = new Map();
rest.set("name", "Classico Italiano"); // Add elements to the map
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon,Portugal");
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
// console.log(rest.get("true")); // This will return undefined, bc the key is actually a boolean
// console.log(rest.get("1")); // This will return undefined, bc the key is actually a boolean
const time = 21; // this is suppose to be the "current time", we'll learn how to really get it later in the course
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("categories")); // search if the map contains certain key, returns a boolean ==> true or false
rest.delete(2); // delete the key
console.log(rest.size); // returns the items
// console.log(rest.clear); // removes all elements in the map;

// Another way to create maps
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, ["Try again!"]],
]); // this structure is very similar to an object one
console.log(question);

// converting an object to a map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Map iteration
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// convert a map to an array
console.log(...question);
// other Map methods
console.log(question.entries());
console.log([...question.keys()]); // w/out the dots it returns a MapIterator
console.log([...question.values()]); // w/out the dots it returns a MapIterator

// Data structures overview

// Sources of data
/*
1. From the program itself: Data written directly in source code (e.g. status messages)
2. From the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
3. From external sources: Data fetched for example from web API (e.g. recipe objects) .json files

--> Collection of data
- Data structure 
  - Array or Sets (simple list?)
  - Object or Maps (key/value pairs?) --> keys allow us to describe values

Other data structures in javascript are:
- Built-In
  - WeakMap
  - WeakSet
- Non-built in
  - Stacks
  - Queues
  - Linked lists
  - Trees
  - Hash tables
  
Arrays vs Sets
- Arrays
  - Use when you need ordered list of values (might contain duplicates)
  - Use when you need to manipulate data
- Sets
  - Use when you need to work with unique values
  - Use when high-performance is really important
  - Use to remove duplicates from arrays

Objects vs Maps
- Objects
  - More "traditional" key/value store ("abused" objects)
  - Easier to write and access with . and []
  - Use when you need to include functions (methods)
  - Use when working with JSON (can convert to map)
- Maps
  - Better performance
  - Keys can have any data type
  - Easy to iterate
  - Easy to compute
  - Use when you simply need to map key to values
  - Use when you need keys that are not strings
*/

// Strings

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // getting the characters by position
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);
console.log(airline.length); // getting the len of the string
console.log("B737".length);
console.log(airline.indexOf("r")); // position in the string, first ocurrence
console.log(airline.lastIndexOf("r")); // position in the string, last ocurrence
console.log(airline.indexOf("Portugal")); // can search entire words
console.log(airline.slice(4)); // will return "Air Portugal" starting on the input number it slices the string
console.log(airline.slice(4, 7)); // specifying a start and end parameter
console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

// Create a function that receives an airplane seat and logs if it's a middle seat or not
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s =
    seat.slice(-1) === "B" || seat.slice(-1) === "E" ? "got" : "didn't get";
  console.log(`You ${s} a middle seat`);
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// More string methods
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Fix capitalization in name
const passenger = "jOnAs"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // first letter + starting on position one to all the word
console.log(passengerCorrect);
// Remove whitespaces
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim(); // removes whitespace from both ends of a string and returns a new string
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97L";
const priceUS = priceGB.replace("L", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); // replaces only the first instance
console.log(announcement.replaceAll("door", "gate")); // replacing all instances
console.log(announcement.replace(/door/g, "gate")); // sneak peek to regular expressions

// booleans
const newPlane = "Airbus A320neo";
console.log(newPlane.includes("A320")); // returns: true
console.log(newPlane.includes("Boeing")); // returns: false
console.log(newPlane.startsWith("Air")); // returns: true, same for ("Ai") ("Airb") etc...
console.log(newPlane.endsWith("neo")); // returns: true, same for ("Ai") ("Airb") etc...

// split
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));
const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

// join
const newName = ["Mr", firstName, lastName.toUpperCase()].join(" "); // joins different string variables into one
console.log(newName);

// function to capitalize a name
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};

// padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+")); // +++++++++++Go to the gate 23! --> until the string is 25 chars length
console.log(message.padStart(25, "+").padEnd(35, "+"));
// real life example: credit card masking
const maskCreditCard = function (number) {
  const str = number
    .toString()
    .slice(-4)
    .padStart(number.toString().length, "*"); // doesn't mean that it'll add .lenght "x" -- it'll add "*" to make a 16 length string
  return str;
};

console.log(maskCreditCard(3513513452388114));

// repeat
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(6);

// string methods practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  console.log(type);
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")})`.padStart(43);
  console.log(output);
}

// A closer look to functions

// default parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //it could even be 199 * 1.2, this is es6
  // ES5
  // numPassengers = numPassengers || 1; // setting values by default is case there's no input
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push;
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", undefined, 1000);

// how passing arguments works: value vs. reference
const flight = "LH234";
const andy = {
  name: "Andy Murray",
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 123456789) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, andy);
console.log(flight); // this returns LH234
/*
Why doesn't it return LH999, because flight is a primitive so 
flightNum is basically a copy of the const: flight
*/
console.log(andy);
/*
Why it does return Mr. Andy Murray, when passing a reference type
to a function, the reference of the object in the memory is copied
it's exactly like doing
const flightNum = flight
const passenger = jonas --> reference of the object in the memory
*/
/*
- Passing a primitive type to a function is basically as creating a copy, the value is copied
- When passing an object to a function is basically as referencing that object in the memory heap,
what it's changed in the copy will also be changed in the original
*/

/*
first-class and higher-order functions

First-class functions
- Javascript treats functions as first-class citizens
- This means that functions are simply values
- Functions are just another type of object
* You store functions in variable or properties
* Pass functions as arguments to other functions
* Return functions from another functions
* Call methods on functions

High-order functions
- A function that receives another function as an argument, that returns a new function, or both
- This is only possible because of first-class functions
*/

// Functions accepting callback functions
// regular function
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// regular function
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// high-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // reading the name property of the function fn.name where .name is a method
};

transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is the best", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋🏽");
};

["Jonas", "Martha", "Adam"].forEach(high5); // forEach is a built-in method, that we'll learn later
/* Why callback functions are so much used
- It's easier to split our code into more reusable and interconnected parts
- Callback functions allow us to create abstracion, abstraction is hiding the details of some code implementation because we don't really care about all that detailed, every function has it's own task, we create levels of abstraction, it's like delegating different jobs to functions
*/

// functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");

greeterHey("Jonas");
greeterHey("Steven");
// all of this works because of closures, we'll see it later

// turning greet function into an arrow function
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

// the call and apply methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    // this is a new syntax without having to declared the function
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Alessandro Del Piero");
lufthansa.book(635, "John Smith");

// call() method
const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
  // book: lufthansa.book,
  book: lufthansa.book.bind(eurowings), // correct way to do it
};

// Let's say we want to use the function book() from lufthansa object in the eurowing one, what we can do is write it outside of the object
const book = lufthansa.book; // this is possible because javascript has first-class functions
book(23, "Sarah Williams"); // returns an error because it's a regular function, therefore this. keyword returns undefined
// how do we solve this issue and use this. keyword depending on the object?

book.call(eurowings, 23, "Sarah Williams"); // call is a method
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

eurowings.book(111, "Mary Poppins"); // This also returns undefined because the object doesn't have a key named 'airline'

// apply() method
const flightData = [583, "George Cooper"];
book.apply(eurowings, flightData);
console.log(eurowings);
book.call(swiss, ...flightData); // professor prefers to use it like this

// bind method
const bookEW = book.bind(eurowings);
bookEW(23, "Steve Willians");
const bookEW23 = book.bind(eurowings, 23); // adding the 23 is called partial application
bookEW23("Martha Cooper");
bookEW23("Jonas Joe");
// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // we add null because we don't care about the .this keyword in this particular case
// addVAT = value => value + value * 0.23

/* 
Inmediately Invoked Function Expressions (IIFE)
Sometimes we need a function that is only executed once
-> Create the function and executed once
*/
// instead of writing it and save it to a variable
const ruOnce = function () {
  console.log("This will never run again");
};

// we write it like this, if we don't use parenthesis, it'll return an error saying that it requires a function name
// by doing this we transform the statement into an expression
(function () {
  console.log("This will never run again");
})();

// another way of doing it
(() => console.log("This will ALSO never run again"))();

// IIFE are not that used in modern javascript, becausen if we want to create private variables, we can create a block, like this:
{
  const isPrivate = 23;
  var notPrivate = 46;
}

/* 
Closures

In JavaScript, a closure is a function bundled together with references to its surrounding state, allowing it to retain access to variables from its outer (enclosing) scope even after that scope has finished executing. Closures provide a way to create private variables and maintain state across multiple function calls.

A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created

We do not have to manually create closures, this is a javascript feature that happen automatically. We can't even access closed-over variables explicitly. A closure is not a tangible javascript object
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passenger
booker(); // 2 passenger
// we can access to closure info like this
console.dir(booker); // anonymous() -> [[Scopes]] -> 0: Closure

// more closure examples
// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // returns 46
console.dir(f);

// re-assigning f function
h();
f(); // returns 1554
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

// Arrays

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130];

// slice
let arr3 = ["a", "b", "c", "d", "e"];

console.log(arr3.slice(2));
console.log(arr3.slice(2, 4)); // the end parameter 4 is not included
console.log(arr3.slice(-2));

// splice, changes the original array and deletes elements
arr3.splice(-1);
console.log(arr3);
arr3.splice(1, 2); // the second argument works differently, actually this deletes two elements starting from position 1, therefore this returns ["a", "d"]

// reverse
arr3 = ["a", "b", "c", "d", "e"];
const arr4 = ["j", "i", "h", "g", "j"];
console.log(arr4.reverse());
console.log(arr4); // changes the original array

// concat
const letters2 = arr3.concat(arr4);
console.log(letters2);
console.log(...arr3, ...arr4); // returns the same result

// join
console.log(letters2.join("-"));

// new at method
const arr5 = [23, 11, 64];
console.log(arr5[0]);
console.log(arr5.at(0)); // it's the same
console.log(arr5[arr5.length - 1]);
console.log(arr5.slice(-1));
console.log(arr5.at(-1));
console.log("jonas".at(0)); // also works on strings

// forEach
// without
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
// with
movements.forEach(function (movement, index, array) {
  // index and array (second paramenter is the index and the third is the full array)
  if (movement > 0) {
    console.log(`Movement ${index + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
});

// with Maps
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// with Sets
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// the map Method
// takes an array, loops over that array and in each iteration applies a callback function to the current array element and builds a new array
//const movements = [200, 450, -400, 3000, -650, -130];
// convert the movements to US dollars
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSD2 = movements.map((mov) => mov * eurToUsd);

// the filter Method
// takes an array, loops over that array and in each iteration filters on a condition and builds a new array with only filtered elements
// filter
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);

// the reduce Method
// reudeces all array elements down to one single value
// accumulator -> SNOWBALL
const balance = movements.reduce(
  (accumulator, cur, i, arr) => accumulator + cur,
  0
); // 0 is the inital value of the accumulator

// the magic of chaining methods
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

// the find Method
// loops over the array and returns an element of the array
const firstWithdrawal = movements.find((mov) => mov < 0); // result is a boolean, it'll return the first element that satisfies the condition

//
