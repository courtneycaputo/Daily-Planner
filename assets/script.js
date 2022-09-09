
// Display Date in Jumbotron Header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// Get current hour for comparison
var currentHour = moment().hour();


// Color Text Areas Based On Current Hour
$(".time-block").each(function(){
    //Get Hour Value of Each Time Block
    var blockHour = $(this).attr("id").split("-")[1];
    //Get Saved Value from Local Storage and Display in Correct Time Block's Text Area
    var textEntry = localStorage.getItem(blockHour);
    var textArea = $(this).find(".description");
    textArea.val (textEntry);
    //Compare Current Hour to Time Block, Add Appropriate Class to Display Correct Color
    if (blockHour < currentHour){
        $(this).find(".description").addClass("past");
    }else if(blockHour == currentHour){
        $(this).find(".description").addClass("present");
    }else{
        $(this).find(".description").addClass("future");
     }
});

// Function when Save Button Clicked
$(".saveBtn").on("click", function(){
    // Value is what is written in description
    var hourEvent = $(this).parent().find(".description").val();
    // Key is the hour
    var hour = $(this).parent().attr("id").split("-")[1];
   
    //Save Key and Value to Local Storage
    localStorage.setItem(hour,hourEvent);
});