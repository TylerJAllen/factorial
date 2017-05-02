$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
//Create Variable for user input
    var userInput = parseInt($("input").val());
//Add userInput value to factorial variable
    var factorial = userInput;
//Multiply factorial by decending values using a loop
    for(var index = 1; index < userInput; index += 1){
      var factorial = factorial * (userInput - index);
    }
    $(".output").hide();
    $(".output").show();
    $("#output").text(factorial);
  });
});
