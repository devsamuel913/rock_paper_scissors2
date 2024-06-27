//Selectors
const rockButton = document.querySelector("#rock_id");
const paperButton = document.querySelector("#paper_id");
const scissorsButton = document.querySelector("#scissors_id");
const gameElements = document.querySelector(".game");

//Variables
let humanScore = 0;
let cpuScore = 0;


//Event listeners
rockButton.addEventListener("click",() => playRound("Rock"))

//Functions
function playRound(selectionValue){
    function cpuChoiceFunc(){
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === 1){
            return "Rock";
        }else if(randomNumber === 2){
            return "Paper";
        }else{
            return "Scissors";
        }
    }
    const cpuChoice = cpuChoiceFunc();
    if (cpuChoice === selectionValue){
        //I created the "Your choice is:" text on the DOM and assign it a class
        const humanChoiceText = document.createElement("div");
        humanChoiceText.classList.add("text");
        humanChoiceText.innerHTML = `Your choice is ${selectionValue}.`;
        gameElements.appendChild(humanChoiceText);

        //I created the "CPU choice is:" text on the DOM and assign it a class
        const cpuChoiceText = document.createElement("div");
        cpuChoiceText.classList.add("text");
        cpuChoiceText.innerHTML = `CPU choice is${cpuChoice}`;
        gameElements.appendChild(cpuChoiceText);




    }

    

}