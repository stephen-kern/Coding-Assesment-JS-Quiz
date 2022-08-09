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
        title: "",
        Choices: [],
        answer: ""
    },
    {
        title: "",
        Choices: [],
        answer: ""
    },
    {
        title: "",
        Choices: [],
        answer: ""
    },
    {
        title: "",
        Choices: [],
        answer: ""
    },
    {
        title: "",
        Choices: [],
        answer: ""
    },
    {
        title: "",
        Choices: [],
        answer: ""
    },
    {
        title: "",
        Choices: [],
        answer: ""
    },
    {
        title: "",
        Choices: [],
        answer: ""
    },
    {
        title: "",
        Choices: [],
        answer: ""
    },
    {
        title: "",
        Choices: [],
        answer: ""
    },
];

// Score
let score = 0;