"use strict";
const animals2 = ["Dog", "Cat", "Rabbit"];
console.log("Common characteristic: These animals would make great pets.");
console.log("The animals are:");
for (const animal of animals2) {
    console.log(animal);
}
console.log("\nMore about these animals:");
for (const animal of animals2) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("\nAny of these animals would make a great pet!");
