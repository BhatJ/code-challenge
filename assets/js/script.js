
window.onload = function() { 
    setInterval(checkTime, 1000);
}

var questionsArr = [
    {
        "question": "Commonly used data types DO NOT include",
        "option1": "1. strings",
        "option2": "2. booleans",
        "option3": "3. alerts",
        "option4": "4. numbers",
        "answer": "option-3"
    },
    {
        "question": "String values must be enclosed within ___ when being to assigned to variables",
        "option1": "1. quotes",
        "option2": "2. curley brackets",
        "option3": "3. parentheses",
        "option4": "4. commas",
        "answer": "option-1"
    },
    {
        "question": "Arrays in JavaScript can be used to store ___.",
        "option1": "1. numbers and strings",
        "option2": "2. other arrays",
        "option3": "3. booleans",
        "option4": "4. all of the above",
        "answer": "option-4"
    },
    {
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "option1": "1. JavaScript",
        "option2": "2. terminal/bash",
        "option3": "3. for loops",
        "option4": "4. console.log",
        "answer": "option-4"
    }
];

var timeEl = document.querySelector("#time");
var startQuizBtn = document.querySelector("#start-button");
var answersEl = document.querySelector("#answers");
var titleTextEl = document.querySelector("#title-text");
var optionList = document.querySelector("#option-list");
var answersTextEl = document.querySelector("#answers-text");
var resultEl = document.querySelector("#result");
var submitEl = document.querySelector("#submit");
var submitBtn = document.querySelector("#submit-button");
var backEl = document.querySelector("#go-back");
var goBackBtn = document.querySelector("#go-back-button");
var clearScoresBtn = document.querySelector("#clear-scores-button");

var count = 75;
var questionIndex = 0;
var quizStarted = false;

function checkTime() {

    if (quizStarted == true)
    {
        if (count === 0)
        {
            completeQuiz();
        }

        timeEl.textContent = count;
        count--;
    }
}

function loadNextQuestion() {
    titleTextEl.textContent = questionsArr[questionIndex].question;
    optionList.children[0].children[0].textContent = questionsArr[questionIndex].option1;
    optionList.children[1].children[0].textContent = questionsArr[questionIndex].option2;
    optionList.children[2].children[0].textContent = questionsArr[questionIndex].option3;
    optionList.children[3].children[0].textContent = questionsArr[questionIndex].option4;

    quizStarted = true;
}

function completeQuiz() {
    titleTextEl.textContent = "All done!";
    optionList.setAttribute("style", "display: none");
    answersTextEl.setAttribute("style", "display: block");
    answersTextEl.textContent = "Your score is " + count;
    quizStarted = false;

    submitEl.setAttribute("style", "display: block");
}

function resetQuiz() {
    count = 75;
    questionIndex = 0;
    quizStarted = false;

    titleTextEl.textContent = "Coding Quiz Challenge!";
    answersTextEl.setAttribute("style", "display: block");
    answersTextEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoreTime by ten seconds!";
    backEl.setAttribute("style", "display: none");
    startQuizBtn.setAttribute("style", "display: flex");
    startQuizBtn.setAttribute("style", "justify-content: space-around");
}

startQuizBtn.addEventListener("click", function() {
    
    // Show the question buttons and hide the quiz text
    optionList.setAttribute("style", "display: block");
    answersTextEl.setAttribute("style", "display: none");

    loadNextQuestion();

    // hide the start button
    startQuizBtn.setAttribute("style", "display: none");
});

answersEl.addEventListener("click", function(event) {
    var element = event.target;
    answer = element.id;

    // Check that an answer button was clicked
    if ( (answer != "option-1") && (answer != "option-2") && (answer != "option-3") && (answer != "option-4") )
    {
        console.log("Not an option button");
        return;
    }

    resultEl.setAttribute("style", "display: block");
    if (answer == questionsArr[questionIndex].answer)
    {
        resultEl.textContent = "Correct!";
    } else
    {
        resultEl.textContent = "Wrong!";

        // Subtract 10 seconds
        if (count < 10)
        {
            count = 0;
        } else
        {
            count = count - 10;
        }
    }

    setTimeout(function() {
        resultEl.setAttribute("style", "display: none");
        resultEl.textContent = "";

        questionIndex++;
        if (questionIndex == questionsArr.length)
        {
            completeQuiz();
        } else
        {
            loadNextQuestion();
        }
    }, 2000);  
});

submitBtn.addEventListener("click", function() {
    titleTextEl.textContent = "High Scores!";
    optionList.setAttribute("style", "display: none");
    answersTextEl.setAttribute("style", "display: none");

    var initials = submitBtn.textContent;
    console.log(initials);

    submitEl.setAttribute("style", "display: none");
    backEl.setAttribute("style", "display: block");
});

goBackBtn.addEventListener("click", function() {
   resetQuiz();
});

clearScoresBtn.addEventListener("click", function() {
    
});
