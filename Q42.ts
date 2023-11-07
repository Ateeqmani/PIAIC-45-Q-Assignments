
function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
}

function show_magicians1(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magiciansArray: string[] = ["Danyal", "Haris", "Daud", "Ali"];

console.log("Original Magicians:");
show_magicians1(magiciansArray);

const greatMagiciansArray = make_great(magiciansArray);

console.log("\nGreat Magicians:");
show_magicians1(greatMagiciansArray);

