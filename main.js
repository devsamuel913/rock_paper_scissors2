//Selectors
const rockButton = document.querySelector("#rock_id");
const paperButton = document.querySelector("#paper_id");
const scissorsButton = document.querySelector("#scissors_id");
const gameElements = document.querySelector(".game");
const divHumanScore = document.querySelector("#userScore");
const divCpuScore = document.querySelector("#cpuScore");

//Variables
let humanScore = 0;
let cpuScore = 0;

//Event listeners
rockButton.addEventListener("click", () => playRound(" Rock"));
paperButton.addEventListener("click", () => playRound(" Paper"));
scissorsButton.addEventListener("click", () => playRound(" Scissors"));

//Functions
function playRound(selectionValue) {
    const cpuChoice = cpuChoiceFunc();

    // Selectors for text elements
    let humanChoiceText = gameElements.querySelector(".humanChoiceText");
    let cpuChoiceText = gameElements.querySelector(".cpuChoiceText");
    let resultText = gameElements.querySelector(".resultText");

    // Create elements if they don't exist
    if (!humanChoiceText) {
        humanChoiceText = document.createElement("div");
        humanChoiceText.classList.add("humanChoiceText");
        gameElements.appendChild(humanChoiceText);
    }
    if (!cpuChoiceText) {
        cpuChoiceText = document.createElement("div");
        cpuChoiceText.classList.add("cpuChoiceText");
        gameElements.appendChild(cpuChoiceText);
    }
    if (!resultText) {
        resultText = document.createElement("div");
        resultText.classList.add("resultText");
        gameElements.appendChild(resultText);
    }

    if (cpuChoice === selectionValue) {
        humanChoiceText.innerHTML = `Your choice is ${selectionValue}.`;
        cpuChoiceText.innerHTML = `CPU choice is ${cpuChoice}`;
        resultText.innerHTML = `${selectionValue} ties ${cpuChoice}`;
    } else {
        if ((selectionValue === " Rock" && cpuChoice === " Scissors") ||
            (selectionValue === " Scissors" && cpuChoice === " Paper") ||
            (selectionValue === " Paper" && cpuChoice === " Rock")) {
            humanChoiceText.innerHTML = `Your choice is ${selectionValue}`;
            cpuChoiceText.innerHTML = `CPU choice is ${cpuChoice}`;
            resultText.innerHTML = `${selectionValue} beats ${cpuChoice}, you win`;
            humanScore += 1;
            divHumanScore.innerHTML = "Your score is " + humanScore;
        } else {
            humanChoiceText.innerHTML = `Your choice is ${selectionValue}.`;
            cpuChoiceText.innerHTML = `CPU choice is ${cpuChoice}`;
            resultText.innerHTML = `${cpuChoice} beats ${selectionValue}, you lose`;
            cpuScore += 1;
            divCpuScore.innerHTML = "CPU score is " + cpuScore;
        }
    }
}

function cpuChoiceFunc() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return " Rock";
    } else if (randomNumber === 2) {
        return " Paper";
    } else {
        return " Scissors";
    }
}

 
//(gameElements.querySelector(".humanChoiceText")) && (gameElements.querySelector(".cpuChoiceText")) && (gameElements.querySelector(".tieText"))
    

