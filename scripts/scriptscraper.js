var cheerio = require("cheerio");
var axios = require("axios");


//run all the code that axios and cheerios needs me to do to scrape the files...ex. head, url, summary
//push these to the array
//when array is complete (outside of loop) return articles
//when hit scrape button, the route will go to the controller which uses this file at which point this file will 
//this function should return an array of articles
module.exports = function() {
    app.get("/scrape", function (req, res){
        axios.get("https://www.bbc.com").then(function(response){
            var $ = cheerio.load(response.data);
            $(".media__content").each(function(i, element){
            var title = $(element).children('h3').children("a").text();
            var link = $(element).children("a").attr("href");
            var summary = $(element).children("p").text();
            var result = {};

            }); 
        })
    });
};