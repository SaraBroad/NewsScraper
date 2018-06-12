var cheerio = require("cheerio");
var axios = require("axios");


//run all the code that axios and cheerios needs me to do to scrape the files...ex. head, url, summary
//push these to the array
//when array is complete (outside of loop) return articles
//when hit scrape button, the route will go to the controller which uses this file at which point this file will 
//this function should return an array of articles
module.exports = function () {
    app.get("/scrape", function (req, res) {
        var $ = cheerio.load(response.data);
        axios.get("https://www.bbc.com").then(function (response) {

            var result = {};

            $(".media__content").each(function (i, element) {
                var title = $(element).children('h3').children("a").text();
                var link = $(element).children("a").attr("href");
                var summary = $(element).children("p").text();

                db.Article.create(result)
                    .then(function (dbArticle) {
                        console.log(dbArticle)
                    }).catch(function (err) {
                        return res.json(err);
                    })
            })
            res.send("Scrape complete");
        })
    })
};