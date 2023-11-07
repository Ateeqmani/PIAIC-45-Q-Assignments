"use strict";
function make_album(artist, album, tracks) {
    const albumInfo = {
        artist: artist,
        album: album
    };
    if (tracks !== undefined) {
        albumInfo.tracks = tracks;
    }
    return albumInfo;
}
const album1 = make_album("Artist 1", "Album 1");
const album2 = make_album("Artist 2", "Album 2", 12);
const album3 = make_album("Artist 3", "Album 3");
console.log(album1);
console.log(album2);
console.log(album3);
