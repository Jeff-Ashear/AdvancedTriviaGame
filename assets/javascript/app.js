var wins = 0;
var losses = 0;

var phase = 1;
var seconds = 11;

correctAnswer = "";
var answeredCorrectly = false;

var backgrounds = [
    "./assets/images/crowdsurfing.jpg",
    "./assets/images/nin.png",
    "./assets/images/beck.jpg",
    "./assets/images/REM.jpg",
    "./assets/images/Bjork2.jpg",
    "./assets/images/zappa.jpeg",
    "./assets/images/soundgarden.jpg",
    "./assets/images/trent.jpg",
    "./assets/images/radiohead.jpg",
    "./assets/images/tom-morello.jpg",
    "./assets/images/lateralis.jpg",
    "./assets/images/GNR.jpg",
    "./assets/images/janesaddiction.jpg",
    "./assets/images/tool.jpg",
    "./assets/images/aliceInChains.jpg",
    "./assets/images/lateralis2.png",
    "./assets/images/trent2.jpg",
    "./assets/images/Rage-Against-the-Machine.jpg",
    "./assets/images/frank.jpg",
    "./assets/images/kurtd.jpg",
    "./assets/images/Mr-Bungle-1.jpg",
    "./assets/images/Bjork2.jpg",
    "./assets/images/ten.jpg",
    "./assets/images/Stephen-Perkins-26.jpg",
    
    "./assets/images/crowdsurfing.jpg",
    "./assets/images/nin.png",
    "./assets/images/beck.jpg",
    "./assets/images/REM.jpg",
    "./assets/images/Bjork2.jpg",
    "./assets/images/zappa.jpeg",
    "./assets/images/soundgarden.jpg",
    "./assets/images/trent.jpg",
    "./assets/images/radiohead.jpg",
    "./assets/images/tom-morello.jpg",
    "./assets/images/lateralis.jpg",
    "./assets/images/GNR.jpg",
    "./assets/images/janesaddiction.jpg",
    "./assets/images/tool.jpg",
    "./assets/images/aliceInChains.jpg",
    "./assets/images/lateralis2.png",
    "./assets/images/trent2.jpg",
    "./assets/images/Rage-Against-the-Machine.jpg",
    "./assets/images/frank.jpg",
    "./assets/images/kurtd.jpg",
    "./assets/images/Mr-Bungle-1.jpg",
    "./assets/images/Bjork2.jpg",
    "./assets/images/ten.jpg",
    "./assets/images/Stephen-Perkins-26.jpg",

]

//function to prepare the game and offer instructions
$(document).ready(function startGame() {
    console.log("Ready set go");
    $("#instructions").text("Want to see how well you know your 90's music?  You will have 10 seconds to answer each question.  Click the button below to start!")
    $("#startDiv").html('<button id="startButton">Click here to start</button>');

});
//win/loss/timedOut/gameOver functions go here
function correctFunction() {
    if (phase < 12) {
        console.log("Yup!");
        wins++;
        console.log("wins", wins);
        answeredCorrectly = true;
        intermission();
    } else {
        gameOverFunction();
    }
}

function incorrectFunction() {
    if (phase < 12) {
        console.log("Nope!");
        losses++
        console.log("Losses: ", losses);
        answeredCorrectly = false;
        console.log("correct answer: ", correctAnswer);
        intermission();
    } else {
        gameOverFunction();
    }
}

function timedOut() {
    if (phase < 12) {
        console.log("Time's up!");
        losses++;
        intermission();
    } else {
        gameOverFunction();
    }
}

//when all questions have been answered or timed out the game ends.
function gameOverFunction() {
    console.log("Game Over")
    seconds = 6;
    $("#gameTimerText").text("You've answered all the questions! Stay tuned for some reverse trivia:");
    $("#questionDiv").empty();
    $("#questionDiv").text("You answered " + wins + " questions correctly.")
    $("#answerDiv").empty();
    var countdown12 = setInterval(function () {
        seconds--;
        console.log(seconds);
        $("#gameTimer").text(seconds);
        if (seconds === 0) {
            clearInterval(countdown12);
            triviaTidBit();
        }
    }, 1000);
}

//reward and restart screen and function
function triviaTidBit() {
    console.log("Restart?");
    seconds = 10;
    phase = 1;
    answeredCorrectly = false;
    wins = 0;
    losses = 0;
    $("#gameTimerText").text("Want to try again?  Click the button bellow.");
    $("#promptField").html("<br><br><br><br><h3>Thanks for playing.  Take with you this delicious morsel of 90’s music lore trivia:  The icon of this era, Nirvana, is credited with inventing the Seattle Sound (otherwise known as Grunge).  However this isn’t exactly true.  Many argue that Joshua Homme did so with his band, Kyuss, in Palm Desert, California in the late 80’s.  Kyuss enjoyed only a small cultish fame.  <br> People would gather for huge, drug-fueled concert parties in remote locations deep in the desert wilderness; something like a primitive version of Burning Man.  The concerts would last for literally days without a break.  In this setting bands were expected to play for hours.  What emerged was something incorporating early metal combined with the long, meandering forms of jam bands like the Phish or Widespread Panic.  Kyuss grew to dominate this scene, and then eventually disbanded without ever achieving mainstream popularity.  <br>  Seattle bands discovered this sound and made it wildly popular.  The 90’s came and went, and the popularity of this style faded.  <br>  Later Joshua Homme founded a new band, Queens of the Stone Age, which is much more successful than Kyuss was.  The name of this band is actually a brief description of Homme’s misplacement in this history.  The Stone Age, is 90’s grunge.  And while he was never the king, his bands were always the Queens behind the scenes.");
    $("#startDiv").html("<button>Click here to play again.</button>");
    $("#flavorPics").html('<img src="./assets/images/kyuss.jpg">');
    $(document).on("click", "#startDiv", function (event) {
        event.preventDefault;
        $("#gameTimerText").empty();
        $("#startDiv").empty();
        $("#promptField").empty();
        questionPhase1();
    });
}







//intermission function goes here:
function intermission() {
    console.log("intermission");
    phase++;
    console.log("phase: ", phase);
    $("#questionDiv").empty();
    $("#answerDiv").empty();
    $("#gameTimerText").text("Get ready for the next Question!")
    seconds = 3;
    if (answeredCorrectly == true) {
        $("#questionDiv").text("That's correct!");
    } else {
        $("#questionDiv").text("Sorry!  The correct answer was " + correctAnswer);
    }

    $("#answerDiv").text("You've answered " + wins + " out of 11 questions correctly so far.")
    var countdownZero = setInterval(function () {
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
                case 3:
                    questionPhase3();
                    break;
                case 4:
                    questionPhase4();
                    break;
                case 5:
                    questionPhase5();
                    break;
                case 6:
                    questionPhase6();
                    break;
                case 7:
                    questionPhase7();
                    break;
                case 8:
                    questionPhase8();
                    break;
                case 9:
                    questionPhase9();
                    break;
                case 10:
                    questionPhase10();
                    break;
                case 11:
                    questionPhase11();
                    break;
                default:
                    console.log("Switch Defaulted.")
            }
        }
    }, 1000);
}


//function which starts the game and all the timers
$(document).on("click", "#startButton", function (event) {
    event.preventDefault;
    console.log("clicked start");
    $("#instructions").empty();
    $("#gameTimerText").text("Seconds Remaining:");
    questionPhase1();
});

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
    var countdown1 = setInterval(function () {
        seconds--;
        console.log(seconds)
        $("#gameTimer").text(seconds);
        $("#flavorPics").html('<img src="' + backgrounds[seconds] + '">');

        //check for the correct answer here
        if ($("#answer1B").is(':checked')) {
            clearInterval(countdown1);
            $("#flavorPics").html('<img src="./assets/images/trent2.jpg">');
            correctFunction();
        } else if ($("#answer1A").is(':checked') || $("#answer1C").is(':checked') || $("#answer1D").is(':checked')) {
            clearInterval(countdown1);
            incorrectFunction();
        }

        //check for the incorrect answer here

        if (seconds === 0) {
            clearInterval(countdown1);
            timedOut();
        }
    }, 1000);
}

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

    var countdown2 = setInterval(function () {
        seconds--;
        console.log(seconds);
        $("#gameTimer").text(seconds);
        $("#flavorPics").html('<img src="' + backgrounds[seconds + 1] + '">');
        if ($("#answer2C").is(':checked')) {
            clearInterval(countdown2);
            $("#flavorPics").html('<img src="./assets/images/kurtd.jpg">');
            correctFunction();
        } else if ($("#answer2A").is(':checked') || $("#answer2B").is(':checked') || $("#answer2D").is(':checked')) {
            clearInterval(countdown2);
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown2);
            timedOut();
        }
    }, 1000);
}

function questionPhase3() {
    seconds = 10;
    $("#questionDiv").text("3. The 90's act most heavily influenced by Bob Dylan's lyrics is:");
    $("#answerDiv").html(`<div id="question3" class="text-center">
    <input type="radio" name="group3" id="answer3A" value="1">Beck </input>
    <input type="radio" name="group3" id="answer3B" value="2">Pavement </input>
    <input type="radio" name="group3" id="answer3C" value="3">Foo Fighters </input>
    <input type="radio" name="group3" id="answer3D" value="4">The Black Crows </input>
    </div>`);
    correctAnswer = "Beck";
    var countdown3 = setInterval(function () {
        seconds--;
        console.log(seconds);
        $("#gameTimer").text(seconds);
        $("#flavorPics").html('<img src="' + backgrounds[seconds * 2] + '">');
        if ($("#answer3A").is(':checked')) {
            clearInterval(countdown3);
            $("#flavorPics").html('<img src="./assets/images/beck.jpg">');
            correctFunction();
        } else if ($("#answer3B").is(':checked') || $("#answer3C").is(':checked') || $("#answer3D").is(':checked')) {
            clearInterval(countdown3);
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown3);
            timedOut();
        }
    }, 1000);
}

function questionPhase4() {
    seconds = 10;
    $("#questionDiv").text('4. The "Seattle Sound" made famous by Nirvana was invented by_____ in _____.');
    $("#answerDiv").html(`<div id="question4" class="text-center">
    <input type="radio" name="group4" id="answer4A" value="1">Kyuss in L.A.</input>
    <input type="radio" name="group4" id="answer4B" value="2">Pearl Jam in Seattle</input>
    <input type="radio" name="group4" id="answer4C" value="3">Bush in London, England</input>
    <input type="radio" name="group4" id="answer4D" value="4">Nirvana in Seattle</input>
    </div>`);
    correctAnswer = "Kyuss in L.A.";
    var countdown4 = setInterval(function () {
        seconds--;
        console.log(seconds);
        $("#gameTimer").text(seconds);
        $("#flavorPics").html('<img src="' + backgrounds[seconds + 3] + '">')
        if ($("#answer4A").is(':checked')) {
            clearInterval(countdown4);
            $("#flavorPics").html('<img src="./assets/images/kyuss.jpg">');
            correctFunction();
        } else if ($("#answer4B").is(':checked') || $("#answer4C").is(':checked') || $("#answer4D").is(':checked')) {
            clearInterval(countdown4);
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown4);
            timedOut();
        }
    }, 1000);
}

function questionPhase5() {
    seconds = 10;
    $("#questionDiv").text('5. The band best known for combining hip-hop and grunge, as well as exquisite guitar-craft is:');
    $("#answerDiv").html(`<div id="question5" class="text-center">
    <input type="radio" name="group5" id="answer5A" value="1">Nick Cave and the Bad Seeds</input>
    <input type="radio" name="group5" id="answer5B" value="2">Stone Temple Pilots</input>
    <input type="radio" name="group5" id="answer5C" value="3">Red Hot Chili Peppers</input>
    <input type="radio" name="group5" id="answer5D" value="4">Rage Against the Machine</input>
    </div>`);
    correctAnswer = "Rage Against the Machine";
    var countdown5 = setInterval(function () {
        seconds--;
        console.log(seconds);
        $("#gameTimer").text(seconds);
        $("#flavorPics").html('<img src="' + backgrounds[seconds + 4] + '">');
        if ($("#answer5D").is(':checked')) {
            clearInterval(countdown5);
            $("#flavorPics").html('<img src="./assets/images/Rage-Against-the-Machine.jpg">');
            correctFunction();
        } else if ($("#answer5A").is(':checked') || $("#answer5B").is(':checked') || $("#answer5C").is(':checked')) {
            clearInterval(countdown5);
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown5);
            timedOut();
        }
    }, 1000);
}

function questionPhase6() {
    seconds = 10;
    $("#questionDiv").text(`6. Mike Patton heads the band_____, known for combining avante garde jazz, disco, funk and death
    metal.`);
    $("#answerDiv").html(`<div id="question6" class="text-center">
    <input type="radio" name="group6" id="answer6A" value="1">Primus</input>
    <input type="radio" name="group6" id="answer6B" value="2">Mr. Bungle</input>
    <input type="radio" name="group6" id="answer6C" value="3">Faith No More</input>
    <input type="radio" name="group6" id="answer6D" value="4">Temple of the Dog</input>
    </div>`);
    correctAnswer = "Mr. Bungle";
    var countdown6 = setInterval(function () {
        seconds--;
        console.log(seconds);
        $("#flavorPics").html('<img src="' + backgrounds[seconds * 3] + '">');
        $("#gameTimer").text(seconds);
        if ($("#answer6B").is(':checked')) {
            clearInterval(countdown6);
            $("#flavorPics").html('<img src="./assets/images/Mr-Bungle-1.jpg">');
            correctFunction();
        } else if ($("#answer6A").is(':checked') || $("#answer6C").is(':checked') || $("#answer6D").is(':checked')) {
            clearInterval(countdown6);
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown6);
            timedOut();
        }
    }, 1000);
}

function questionPhase7() {
    seconds = 10;
    $("#questionDiv").text(`7. Experimental, playful, sophisticated, conceptual, complex, and swedish are all adjectives
        applying to which artist:`);
    $("#answerDiv").html(`<div id="question7" class="text-center">
    <input type="radio" name="group7" id="answer7A" value="1">Bjork</input>
    <input type="radio" name="group7" id="answer7B" value="2">Kennhy Wayne Shepard</input>
    <input type="radio" name="group7" id="answer7C" value="3">Jeff Buckley</input>
    <input type="radio" name="group7" id="answer7D" value="4">Jamiroquai</input>
    </div>`);
    correctAnswer = "Bjork";
    var countdown7 = setInterval(function () {
        seconds--;
        console.log(seconds);
        $("#gameTimer").text(seconds);
        $("#flavorPics").html('<img src="' + backgrounds[seconds + 6] + '">');
        if ($("#answer7A").is(':checked')) {
            clearInterval(countdown7);
            $("#flavorPics").html('<img src="./assets/images/Bjork1.jpg">');
            correctFunction();
        } else if ($("#answer7B").is(':checked') || $("#answer7C").is(':checked') || $("#answer7D").is(':checked')) {
            clearInterval(countdown7);
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown7);
            timedOut();
        }
    }, 1000);
}

function questionPhase8() {
    seconds = 10;
    $("#questionDiv").text(`8. The guitarist for the band Radiohead is:`);
    $("#answerDiv").html(`<div id="question8" class="text-center">
    <input type="radio" name="group8" id="answer8A" value="1">Tom Morello</input>
    <input type="radio" name="group8" id="answer8B" value="2">Johnny Greenwood</input>
    <input type="radio" name="group8" id="answer8C" value="3">John Fuentes</input>
    <input type="radio" name="group8" id="answer8D" value="4">Dave Navarro</input>
    </div>`);
    correctAnswer = "Johnny Greenwood";
    var countdown8 = setInterval(function () {
        seconds--;
        console.log(seconds);
        $("#gameTimer").text(seconds);
        $("#flavorPics").html('<img src="' + backgrounds[seconds + 7] + '">');
        if ($("#answer8B").is(':checked')) {
            clearInterval(countdown8);
            $("#flavorPics").html('<img src="./assets/images/jonny.jpg">');
            correctFunction();
        } else if ($("#answer8A").is(':checked') || $("#answer8C").is(':checked') || $("#answer8D").is(':checked')) {
            clearInterval(countdown8);
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown8);
            timedOut();
        }
    }, 1000);
}

function questionPhase9() {
    seconds = 10;
    $("#questionDiv").text(`9. The drummer for the band Jane's Addiction is:`);
    $("#answerDiv").html(`<div id="question9" class="text-center">
    <input type="radio" name="group9" id="answer9A" value="1">Danny Carey</input>
    <input type="radio" name="group9" id="answer9B" value="2">Jon Fishman</input>
    <input type="radio" name="group9" id="answer9C" value="3">Matt Cameron</input>
    <input type="radio" name="group9" id="answer9D" value="4">Stephen Perkins</input>
    </div>`);
    correctAnswer = "Stephen Perkins";
    var countdown9 = setInterval(function () {
        seconds--;
        $("#flavorPics").html('<img src="' + backgrounds[seconds + 8] + '">');
        console.log(seconds);
        $("#gameTimer").text(seconds);
        if ($("#answer9D").is(':checked')) {
            clearInterval(countdown9);
            $("#flavorPics").html('<img src="./assets/images/Stephen-Perkins-26.jpeg">');
            correctFunction();
        } else if ($("#answer9A").is(':checked') || $("#answer9B").is(':checked') || $("#answer9C").is(':checked')) {
            clearInterval(countdown9);
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown9);
            timedOut();
        }
    }, 1000);
}

function questionPhase10() {
    seconds = 10;
    $("#questionDiv").text(`10. Pearl Jam's first album was titled:`);
    $("#answerDiv").html(`<div id="question10" class="text-center">
    <input type="radio" name="group10" id="answer10A" value="1">Vitology</input>
    <input type="radio" name="group10" id="answer10B" value="2">Ten</input>
    <input type="radio" name="group10" id="answer10C" value="3">Binaural</input>
    <input type="radio" name="group10" id="answer10D" value="4">No Code</input>
    </div>`);
    correctAnswer = "Ten";
    var countdown10 = setInterval(function () {
        seconds--;
        console.log(seconds);
        $("#gameTimer").text(seconds);
        $("#flavorPics").html('<img src="' + backgrounds[seconds + 4] + '">');
        if ($("#answer10B").is(':checked')) {
            clearInterval(countdown10);
            $("#flavorPics").html('<img src="./assets/images/ten.jpg">');
            correctFunction();
        } else if ($("#answer10A").is(':checked') || $("#answer10C").is(':checked') || $("#answer10D").is(':checked')) {
            clearInterval(countdown10);
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown10);
            timedOut();
        }
    }, 1000);
}

function questionPhase11() {
    seconds = 10;
    $("#questionDiv").text(`11. Which act combines rock, blues, experimental jazz, classical, avante guarde, pop, and doo-wap?`);
    $("#answerDiv").html(`<div id="question11" class="text-center">
    <input type="radio" name="group11" id="answer11A" value="1">They Might Be Giants</input>
    <input type="radio" name="group11" id="answer11B" value="2">Faith No More</input>
    <input type="radio" name="group11" id="answer11C" value="3">Frank Zappa</input>
    <input type="radio" name="group11" id="answer11D" value="4">Ween</input>
    </div>`);
    correctAnswer = "Frank Zappa";
    var countdown11 = setInterval(function () {
        seconds--;
        $("#flavorPics").html('<img src="' + backgrounds[seconds] + '">');
        console.log(seconds);
        $("#gameTimer").text(seconds);
        if ($("#answer11C").is(':checked')) {
            clearInterval(countdown11);
            phase++;
            wins++;
            $("#flavorPics").html('<img src="./assets/images/frank.jpg">');
            correctFunction();
        } else if ($("#answer11A").is(':checked') || $("#answer11B").is(':checked') || $("#answer11D").is(':checked')) {
            clearInterval(countdown11);
            phase++;
            losses++;
            incorrectFunction();
        }
        if (seconds === 0) {
            clearInterval(countdown11);
            phase++;
            losses++;
            timedOut();
        }
    }, 1000);
}