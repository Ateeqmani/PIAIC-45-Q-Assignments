"use strict";
function orderSandwich(...items) {
    console.log("Sandwich ordered with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich order complete.");
}
orderSandwich("Bread", "Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Bread", "Peanut Butter", "Jelly");
orderSandwich("Bread", "Ham", "Swiss Cheese");
