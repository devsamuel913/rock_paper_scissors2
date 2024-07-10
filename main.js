// Selectors
const rockButton = document.querySelector("#rock_id");
const paperButton = document.querySelector("#paper_id");
const scissorsButton = document.querySelector("#scissors_id");
const gameElements = document.querySelector(".game1");
const game2Elements = document.querySelector(".game2");
const divHumanScore = document.querySelector("#userScore");
const divCpuScore = document.querySelector("#cpuScore");


// Variables
let humanScore = 0;
let cpuScore = 0;


// Event listeners
rockButton.addEventListener("click", () => playRound(" Rock"));
paperButton.addEventListener("click", () => playRound(" Paper"));
scissorsButton.addEventListener("click", () => playRound(" Scissors"));



// Functions
function playRound(selectionValue) {
    if((humanScore < 5) && (cpuScore < 5)){
        const cpuChoice = cpuChoiceFunc();

        // Selectors for text elements
        let humanChoiceText = game2Elements.querySelector(".humanChoiceText");
        let cpuChoiceText = game2Elements.querySelector(".cpuChoiceText");
        let resultText = game2Elements.querySelector(".resultText");

        // Create elements if they don't exist
        if (!humanChoiceText) {
            humanChoiceText = document.createElement("div");
            humanChoiceText.classList.add("humanChoiceText");
            game2Elements.appendChild(humanChoiceText);
        }
        
        if (!cpuChoiceText) {
            cpuChoiceText = document.createElement("div");
            cpuChoiceText.classList.add("cpuChoiceText");
            game2Elements.appendChild(cpuChoiceText);
        }
        
        if (!resultText) {
            resultText = document.createElement("div");
            resultText.classList.add("resultText");
            game2Elements.appendChild(resultText);
        }

        humanChoiceText.innerHTML = `Your choice is ${selectionValue}`;
        cpuChoiceText.innerHTML = `CPU choice is ${cpuChoice}`;

        if (cpuChoice === selectionValue) {

            if(selectionValue === " Rock"){
                humanChoiceText.classList.remove("Paper");
                humanChoiceText.classList.remove("Scissors");
                humanChoiceText.classList.add("Rock");
            }
            if(selectionValue === " Paper"){
                humanChoiceText.classList.remove("Rock");
                humanChoiceText.classList.remove("Scissors");
                humanChoiceText.classList.add("Paper");
            }
            if(selectionValue === " Scissors"){
                humanChoiceText.classList.remove("Rock");
                humanChoiceText.classList.remove("Paper");
                humanChoiceText.classList.add("Scissors");
            }


            if(cpuChoice === " Rock"){
                cpuChoiceText.classList.remove("Paper");
                cpuChoiceText.classList.remove("Scissors");
                cpuChoiceText.classList.add("Rock");
            }
            if(cpuChoice === " Paper"){
                cpuChoiceText.classList.remove("Rock");
                cpuChoiceText.classList.remove("Scissors");
                cpuChoiceText.classList.add("Paper");
            }
            if(cpuChoice === " Scissors"){
                cpuChoiceText.classList.remove("Rock");
                cpuChoiceText.classList.remove("Paper");
                cpuChoiceText.classList.add("Scissors");
            }



            resultText.innerHTML = `${selectionValue} ties ${cpuChoice}`;
            resultText.classList.remove("lose");
            resultText.classList.remove("win");
            resultText.classList.add("tie")
        } else {
        

            if ((selectionValue === " Rock" && cpuChoice === " Scissors") ||
                (selectionValue === " Scissors" && cpuChoice === " Paper") ||
                (selectionValue === " Paper" && cpuChoice === " Rock")) {

                resultText.innerHTML = `${selectionValue} beats ${cpuChoice}, you win`;

                if(selectionValue === " Rock"){
                    humanChoiceText.classList.remove("Paper");
                    humanChoiceText.classList.remove("Scissors");
                    humanChoiceText.classList.add("Rock");
                }
                if(selectionValue === " Paper"){
                    humanChoiceText.classList.remove("Rock");
                    humanChoiceText.classList.remove("Scissors");
                    humanChoiceText.classList.add("Paper");
                }
                if(selectionValue === " Scissors"){
                    humanChoiceText.classList.remove("Rock");
                    humanChoiceText.classList.remove("Paper");
                    humanChoiceText.classList.add("Scissors");
                }


                if(cpuChoice === " Rock"){
                    cpuChoiceText.classList.remove("Paper");
                    cpuChoiceText.classList.remove("Scissors");
                    cpuChoiceText.classList.add("Rock");
                }
                if(cpuChoice === " Paper"){
                    cpuChoiceText.classList.remove("Rock");
                    cpuChoiceText.classList.remove("Scissors");
                    cpuChoiceText.classList.add("Paper");
                }
                if(cpuChoice === " Scissors"){
                    cpuChoiceText.classList.remove("Rock");
                    cpuChoiceText.classList.remove("Paper");
                    cpuChoiceText.classList.add("Scissors");
                }




                resultText.classList.remove("lose");
                resultText.classList.add("win")
                humanScore += 1;
                divHumanScore.innerHTML = "Your score is " + humanScore;

                
                
                
            } else {
                
                if(selectionValue === " Rock"){
                    humanChoiceText.classList.remove("Paper");
                    humanChoiceText.classList.remove("Scissors");
                    humanChoiceText.classList.add("Rock");
                }
                if(selectionValue === " Paper"){
                    humanChoiceText.classList.remove("Rock");
                    humanChoiceText.classList.remove("Scissors");
                    humanChoiceText.classList.add("Paper");
                }
                if(selectionValue === " Scissors"){
                    humanChoiceText.classList.remove("Rock");
                    humanChoiceText.classList.remove("Paper");
                    humanChoiceText.classList.add("Scissors");
                }


                if(cpuChoice === " Rock"){
                    cpuChoiceText.classList.remove("Paper");
                    cpuChoiceText.classList.remove("Scissors");
                    cpuChoiceText.classList.add("Rock");
                }
                if(cpuChoice === " Paper"){
                    cpuChoiceText.classList.remove("Rock");
                    cpuChoiceText.classList.remove("Scissors");
                    cpuChoiceText.classList.add("Paper");
                }
                if(cpuChoice === " Scissors"){
                    cpuChoiceText.classList.remove("Rock");
                    cpuChoiceText.classList.remove("Paper");
                    cpuChoiceText.classList.add("Scissors");
                }

                


                resultText.innerHTML = `${cpuChoice} beats ${selectionValue}, you lose`;
                resultText.classList.remove("win");
                resultText.classList.add("lose");
                cpuScore += 1;
                divCpuScore.innerHTML = "CPU score is " + cpuScore;

            
                
                
            }}}
    else{
        
        
        
        alert("Game over")
          // Add retry button
          let retry = document.querySelector(".retryButton");
          if (!retry) {
              retry = document.createElement("button");
              retry.classList.add("retryButton");
              retry.innerHTML = "Retry";
              game2Elements.appendChild(retry);
              retry.addEventListener("click", () => location.reload());}

        if(cpuScore === 5){
            alert("CPU wins!")
           
           

        


            
        }
        else if(humanScore === 5){
            alert("You win!")
        
          
            
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

function determineColor(){
    if(selectionValue === " Rock"){
        humanChoiceText.classList.remove("Paper");
        humanChoiceText.classList.remove("Scissors");
        humanChoiceText.classList.add("Rock");
    }
    if(selectionValue === " Paper"){
        humanChoiceText.classList.remove("Rock");
        humanChoiceText.classList.remove("Scissors");
        humanChoiceText.classList.add("Paper");
    }
    if(selectionValue === " Scissors"){
        humanChoiceText.classList.remove("Rock");
        humanChoiceText.classList.remove("Paper");
        humanChoiceText.classList.add("Scissors");
    }


    if(cpuChoice === " Rock"){
        cpuChoiceText.classList.remove("Paper");
        cpuChoiceText.classList.remove("Scissors");
        cpuChoiceText.classList.add("Rock");
    }
    if(cpuChoice === " Paper"){
        cpuChoiceText.classList.remove("Rock");
        cpuChoiceText.classList.remove("Scissors");
        cpuChoiceText.classList.add("Paper");
    }
    if(cpuChoice === " Scissors"){
        cpuChoiceText.classList.remove("Rock");
        cpuChoiceText.classList.remove("Paper");
        cpuChoiceText.classList.add("Scissors");
    }

}}