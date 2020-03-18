var wins = 0;
var losses = 0;

var phase = 1;
var seconds = 11;

correctAnswer = "";
var answeredCorrectly = false;

//function to prepare the game and offer instructions
$(document).ready(function startGame() {
    console.log("Ready set go");
    $("#instructions").text("Want to see how well you know your 90's music?  You will have 10 seconds to answer each question.  Click the button below to start!")
    $("#startDiv").html('<button id="startButton">Click here to start</button>');
   
});

//intermission function goes here:

function intermission() {
    console.log("intermission");
    phase++;
    console.log("phase: ", phase);
    $("#questionDiv").empty();
    $("#answerDiv").empty();
    seconds = 6;
    
    var countdownZero = setInterval(function(){
        console.log(seconds);
        seconds--;
        $("#gameTimer").text(seconds);
        if (seconds === 0) {
            clearInterval(countdownZero);
            console.log("Intermission has ended.")
            switch (phase) {
                case 2:
                    questionPhase2();
                    break;
                default: 
                    console.log("Switch Defaulted.")
            }
        }
    }, 1000);
}



//function which starts the game and all the timers
$(document).on("click", "#startButton", function(event) {
    event.preventDefault;
    console.log("clicked start");
    $("#instructions").empty();
    $("#gameTimerText").text("Seconds Remaining:");
    questionPhase1();

    //each question has its own questionPhase function.
    function questionPhase1() {
        console.log("Phase ", phase);
        $("#startDiv").empty();
        $("#questionDiv").text(`1. The (often one-man) band who's work revitalized use of the synthesizer, and revolutionized
        the presence of electronics in music is:`);
        $("#answerDiv").html(`<div id="question1" class="text-center">
        <input type="radio" name="group1" id="answer1A" value="1">Sound Garden </input>
        <input type="radio" name="group1" id="answer1B" value="2">Nine Inch Nails </input>
        <input type="radio" name="group1" id="answer1C" value="3">Beck </input>
        <input type="radio" name="group1" id="answer1D" value="4">Radiohead </input>
        </div>`);
        correctAnswer = "Nine Inch Nails";
        console.log("Correct Answer: ", correctAnswer);

        //timer function:
        var countdown1 = setInterval(function() {
            seconds--;
            console.log(seconds)
            $("#gameTimer").text(seconds);

            //check for the correct answer here
            if ($("#answer1B").is(':checked')) {
                console.log("Yup!");
                clearInterval(countdown1);
                wins++;
                console.log("wins", wins);
                
                intermission();
            }

            //check for the incorrect answer here

            if (seconds === 0) {
                clearInterval(countdown1);
                losses++;
                console.log("time's up for countdown1")
                intermission();
            }
        }, 1000);
    }

});

function questionPhase2() {
    console.log("Question Phase 2");
    seconds = 10;
}