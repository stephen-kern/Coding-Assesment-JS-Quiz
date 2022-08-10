//Variables

// timer
let countDown = 80;
let timer = document.getElementById("timer");

// containers
let scoreBox = document.getElementById("score-div");
let questionBox = document.getElementById("question-div");
let choicesBox = document.getElementById("multiple-choice");
let results = document.getElementById("results");
let buttonBox = document.getElementById("start-button-box");

// buttons and results
let scoresBtn = document.getElementById("view-scores");
let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", setTime);

// High score storage 
let highScoreStorage = [];
let storedScores = JSON.parse(window.localStorage.getItem("highScores"));

// Questions
 let questionNumber = 0;
let questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        Choices: ["<scripting>", "<javascript>", "<js>", "<script>"],
        answer: "<script>"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        Choices: ["The <body> section", "Both the <head> section and the <body> section are correct", "the <head> section"],
        answer: "Both the <head> section and the <body> section are correct"
    },
    {
        title: "The external JavaScript file must contain the <script> tag.",
        Choices: ["True", "False"],
        answer: "False"
    },
    {
        title: "How do you write 'Hello World' in an alert box?",
        Choices: ["alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "msgBox('Hello World');"],
        answer: "alert('Hello World');"
    },
    {
        title: "How do you create a function in JavaScript?",
        Choices: ["function myFunction()", "function = myFunction()", "function: myFunction()"],
        answer: "function myFunction()"
    },
    {
        title: "How do you call a function named 'myFunction'?",
        Choices: ["call myFunction()", "call function myFunction()", "myFunction()"],
        answer: "myFunction()"
    },
    {
        title: "How can you add a comment in a JavaScript?",
        Choices: ["'This is a comment'", "<!--This is a comment-->", "//This is a comment"],
        answer: "// This is a comment"
    },
    {
        title: "How to insert a comment that has more than one line?",
        Choices: ["/* this comment has more than one line */", "<!-- This comment has more than one line -->","// This comment has more than one line //"],
        answer: "/* this comment has more than one line */"
    },
    {
        title: "Which event occurs when the user clicks on an HTML element?",
        Choices: ["onclick", "onmouseclick", "onmouseover", "onchange"],
        answer: "onclick"
    },
    {
        title: "JavaScript is the same as Java.",
        Choices: ["True", "False"],
        answer: "False"
    }
];

// Score
let score = 0;