"use strict";
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
function show_magicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magiciansArray = ["Danyal", "Haris", "Daud", "Ali"];
console.log("Original Magicians:");
show_magicians1(magiciansArray);
const greatMagiciansArray = make_great(magiciansArray);
console.log("\nGreat Magicians:");
show_magicians1(greatMagiciansArray);
