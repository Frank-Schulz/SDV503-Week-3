console.log("Hello World!");

let x = 10;
let y = 5;

// Math operators
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Incrementation / pre
//      Adds 1 then returns result
console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);
console.log(++x);

// Incrementation / post
//      Returns result then adds one
console.log(x);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);
console.log(x++);

x = 10;
y = x;

console.log("Pre-Increment");
y = ++x;
console.log(x);
console.log(y);

console.log("Post-Increment");
y = x++;
console.log(x);
console.log(y);

x = 10;
// Decrement / pre
console.log(x);
console.log(--x);
console.log(x);
console.log(--x);
console.log(x);
console.log(--x);
console.log(x);
console.log(--x);

// Decrement / post
console.log(x);
console.log(x--);
console.log(x);
console.log(x--);
console.log(x);
console.log(x--);
console.log(x);
console.log(x--);

x = 10;
y = x;
console.log("Pre-Decrement");
y = --x;
console.log(x);
console.log(y);

console.log("Post-Decrement");
y = x--;
console.log(x);
console.log(y);

x = 1; 
console.log(5 * ++x);
console.log(5 * x++);

// “Unary”, “Binary” Operators
x = 1;
x = -x;
console.log(x);

x = 10;
y = 5;
console.log(x + y);

// Concatenation
let wordOne = "Oopsie";
let wordTwo = "Daisie";

console.log(`this is word "${wordOne}" and the other word ${wordTwo}`)
console.log(wordOne + wordTwo) //No spaces
console.log(wordOne +" "+ wordTwo)
console.log(wordOne, wordTwo) //Has Spaces

// Logs the result of '10 - 5'
console.log(10 - 5);

// Logs the result of 10 - '5' | 5 is converted to a number
console.log(10 - '5');

// Logs the result of '10' * 5 | 10 is converted to a number
console.log('10' * 5);

// Logs the result of 110 + 10 - '5' | 5 is converted to a number
console.log(110 + 10 - '5');

// Logs the result of '10' / '10' | both 10's are converted to numbers
console.log('10' / '10');
