//Initialize
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var http = require("http");
var AYLIENTextAPI = require('aylien_textapi');

//Express
var app = express();
var PORT = process.env.PORT || 3000;

// models
var db = require("./models");


//parsing for express
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routes
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.use(methodOverride("_method"));

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
