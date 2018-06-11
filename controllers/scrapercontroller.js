var db = require("../models");
var scraper = require("../scripts/scriptscraper");


module.exports = {

    scraper: function(req, res) {
        return scraper().then(function(data){
        // create new headline in db - mongo.tablename.insert...
        
        })
        .then(function(dbData){
            //if dbData has anything inside, then we have article and send back json version of how many articles were added
        })
    }
};