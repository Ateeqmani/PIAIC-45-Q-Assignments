"use strict";
let guestList2 = ["Farman", "Jansher", "Aziz"];
const guestWhoCantMakeIt1 = guestList2[1];
console.log(guestWhoCantMakeIt1 + " can't make it to the dinner.");
guestList2[1] = "Ali";
console.log("Good news! We found a bigger dinner table!");
guestList2.unshift("Rafay");
guestList2.splice(Math.floor(guestList2.length / 2), 0, "Anwar");
guestList2.push("Akber");
for (let i = 0; i < guestList2.length; i++) {
    console.log("Dear " + guestList2[i] + ", you are cordially invited to dinner. Please join us!");
}
