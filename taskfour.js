// Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

let books = ["The Great Gatsby", "1984", "Moby Dick"];  // Array
let age = 25;                                          // Number
let name = "Alice";                                    // String
let person = { name: "John", age: 30 };                // Object
let isActive = true;  

console.log(Array.isArray(books));
console.log(Array.isArray(age));
console.log(Array.isArray(name));
console.log(Array.isArray(person));
console.log(Array.isArray(isActive));