function getComputerChoice() {
    //Write code to randomly return string values of
    //"rock" or "paper" or "scissors"
   
    //psuedocode aka algothrithm

    //CREATE and INIT a variable to store the random number representing the 3 choices
    let computerChoice = 0;
    //SET a random number from 1-3 as the value of the variable
    computerChoice = Math.floor(Math.random() * 3) + 1;
    //IF the random number equals 1 THEN
        //RETURN "rock"
    if (computerChoice === 1) {
        console.log ("The computer chose rock");
        return "rock";
    }
    //ELSE IF the random number equals 2 THEN
        //RETURN "paper"
    else if (computerChoice === 2) {
        console.log ("The computer chose paper");
        return "paper";
    }
    //ELSE IF the random number equals 3 THEN
        //RETURN "scissors"
    else if (computerChoice === 3) {
        console.log ("The computer chose scissors");
        return "scissors";
    }
}

function getHumanChoice() {
    //CREATE and INIT a variable that stores the human choice
    let humanChoice = "";
    let userInput = "";
    //PROMPT to get the user's input and ASSIGN the value to the variable
    userInput = prompt("Choose: rock, paper or scissors");
    humanChoice = (String(userInput).toLowerCase()).trim();
    //WHILE the variable value does not equal to one of the valid choices
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        //PROMPT to get the user's input again with an error message
        userInput = prompt("Your choice is not valid. Choose: rock, paper or scissors");
        humanChoice = (String(userInput).toLowerCase()).trim();
    }
    //END WHILE
    //RETURN variable containing the user's choice
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        //IF both choices are the same THEN
        if (humanChoice == computerChoice) {
            //PRINT "It's a tie!"
            console.log("It's a tie!");
        }
        //ELSE IF human uses rock, computer uses paper THEN
        else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                //PRINT "You lose! Paper beats Rock"
                console.log("You lose! Paper beats Rock");
                //Increment computerScore by 1
                computerScore++;
            }
            //ELSE IF human uses rock, computer uses scissors THEN
            else {
                //PRINT "You win! Rock beats Scissors"
                console.log("You win! Rock beats Scissors")
                //Increment humanScore by 1
                humanScore++;        
            }
        }
        //ELSE IF human uses paper...
        else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            }
            else {
                console.log("You win! Paper beats Rock")
                humanScore++;
            }
        }
        //ELSE IF human uses scissors...
        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            }
            else {
                console.log("You win! Scissors beats Paper")
                humanScore++;
            }
        }
    }
    //End of playRound function
    
    //PRINT score
    console.log("Your final score is: " + humanScore, '\n',"Computer's final score is: " + computerScore)
    //IF human score is higher than computer THEN
    if (humanScore > computerScore) {
        //PRINT "You're the winner!"
        console.log("You're the winner!");
    }
    //ELSE IF computer score is higher
    else if (humanScore < computerScore) {
        //PRINT "Computer is the winner!"
        console.log("Computer is the winner!");
    }
    //ELSE IF both scores are the same
    else {
        //PRINT "It's a tie!"
        console.log("It's a tie!");
    }
}



//DOM Manipulation

//Create 3 buttons, one for each selection

const container = document.createElement("div");
container.textContent = "Hi I contain the 3 buttons";
container.classList.add("container");
document.body.appendChild(container);

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
container.append(rockButton, paperButton, scissorsButton);

