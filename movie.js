// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
const fs = require("fs");


// This line is just to help us debug against the actual URL.
const Movie = function () {
    // divider will be used as a spacer between the tv data we print in log.txt
    const divider = "------------------------------------------------------------";
    this.findMovie = function (movie) {
        // Then run a request with axios to the OMDB API with the movie specified
        var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        axios.get(queryUrl).then(
            function (response) {
                const title = response.data.Title;
                const year = response.data.Year;
                const ratingImdb = response.data.Ratings[0].Value;
                const ratingTom = response.data.Ratings[1].Value;
                const country = response.data.Country;
                const language = response.data.Language;
                const plot = response.data.Plot;
                const actors = response.data.Actors;
                
                console.log(divider);
                console.log(title);
                console.log(`Release Year: ${year}`);
                console.log(`IMDB: ${ratingImdb}`);
                console.log(`Rotten Tomatoes: ${ratingTom}`);
                console.log(`Country of Origin: ${country}`);
                console.log(`Language: ${language}`);
                console.log(`Plot: ${plot}`);
                console.log(`Actors: ${actors}`);
                console.log(divider);


                const movieData = [
                    title,
                    "Release Year: " + year,
                    "IMDB: " + ratingImdb,
                    "Rotten Tomatoes: " + ratingTom,
                    "Country of Origin: " + country,
                    "Language: " + language,
                    "Plot: " + plot,
                    "Actors: " + actors
                  ].join("\n\n");

                // Append showData and the divider to log.txt, print showData to the console
                fs.appendFile("log.txt", "\n" + divider + "\n" + movieData + "\n" + divider + "\n", function (err) {
                    if (err) throw err;
                });
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an object that comes back with details pertaining to the error that occurred.
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    }
}



module.exports = Movie;