var router = require("express").Router();

var scrapeController = require("../../controllers/scrapecontroller");

app.get("/scrape", scrapeController.scraper)


module.exports = router;