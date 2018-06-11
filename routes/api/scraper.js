var router = require("express").Router();

var scrapeController = require("../../controllers/scrapecontroller");

app.get("/scrape", scrapeController)


module.exports = router;