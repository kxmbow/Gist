$("#search").on("click", function(event) {
    event.preventDefault();
    var newTextToSummarize = {
        title: $("#userTitle").val().trim(),
        text:  $("#userText").val().trim(),
        number: $("#sentenceNumber").val().trim(),

};
  
    
    $.post("/api/new", newTextToSummarize)
    .done(function(data) {
      console.log(data);
      $("#results").text(data.text2);
      console.log(data);
      
      
    });
    
    
  
  });