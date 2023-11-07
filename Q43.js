"use strict";
function make_album1(artist, album, tracks) {
    const albumInfo = {
        artist: artist,
        album: album
    };
    if (tracks !== undefined) {
        albumInfo.tracks = tracks;
    }
    return albumInfo;
}
function make_great1(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magiciansArray2 = ["Danyal", "Haris", "Daud", "Ali"];
console.log("Original Magicians:");
show_magicians(magiciansArray2);
const greatMagiciansArray2 = make_great1([...magiciansArray2]);
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray2);
console.log("\nOriginal Magicians (unchanged):");
show_magicians(magiciansArray2);
