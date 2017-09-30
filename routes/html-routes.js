//Dependencies
var path = require("path");
var express = require("express");

//Routes
module.exports = function(app) {

	// Each of the below routes just handles the HTML page that the user gets sent to.

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/gist.html"));
	});

  app.get("/gist", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/gist.html"));
  });

 app.get("/locate-bill", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/bills.html"));
	});

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  app.get("/politicians", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/politics.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

};
