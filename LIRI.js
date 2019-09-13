//spotify key:
//

//requires
require('dotenv').config();
const fs = require("fs");
const Concert = require("./concert.js");
const Spotify = require("./spotify.js");
const Movie = require("./movie.js")

//variables
const nodeArgs = process.argv;
let command = nodeArgs[2];
let subject = ``;
const divider = "------------------------------------------------------------";

//objects
const concert = new Concert();
const spotify = new Spotify();
const movie = new Movie();

//determine search subject
for (let i = 0; i < nodeArgs.length; i++) {
    if (i === 3) {
        subject += nodeArgs[i];
    }
    else if (i > 3) {
        subject += ` ${nodeArgs[i]}`;
    }
}

console.log(`The command is: ${command} and the subject of the search is: ${subject}`);

if (command === `concert-this`) {
    concert.findConcert(subject);
}
else if (command === `spotify-this-song`) {
    if (subject === ``) {
        subject = `The Sign artist:Ace of Base`;
    }
    spotify.findSong(subject);
}
else if (command === `movie-this`) {
    if (subject === ``) {
        subject = `Mr. Nobody`;
    }
    movie.findMovie(subject);
}
else if (command === `do-what-it-says`) {
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        //Grabbing the command and subject for our other js files
        command = dataArr[0];
        subject = dataArr[1];
        console.log(divider);
        console.log(`The file command is: ${command} and the subject of the search is: ${subject}`);

        if (command === `concert-this`) {
            concert.findConcert(subject);
        }
        else if (command === `spotify-this-song`) {
            if (subject === ``) {
                subject = `The Sign artist:Ace of Base`;
            }
            spotify.findSong(subject);
        }
        else if (command === `movie-this`) {
            if (subject === ``) {
                subject = `Mr. Nobody`;
            }
            movie.findMovie(subject);
        }
    });
}
