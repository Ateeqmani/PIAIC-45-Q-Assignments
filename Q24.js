"use strict";
let color = "blue";
console.log("Is color equal to 'blue'? I predict True.");
console.log(color === 'blue');
let season = "summer";
console.log("Is season not equal to 'fall'? I predict True.");
console.log(season !== 'fall');
let text = "Hello World";
console.log("Is text in lowercase equal to 'hello world'? I predict True.");
console.log(text.toLowerCase() === 'hello world');
let x = 10;
let y = 20;
console.log("Is x equal to y? I predict False.");
console.log(x === y);
console.log("Is x not equal to y? I predict True.");
console.log(x !== y);
console.log("Is x less than y? I predict True.");
console.log(x < y);
console.log("Is x greater than or equal to y? I predict False.");
console.log(x >= y);
let isMorning = true;
let isWeekendDay = false;
console.log("Is it morning and a weekend day? I predict False.");
console.log(isMorning && isWeekendDay);
console.log("Is it morning or a weekend day? I predict True.");
console.log(isMorning || isWeekendDay);
let fruits1 = ["apple", "banana", "cherry", "date"];
let targetFruit = "banana";
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits1.includes(targetFruit));
let animals = ["cat", "dog", "elephant", "giraffe"];
let targetAnimal = "lion";
console.log("Is 'lion' not in the animals array? I predict True.");
console.log(!animals.includes(targetAnimal));
