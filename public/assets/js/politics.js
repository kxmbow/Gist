$(document).ready(function(){

var url = "https://theunitedstates.io/congress-legislators/";
    
  $("#submit-button").click(function() {

    var first = $("#first-name").val().toLowerCase();
    var last = $("#last-name").val();
    var state =$("#state-input").val();

    $.ajax({
      url: url + "legislators-current.json",
      success: function(res) {

        console.log(res);
         
    
              

        for(var i = 0; i < res.length; i++){

          var searchFirstName = res[i].name.first.toLowerCase();
          var searchLastName = res[i].name.last.toLowerCase();
          if (first == searchFirstName || last == searchLastName) {

            var bioguide = res[i].id.bioguide;
            var name = res[i].name.official_full;
            var firstName = res[i].name.first;
            var lastName = res[i].name.last;
            var birthday = res[i].bio.birthday;
            var gender = res[i].bio.gender;

            console.log(firstName + " " + lastName);
            console.log(res[i]);

            if (res[i].length > 1) {
              console.log("more than one");
                // $("#answers").empty();
                // for (var a = 0; a < res[i].length; a++) {
                //   $("#firstName").append(firstName);
                  // $("#answers").append("<button class='btn btn-block' id='"lastName"'>Did you mean "firstName " " , lastName"</button></p>");
            } else {
            
              $("#firstName").append(firstName);
              $("#lastName").append(lastName);
              $("#official").append(name);
              $("#bioguide").append(bioguide);
              $("#birthday").append(birthday);
              $("#gender").append(gender);
        
            }
          }
        }  
      }   
    });
  });
});
    //social media
    // $.ajax({
    //     url: url + "legislators-social-media.json", 
    //     success: function(result){

    
    //         for(var i = 0; i < result.length; i++){

                
    //             var id = result[i].id.bioguide;
    //             var twitter = result[i].social.twitter;
    //             var facebook = result[i].social.facebook;
    //             var youtube = result[i].social.youtube;
    //             var instagram = result[i].social.instagram;
                
    //             // //meh face icon  
    //             // var meh = "<i class='fa fa-meh-o fa-lg'></i>";

    //             // if (twitter == undefined) {
    //             //     twitter = meh;
    //             // } else {
    //             //     twitter = "https://twitter.com/" + twitter;
    //             // }
                    

    //             var tableRow = "" + "<tr><td>" + id + "</td><td>" + twitter
    //                 + "</td><td>" + facebook + "</td><td>" + youtube 
    //                 + "</td><td>" + instagram + "</td></tr>";
    //             $("#social").append(tableRow);
    //         };
            
    //     }
    // }

// $.when(
    // Get the HTML
    // $.get("/feature/"),

     // Get the CSS
    // $.get("/assets/feature.css"),

    // Get the JS
    // $.getScript("/assets/feature.js")

// ).then(function(html, css, script) {
   // do stuff
// });
    

