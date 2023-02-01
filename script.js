var firstScreen = document.querySelector("#firstScreen");
var title = document.querySelector("#title");
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
var questionEL = document.querySelector("#questions");
var choicesList = document.querySelector("#choices");
var feedback = document.querySelector("#feedback");
var initials = document.querySelector("#initials");
var scores = document.querySelector("#highscores");
var timeLeft = 60;

var questions = [
    "What is the shortcut command for statup code in index.html?",
    "What is considered the 'clothes' in coding",
];

var choices = [
    ["!", "@", "#", "$"],
    ["html", "css", "javascript", "ccc"],
];

var correct = [
    "!",
    "css",
];



function startTimer() {
    timer.textContent = "Time remaining: " + timeLeft;

        timer = setInterval(function() {
            timerCount--;
            timer.textContent = timerCount;
            if (timerCount <= 0) {
                clearInterval(timer);
            }
        }, 1000);    
    }

function startQuiz (questionElIndex) {
    choicesList.replaceChildren();
    questionEL.textContent = questions[questionElIndex];
    for (var i = 0; i<4; i += 1) {
        var list = document.createElement("li");
        list.textContent = choices[questionElIndex][i];
        list.addEventListener("clcik", function () {
            if (event.target.textContent === correct[questionElIndex]) {
                feedback.textContent = "Correct";
            } else {
                feedback.textContent = "Wrong, the correct answer is" + correct[questionIndex];
                timeLeft = -5;
                timer.textContent = "Time remaining " +timeLeft;
            } if (questionElIndex === 5) {
                choicesList.replaceChildren();
                questionEL.textContent = "";
                endGame();
            }
        })
        choicesList.appendChild(list);
    }
}


