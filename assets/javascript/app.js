//global variables
var wins = 0;
var losses = 0;
var seconds = $("#gameTimer").text();
var phase = 1;

var answeredCorrectly = false;

(function () {
    if (window.addEventListener) {
        window.addEventListener('domContentLoaded', domReady, fasle);
    } else {
        window.attachEvent('onload', domReady);
    }
});





// a function dynamically generates the instructions and a button

$(document).ready(function startGame() {
    console.log("Ready set go");
    $("#instructions").text("Want to see how well you know your 90's music?  You will have 10000000 seconds to answer each question.  Click the button below to start!")
    $("#startDiv").html('<button id="startButton">Click here to start</button>');
});

// clicking the button begins the game:
$(document).on("click", "#startButton", function (event) {
    event.preventDefault;
    console.log("clicked start");
    // seconds = 10;
    questionPhase1();

    function intermission() {
        countdownIntermission = setInterval(function () {
            console.log(seconds);
            seconds--;
            $("#gameTimer").text(seconds);
            if (answeredCorrectly === true) {
                $("#answerDiv").html("That's correct!<br>You've answered " + wins + " questions correctly so far.  Get ready for the next question!");
            } else {
                $("#answerDiv").html("Sorry not quite.<br>The correct answer was " + correctAnswer + "<br>You've answered " + wins + " so far.  Get ready for the next question!")
            }
            if (seconds === 0) {
                phase = phase + 1;
                console.log(phase)
                $('input:checked').removeAttr('checked');
                switch (phase) {
                    case 2:
                        console.log("Phase 2")
                        questionPhase2();
                        // seconds = 10;
                        break;
                    // case 3:
                    //     questionPhase3();
                    //     console.log("Phase 3")
                    //     break;
                    default:
                        console.log("default");
                }
            }

        }, 1000);

    }

    function questionPhase1() {
        $("#startDiv").empty();
        $("#questionDiv").text(`1. The (often one-man) band who's work revitalized use of the synthesizer, and revolutionized
        the presence of electronics in music is:`);
        $("#answerDiv").html(`<div id="question1" class="text-center">
        <input type="radio" name="group1" id="answer1A" value="1">Sound Garden </input>
        <input type="radio" name="group1" id="answer1B" value="2">Nine Inch Nails </input>
        <input type="radio" name="group1" id="answer1C" value="3">Beck </input>
        <input type="radio" name="group1" id="answer1D" value="4">Radiohead </input>
        </div>`);
        var countdown1 = setInterval(function () {
            seconds--;

            correctAnswer = "Nine Inch Nails";
            $("#gameTimer").text(seconds);
            if ($("#answer1B").is(':checked')) {
                clearInterval(countdown1);
                $("#questionDiv").empty();
                $("#answerDiv").empty();
                seconds = 5;
                answeredCorrectly = true;
                wins = wins + 1;
                intermission();
                console.log(correctAnswer);
            } else if ($("#answer1A").is(':checked') || $("#answer1C").is(':checked') || $("#answer1D").is(':checked')) {
                clearInterval(countdown1);
                $("#questionDiv").empty();
                $("#answerDiv").empty();
                seconds = 5;
                answeredCorrectly = false;
                losses = losses + 1;
                intermission();
                console.log(correctAnswer);
            } else if (seconds === 0) {
                clearInterval(countdown1);
                console.log("Time's up.")
                $("#questionDiv").empty();
                $("#answerDiv").empty();
                answeredCorrectly = false;
                losses = losses + 1;
                intermission();
            }
        }, 1000);
    }

    function questionPhase2() {
        seconds = 10;
        $("#startDiv").empty();
        $("#questionDiv").text(`2. If you ask someone to name a band from the 90s, chances are they will say:`);
        $("#answerDiv").html(`<div id="question2" class="text-center">
        <input type="radio" name="group2" id="answer2A" value="1">Tool </input>
        <input type="radio" name="group2" id="answer2B" value="2">Alice in Chains </input>
        <input type="radio" name="group2" id="answer2C" value="3">Nirvana </input>
        <input type="radio" name="group2" id="answer2D" value="4">Silver Chair </input>
    </div>`);
        countdown2 = setInterval(function () {
            seconds--;

            correctAnswer = "Nirvana";
            $("#gameTimer").text(seconds);
            if ($("#answer2C").is(':checked')) {
                clearInterval(countdown1);
                $("#questionDiv").empty();
                $("#answerDiv").empty();
                seconds = 5;
                answeredCorrectly = true;
                correct
                wins = wins + 1;
                intermission();
                console.log(correctAnswer);
                console.log("Answered Correctly? ", answeredCorrectly);
            } else if ($("#answer2A").is(':checked') || $("#answer2B").is(':checked') || $("#answer2D").is(':checked')) {
                clearInterval(countdown2);
                var checked = 
                $("#questionDiv").empty();
                $("#answerDiv").empty();
                seconds = 5;
                answeredCorrectly = false;
                losses = losses + 1;
                intermission();
                console.log(correctAnswer);
            } else if (seconds === 0) {
                clearInterval(countdown2);
                console.log("Time's up.")
                $("#questionDiv").empty();
                $("#answerDiv").empty();
                answeredCorrectly = false;
                losses = losses + 1;
                console.log("what's checked: ")
                intermission();
            }
        }, 1000);
    }


});


