//Requiring models
var db = require("../models");
var express = require('express');
var AYLIENTextAPI = require('aylien_textapi');


module.exports = function(app) {

  // GET route for getting all of the posts
  // router.get("/api/users", function(req, res) {
  //   db.User.findAll({})
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // Get route for returning posts of a specific category
  // router.get("/api/users/category/:category", function(req, res) {
  //   db.User.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // Get rotue for retrieving a single post
  // router.get("/api/users/:id", function(req, res) {
  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // POST route for saving a new post
  // router.post("/api/users", function(req, res) {
  //   console.log(req.body);
  //   db.User.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     //category: req.body.category
  //   })
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // DELETE route for deleting posts
  // router.delete("/api/users/:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // PUT route for updating posts
  // router.put("/api/users", function(req, res) {
  //   db.User.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });


app.get("/all", function(req, res) {
  ;
 res.json(textToSummarize);
 console.log(result);
 
 
});

var textapi = new AYLIENTextAPI({
  application_id: " 5f3f0737",
  application_key: "a01ec2b524e30f7fa9dc7b73d033ea25"
});
function isSummarized(param1,param2,param3, cb){
  textapi.summarize({
    //title of the article i used for my tests. we can have a variable here and pass it as the second param on the func
    title: param1,
    text:  param2,
    sentences_number: param3
  }, cb);
  }

var textSummarized;
var textToSummarize;
app.post("/api/new", function(req, res) {
  var textToSummarize = req.body;

  
  
  
  console.log(textToSummarize.text);
   isSummarized(textToSummarize.title,textToSummarize.text,textToSummarize.number, function(error, response){
        var sentences = "";
       if (error === null) {
        response.sentences.forEach(function(s) {
          
          console.log("------------------------------------------------------");
          console.log("Summarized text : ");
          sentences += s;
          console.log("----------------test-------------")
          console.log(textToSummarize.title);
          
          
        });
      }
      res.send({text2: sentences});
      
      // renderPage(sentences);
      
   });
});
};


