//spotify key:
//

//requires
require('dotenv').config();
const axios = require("axios");
const Spotify = require('node-spotify-api');
const Moment = require(`moment`);
const keys = require("./keys.js");
const Concert = require("./concert.js")
const spotify = new Spotify(keys.spotify);

//variables
const nodeArgs = process.argv;
let command = nodeArgs[2];
let subject = ``;

//objects
const concert = new Concert();

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
//spotify.search(queryUrl);