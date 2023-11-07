"use strict";
const cities = [
    {
        name: "New York City",
        population: 8537673,
        country: "United States"
    },
    {
        name: "London",
        population: 8961989,
        country: "United Kingdom"
    },
    {
        name: "Paris",
        population: 2206488,
        country: "France"
    }
];
console.log("List of Cities:");
for (const city of cities) {
    console.log(`City: ${city.name}`);
    console.log(`Population: ${city.population}`);
    console.log(`Country: ${city.country}`);
    console.log("\n");
}
