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
//win/loss functions go here
function correctFunction() {
    console.log("Yup!");
    wins++;
    console.log("wins", wins);
    answeredCorrectly = true;                
    intermission();
}

function incorrectFunction() {
    console.log("Nope!");
    losses++
    console.log("Losses: ", losses);
    answeredCorrectly = false;
    console.log("correct answer: ", correctAnswer);
    intermission();
}

function timedOut() {
    console.log("Time's up!");
    losses++;

}


//intermission function goes here:

function intermission() {
    console.log("intermission");
    phase++;
    console.log("phase: ", phase);
    $("#questionDiv").empty();
    $("#answerDiv").empty();
    $("#gameTimerText").text("Get ready for the next Question!")
    seconds = 6;
    if (answeredCorrectly == true) {
        $("#questionDiv").text("That's correct!");
    } else {
        $("#questionDiv").text("Sorry!  The correct answer was " + correctAnswer);
    }
    
    $("#answerDiv").text("You've answered " + wins + " out of 11 questions correctly so far.")
    var countdownZero = setInterval(function(){
        console.log(seconds);
        seconds--;
        $("#gameTimer").text(seconds);
        if (seconds === 0) {
            clearInterval(countdownZero);
            console.log("Intermission has ended.")
            $("#gameTimerText").text("Seconds Remaining:")
            answeredCorrectly = false;
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
                clearInterval(countdown1);
                correctFunction();
            } else if ($("#answer1A").is(':checked') || $("#answer1C").is(':checked') || $("#answer1D").is(':checked')) {
               clearInterval(countdown1);
               incorrectFunction();
            }

            //check for the incorrect answer here

            if (seconds === 0) {
                clearInterval(countdown1);
                timedOut();
                intermission();
            }
        }, 1000);
    }

});

function questionPhase2() {
    console.log("phase: ", phase);
    seconds = 10;
    $("#questionDiv").text("2. If you asked someone to name only one band from the 90's, chances are that they will say:");
    $("#answerDiv").html(`<div id="question2" class="text-center">
        <input type="radio" name="group2" id="answer2A" value="1">Tool </input>
        <input type="radio" name="group2" id="answer2B" value="2">Alice in Chains </input>
        <input type="radio" name="group2" id="answer2C" value="3">Nirvana </input>
        <input type="radio" name="group2" id="answer2D" value="4">Silver Chair </input>
        </div>`);
        correctAnswer = "Nirvana";
        console.log("Correct Answer: ", correctAnswer);

        var countdown2 = setInterval(function() {
            seconds--;
            console.log(seconds);
            $("#gameTimer").text(seconds);

            if ($("#answer2C").is(':checked')) {
                clearInterval(countdown2);
                correctFunction();
            } else if ($("#answer2A").is(':checked') || $("#answer2B").is(':checked') || $("#answer2D").is(':checked')) {
                clearInterval(countdown2);
                incorrectFunction();
            }

            if (seconds === 0) {
                clearInterval(countdown2);
                timedOut();
                intermission();
            }
        }, 1000);
    



}