// Matching a word
let myString = "Extract the word 'coding' from this string.";
let codingRegex = /change/;
let result = extractStr;

// Searching all the ocurrences
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g; // g means finding all the ocurrences

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // i means non case sensitive
let result2 = twinkleStar.match(starRegex);

// . means any character
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

// Brackets
let bgRegex = /b[aiu]g/; // this matches: bag, big, bug
let alphabetRegex = /[a-z]/ig; // matches a range of letters i:ignore case g:match all occurrences
let myRegex = /[2-6h-s]/; // match a range of numbers 2 to 6 and range of letters h to s

// Negated characters set
let myRegex2 = /[^0-9aeiou]/ig // don't match 0 to 9 and aeiou

// Character occurs one or more times
let difficultSpelling = "Mississipi";
let myRegex3 = /s+/g; // it'll match ['ss'],['ss']
let difficultSpelling2 = "Gooooooooooal"
let myRegexMore = /Go*/ // It'll match ['Goooooooooo']

// Greedy and Lazy matching
let string = "titanic";
let regex = /t[a-z]*i/; //greedy
let regex2 = /t[a-z]*?i/; //lazy
let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*>/; // greedy
let myRegex4 = /<.*>/; // lazy