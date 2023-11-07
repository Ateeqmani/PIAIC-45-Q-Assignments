"use strict";
const current_users = ["Farman", "Aziz", "Ali", "Jansher", "Nawaz"];
const new_users = ["Asghar", "Salman", "Nawab", "Farhad", "Jahangir"];
function isUsernameTaken(username) {
    const lowercaseUsername = username.toLowerCase();
    return current_users.some((user) => user.toLowerCase() === lowercaseUsername);
}
for (const newUser of new_users) {
    if (isUsernameTaken(newUser)) {
        console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
