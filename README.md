# rock_paper_scissors2
This is rock paper and scissors played from the browser. It not only incorporates loops but also provides the user with an interface

# Pseudocode in human language
## HTML
At first the DOM will only have the title and 3 buttons, "Rock","Paper" and Scissors and at the very bottom there will be a footer
After selecting one of the options the use will see the following:
  The user will see the title at the top
  
  The user will see the CPU selection 
  The user will see the human selection

  CPU score
  Human score
  
  The three buttons will be in the same place

## Javascript
When the user selects one of the weapons the selection will be stored. In order for the CPU to generate its own selection it will randomly spawn a number between 1 and 3 and if the number is 1 it equals to "Rock" , if the number is 2 it equals to "Paper", else, it equals to "Scissors". 

# Pseudocode 
# HTML
                     TITLE(H1 with class "title")
                CPU Selection (div with class "cpu_selection" with id "cpu_selection_id")
                Human Selection (div with class "human_selection" with id "human_selection_id")
                
                CPU SCORE (div with class "CPU_score")
                HUMAN SCORE (div with class "human_score")

    ROCK_BUTTON(button with class "rock" and id "rock_button") PAPER_BUTTON(button with class "paper" and id "paper_button") SCISSORS_BUTTON (button with class "scissors" and id "scissors_button")
                     FOOTER (footer label)



## Javascript
##Scores

Declare variable for "humanScore" that will store the score of human
Declare variable for "CPU_Score" that will store the CPU score

##Constants for elements

Declare constant that stores CPU selection div by its ID
Declare constant that stores that store human selection div by its ID






