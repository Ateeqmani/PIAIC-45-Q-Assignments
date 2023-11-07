"use strict";
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const indexOutOfBounds = fruits[5];
console.log("This will not be printed because of the error.");
try {
    console.log(indexOutOfBounds);
}
catch (error) {
    console.log("An error occurred: " + error.message);
}
const validIndex = fruits[1];
console.log("Value at valid index:", validIndex);
