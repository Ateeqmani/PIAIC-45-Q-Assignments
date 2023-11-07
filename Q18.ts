
const placesToVisit = ["Tokyo", "Paris", "Machu Picchu", "New York", "Great Barrier Reef"];

console.log("Original Order:", placesToVisit);

const alphabeticalOrder = [...placesToVisit].sort();

console.log("Alphabetical Order:", alphabeticalOrder);

console.log("Original Order:", placesToVisit);

const reverseAlphabeticalOrder = [...placesToVisit].sort().reverse();

console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);

console.log("Original Order:", placesToVisit);

placesToVisit.reverse();

console.log("Reversed Order:", placesToVisit);

placesToVisit.reverse();

console.log("Original Order:", placesToVisit);

placesToVisit.sort();

console.log("Sorted in Alphabetical Order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));

console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);