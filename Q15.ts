let guestList1: string[] = ["Farman", "Jansher", "Aziz"];
const guestWhoCantMakeIt = guestList1[1]; // Assuming the second guest can't make it

console.log(guestWhoCantMakeIt + " can't make it to the dinner.");

// Replace the guest who can't make it with a new person
guestList1[1] = "Ali";

for (let i = 0; i < guestList1.length; i++) {
    console.log("Dear " + guestList1[i] + ", you are cordially invited to dinner. Please join us!");
}