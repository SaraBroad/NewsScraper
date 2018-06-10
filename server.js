var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");


var PORT = process.env.PORT || 8080;


var app = express();

app.use(logger("dev"));
// app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/NewsScraper");

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  