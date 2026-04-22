$(document).ready(function(){ //light mode
  $("#btn1").click(function(){
    $("body, div, h2, label, input").css({"background-color": "white", "color": "black"});
  });
});

$(document).ready(function(){ //dark mode
  $("#btn2").click(function(){
    $("body, div, h2, label, input").css({"background-color": "black", "color": "white"});
  });
});

$(document).ready(function(){ //larger font
  $("#btn3").click(function(){
    $("h2, label, input").css("font-size", "xx-large");
  });
});

$(document).ready(function(){ //larger font
  $("#btn4").click(function(){
    $("h2, label, input").css("font-size", "medium");
  });
});

//this was for testing
// $(document).ready(function(){
//   $("#my_form").submit(function(){ //https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button -radio button
//     alert("You entered: " + $("#fname").val() + " " + $("#lname").val() + " " + $("#email").val() + " " + $('input[name="gender"]:checked').val());
//   });
// });
 
$(document).ready(function(){
  $("#my_form").submit(function(){ 
    event.preventDefault(); //https://www.tutorialspoint.com/article/how-to-stop-refreshing-the-page-on-submit-in-javascript -prevent default

    $("#form_results").html("")

    //https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button -radio button
    $("#form_results").append("You entered: " + $("#fname").val() + " " + $("#lname").val() + " " + $("#email").val() + " " + $('input[name="gender"]:checked').val()); // grab values
    this.reset(); //https://stackoverflow.com/questions/8701812/clear-form-after-submission-with-jquery - reset form
  });
});

