$("#searching").on("click", function(event) {
    event.preventDefault();
    var newTextToSummarize = { text: $("#userInput").val().trim() };

   // $.post("/api/new", newTextToSummarize)
    //     .done(function(data) {
    //             console.log(data);
    //             $("#results").text(data.text2);
    //             app.post("/api/new", function(req, res) {
    //                         var newTextToSummarize = req.body;
    //                         textToSummarize = newTextToSummarize;
    //                         app.post("/api/new", function(req, res) {
    //                                     var newTextToSummarize = req.body;
    //                                     textToSummarize = newTextToSummarize;


   const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = 'https://congress.api.sunlightfoundation.com/bills/search?query=';
    var userInputs = $("#userInput").val();
    fetch(proxyurl + url + userInputs)
      .then(function(response) {
          
          // $("#return-bill-response").html('<p>' + response.text() + '</p>');
          return response.text();
      })
      .then(function(text) {
          console.log('Request successful', text);
          var body = JSON.parse(text);
          console.log(body.results);
          // $("#return-bill-text").html('<p>' + text + '</p>');
          return document.write(text);
     })
      .catch(function(error) {
          console.log('Request failed', error);
          // $("#return-bill-error").append('<p>"request failed"', error + '</p>');
      });
});

