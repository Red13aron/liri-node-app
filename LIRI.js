//spotify key:
//

//requires
require('dotenv').config();

const Concert = require("./concert.js");
const Spotify = require("./spotify.js");
const Movie = require("./movie.js")

//variables
const nodeArgs = process.argv;
let command = nodeArgs[2];
let subject = ``;

//objects
const concert = new Concert();
const spotify = new Spotify();
const movie = new Movie();

//determine search subject
for(let i = 0; i < nodeArgs.length; i++){
    if(i === 3){
        subject += nodeArgs[i];
    }
    else if(i>3){
        subject += ` ${nodeArgs[i]}`;
    }
}

console.log(`The command is: ${command} and the subject of the search is: ${subject}`);

if(command === `concert-this`){
    concert.findConcert(subject);
}
else if(command === `spotify-this-song`){
    if(subject === ``){
        subject = `The Sign artist:Ace of Base`;
    }
    spotify.findSong(subject);
}
else if(command === `movie-this`){
    if(subject === ``){
        subject = `Mr. Nobody`;
    }
    movie.findMovie(subject);
}
//spotify.search(queryUrl);