//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var Concert = function () {
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
            const venueDate = jsonData.datetime;
            console.log(divider);
            console.log(venueName);
            console.log(venueLoc);
            console.log(venueDate);
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