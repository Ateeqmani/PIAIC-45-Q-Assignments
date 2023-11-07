"use strict";
let guestList3 = ["Farman", "Jansher", "Aziz"];
const guestWhoCantMakeIt2 = guestList3[1];
console.log(guestWhoCantMakeIt2 + " can't make it to the dinner.");
guestList3[1] = "Ali";
console.log("Good news! We found a bigger dinner table!");
guestList3.unshift("Rafay");
guestList3.splice(Math.floor(guestList3.length / 2), 0, "Anwar");
guestList3.push("Akber");
console.log("Oops! The new dinner table won't arrive in time. We can only invite two people.");
while (guestList3.length > 2) {
    const removedGuest = guestList3.pop();
    console.log("Sorry " + removedGuest + ", we can't invite you to dinner.");
}
for (let i = 0; i < guestList3.length; i++) {
    console.log("Dear " + guestList3[i] + ", you are still invited to dinner. Please join us!");
}
guestList3.splice(0, guestList3.length);
console.log("After removing all guests, the list is empty: " + guestList3);
