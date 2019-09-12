//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

const axios = require("axios");
const fs = require("fs");
const Moment = require(`moment`);

// Create the TV constructor
const Concert = function () {
    // divider will be used as a spacer between the tv data we print in log.txt
    const divider = "------------------------------------------------------------";

    // findShow takes in the name of a tv show and searches the tvmaze API
    this.findConcert = function (artist) {
        const URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function (response) {
            // Place the response.data into a variable, jsonData.
            const jsonData = response.data[0];
            const venueName = jsonData.venue.name;
            const venueLoc = `${jsonData.venue.city}, ${jsonData.venue.region} ${jsonData.venue.country}`;
            const venueDate = Moment(jsonData.datetime).format(`MMM Do YY`);
            console.log(divider);
            console.log(`Venue Name: ${venueName}`);
            console.log(`Location: ${venueLoc}`);
            console.log(`Date: ${venueDate}`);
            console.log(divider);
            // showData ends up being the string containing the show data we will print to the console
            // const concertData = [
            //     "Show: " + jsonData.name,
            //     "Genre(s): " + jsonData.genres.join(", "),
            //     "Rating: " + jsonData.rating.average,
            //     "Network: " + jsonData.network.name,
            //     "Summary: " + jsonData.summary
            // ].join("\n\n");

            // Append showData and the divider to log.txt, print showData to the console
            //   fs.appendFile("log.txt", concertData + divider, function (err) {
            //     if (err) throw err;
            // console.log(divider + concertData);
        });
    }
};


module.exports = Concert;