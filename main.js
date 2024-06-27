//Selectors
const rockButton = document.querySelector("#rock_id");
const paperButton = document.querySelector("#paper_id");
const scissorsButton = document.querySelector("#scissors_id");
const gameElements = document.querySelector(".game");

//Variables
let humanScore = 0;
let cpuScore = 0;


//Event listeners
rockButton.addEventListener("click",() => playRound(" Rock"))
paperButton.addEventListener("click", () => playRound(" Paper"))
scissorsButton.addEventListener("click", () => playRound(" Scissors"))

//Functions
;
function playRound(selectionValue){
    const cpuChoice = cpuChoiceFunc()
    function cpuChoiceFunc(){
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === 1){
            return " Rock";
        }else if(randomNumber === 2){
            return " Paper";
        }else{
            return " Scissors";
        }
    }
   
    if (cpuChoice === selectionValue){
        //I created the "Your choice is:" text on the DOM and assign it a class
        const humanChoiceText = document.createElement("div");
        humanChoiceText.classList.add("text");
        humanChoiceText.innerHTML = `Your choice is ${selectionValue}.`;
        gameElements.appendChild(humanChoiceText);

        //I created the "CPU choice is:" text on the DOM and assign it a class
        const cpuChoiceText = document.createElement("div");
        cpuChoiceText.classList.add("text");
        cpuChoiceText.innerHTML = `CPU choice is ${cpuChoice}`;
        gameElements.appendChild(cpuChoiceText);

        //I created the text that says "cpuChoice ties selectionValue"

        const tieText = document.createElement("div");
        tieText.classList.add("text");
        tieText.innerHTML = `${selectionValue} ties ${cpuChoice}`;
        gameElements.appendChild(tieText);

    }else if((selectionValue === " Rock" && cpuChoice === " Scissors") ||
    (selectionValue === " Paper" && cpuChoice === " Rock") ||
    (selectionValue === " Scissors" && cpuChoice === " Paper")){
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

         //Human wins message
         const humanWin = document.createElement("div");
         humanWin.classList.add("text");
         humanWin.innerHTML = `You win!`;
         gameElements.appendChild(humanWin);

         //+1 point for humanScore
         humanScore += 1;
         const hPoints = document.createElement("div");
         hPoints.classList.add("text");
         hPoints.innerHTML = `Your score is ${humanScore} points.`;
         gameElements.appendChild(hPoints)
 }else{
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

     //CPU wins message
     const cpuWin = document.createElement("div");
     cpuWin.classList.add("text");
     cpuWin.innerHTML = `CPU wins and you lose!`;
     gameElements.appendChild(cpuWin);

     //+1 point for cpuScore
     cpuScore += 1;
     const cpuPoints = document.createElement("div");
     cpuPoints.classList.add("text");
     cpuPoints.innerHTML = `CPU score is ${cpuScore} points.`;
     gameElements.appendChild(cpuPoints);

 }

    

}