//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

const axios = require("axios");
const Moment = require(`moment`);
const fs = require("fs");

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

            const concertData = [
                "Venue Name: " + venueName,
                "Location: " + venueLoc,
                "Date: " + venueDate
            ].join("\n\n");

            fs.appendFile("log.txt", "\n" + divider + "\n" + concertData + "\n" + divider + "\n", function (err) {
                if (err) throw err;
            });
        });
    }
}

module.exports = Concert;