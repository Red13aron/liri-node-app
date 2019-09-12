const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);

const Spot = function () {
    // divider will be used as a spacer between the tv data we print in log.txt
    const divider = "------------------------------------------------------------";
    this.findSong = function(track){
    spotify
        .search({ type: 'track', query: track })
        .then(function (response) {
            const artist = response.tracks.items[0].artists[0].name;
            const songName = response.tracks.items[0].name;
            const externalUrl = response.tracks.items[0].preview_url;
            const album = response.tracks.items[0].album.name;

            console.log(divider);
            console.log(`Artist: ${artist}`);
            console.log(`Song: ${songName}`);
            console.log(`Preview: ${externalUrl}`);
            console.log(`Album: ${album}`);
            console.log(divider);
        })
        .catch(function (err) {
            console.log(err);
        });
    }
}




module.exports = Spot;