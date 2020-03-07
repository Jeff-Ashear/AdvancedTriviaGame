//global variables
var wins = 0;
var losses = 0;
var seconds = $("#gameTimer").text();

// a function dynamically generates the instructions and a button

$(document).ready(function startGame() {
    console.log("Ready set go");
    $("#instructions").text("Want to see how well you know your 90's music?  You will have 10000000 seconds to answer each question.  Click the button below to start!")
    $("#startDiv").html('<button id="startButton">Click here to start</button>');  
});

// clicking the button begins the game:
$(document).on("click", "#startButton", function(event) {
    event.preventDefault;
    console.log("clicked start");
    // seconds = 10;
    questionPhase();
   
    function questionPhase() {
        $("#startDiv").empty();
        $("#questionDiv").text(`1. The (often one-man) band who's work revitalized use of the synthesizer, and revolutionized
        the presence of electronics in music is:`);
        $("#answerDiv").html(` <div id="question1" class="text-center">
        <input type="radio" name="group1" id="answer1A" value="1">Sound Garden </input>
        <input type="radio" name="group1" id="answer1B" value="2">Nine Inch Nails </input>
        <input type="radio" name="group1" id="answer1C" value="3">Beck </input>
        <input type="radio" name="group1" id="answer1D" value="4">Radiohead </input>
        </div>`);
        var countdown = setInterval(function() {
            seconds --;
            $("#gameTimer").text(seconds);
            if (seconds === 0) {
                clearInterval(countdown);
                console.log("Time's up.")
            }
        }, 1000);
    }

});
    //displays the first question
    // displays a related image
    // countdown begins
    //check to see if the entered answer is correct, incorrect, or blank
        // displays feedback
            // if the answer was correct, display congrats
            // if the answer was incorrect, displays the correct answer
            // if the timer reaches 0 display the correct answer
        //another countdown begins prompt question 2
        //when the countdown ends display question 2 a repeat the above process