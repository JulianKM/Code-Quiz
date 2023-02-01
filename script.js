var firstScreen = document.querySelector("#firstScreen");
var title = document.querySelector("#title");
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
var questionEL = document.querySelector("#questions");
var choicesList = document.querySelector("#choices");
var feedback = document.querySelector("#feedback");
var initial = document.querySelector("#initial");
var scores = document.querySelector("#highscores");
var timeLeft = 60;
var timerEl;

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

        timerEl = setInterval(function() {
            timeLeft--;
            timer.textContent = "Time remaining: " + timeLeft
            if (timeLeft <= 0) {
                endQuiz();
            }
        }, 1000);    
    }
startBtn.addEventListener("click", function(){
    firstScreen.style.display = "none";
    startTimer();
    startQuiz(0);
});

function startQuiz (questionElIndex) {
    choicesList.replaceChildren();
    questionEL.textContent = questions[questionElIndex];
    for (var i = 0; i < 4; i += 1) {
        var list = document.createElement("li");
        list.textContent = choices[questionElIndex][i];
        list.addEventListener("click", function () {
            if (event.target.textContent === correct[questionElIndex]) {
                feedback.textContent = "Correct ";
            } else {
                feedback.textContent = "Wrong, the correct answer is " + correct[questionElIndex];
                timeLeft -= 5;
                timer.textContent = "Time remaining " +timeLeft;
            } if (questionElIndex === 1) {
                choicesList.replaceChildren();
                questionEL.textContent = "";
                endQuiz();
            } else {
                startQuiz(questionElIndex + 1);
            }
        });
        choicesList.appendChild(list);
    }
}

function endQuiz() {
    initial.textContent = "Enter your initial ";
    var initialBtn = document.createElement("input");
    initialBtn.setAttribute("type", "text");
    initial.appendChild(initialBtn);
    var saveBtn = document.createElement("input");
    saveBtn.setAttribute("type", "button");
    saveBtn.setAttribute("value", "save");
    initial.appendChild(saveBtn);
    timer.style.display = "none";
    saveBtn.addEventListener("click", function(){
        var quizScore = document.createElement("li");
        quizScore.textContent = "Initial and Score " + initialBtn.value + " " + timeLeft
        scores.appendChild(quizScore)
    });
    clearInterval(timerEl);
}