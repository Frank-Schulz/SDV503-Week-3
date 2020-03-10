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



// Boolean
console.log( +true);
console.log( +false);
console.log( +'' )

// Comma Operator
console.log(1 + 2, 3 + 4);
console.log(5 + 6, 7 + 8);
console.log(8 + 9, 10 + 11);

console.log("Comma operator in a variable");
let c =(1 + 2, 3 + 4);
console.log(c);

// Assignment Operator
x = 10; // Assign
console.log(x);

x = 10;
x += 10; // Add and Assign
console.log(x);

x = 10;
x -= 10;
console.log(x); // Subtract and Assign

x = 10;
x *= 10; // Multiply and Assign
console.log(x);

x = 10;
x /= 10; // Divide and Assign
console.log(x);

x = 10;
x %= 10; // Divide and Assign modulus
console.log(x);

x = 10;
x **= 10; // 
console.log(x);


// Comparison Operators
let a = 25;
let b = 13;

if (a == b) {
        console.log("Variables a and b are equal")
}

// equal to
console.log(10 == 5);
// not equal to
console.log(10 != 5);
// less than
console.log(10 < 5);
// greater than
console.log(10 > 5);
// less than or equal to
console.log(10 <= 5);
// greater than or equal to
console.log(10 >= 5);

// Boolean andd number 
// different value
console.log(10 == '5')
// same value
console.log(5 == '5');
// different type
console.log(5 === '5');
// same type
console.log('5' === '5');


console.log(true == 1);
console.log(true == '1');
console.log(true == 0);
console.log(false == 1);
console.log(false == '0');
console.log(false == 0);

console.log(true != 1);
console.log(true != "1");



console.log("Raise" > "Race");

console.log(1 == "1");      // both have the same value
console.log(1 === "1");     // same value but different data type

console.log(1 == true);     // both have the same value
console.log(1 === true);    // same value but different data type

console.log(0 == false);    // both have the same value
console.log(0 === false);   // same value but different data type


console.log(1 != "1");      // both have the same value


// null vs undefined
console.log(null == 0);             // null is not converted to a value, 0 is a value
console.log(null === 0);            // ^
console.log(null > 0);              // ^
console.log(null < 0)               // ^

console.log(undefined == null);     // both have a value of nothing
console.log(undefined === null);    // undefined gets evaluted as zero but null is actually zero

console.log(undefined == 0);        // cannot evalute undefined (has no value)
console.log(undefined === 0);       // cannot evalute undefined (has no value)
console.log(undefined > 0);         // cannot evalute undefined (has no value)
console.log(undefined >= 0);        // cannot evalute undefined (has no value)

console.log(null + 1);              // evaluates null as 0 and adds 1
console.log(undefined > 0);         // undefined has no value, so can't do math
console.log(undefined + 1);         // undefined has no value, so can't do math


// Logic Gates
// The following expressions evaluate to either true or false
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true || true && false);