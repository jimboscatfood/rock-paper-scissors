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
        return "rock";
    }
    //ELSE IF the random number equals 2 THEN
        //RETURN "paper"
    else if (computerChoice === 2) {
        return "paper";
    }
    //ELSE IF the random number equals 3 THEN
        //RETURN "scissors"
    else if (computerChoice === 3) {
        return "scissors";
    }
}

//Declare global variables for score tracking
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //IF any of the player's score is below 5
    if (humanScore < 5 && computerScore < 5) {
    //PLAY round as follow
    //IF both choices are the same THEN
        choice.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}`;
        if (humanChoice === computerChoice) {
            //PRINT "It's a tie!"
            result.textContent = `It's a tie! Your score: ${humanScore}, Computer's score: ${computerScore}`;
        }
        //ELSE IF human uses rock, computer uses paper THEN
        else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                //Increment computerScore by 1
                computerScore++;
                //PRINT "You lose! Paper beats Rock"
                result.textContent = `You lose! Paper beats Rock. Your score: ${humanScore}, Computer's score: ${computerScore}`;
                if (computerScore === 5) {
                    result.textContent += " - Computer is the winner!";
                }
            }
            //ELSE IF human uses rock, computer uses scissors THEN
            else {
                //Increment humanScore by 1
                humanScore++;
                //PRINT "You win! Rock beats Scissors"
                result.textContent = `You win! Rock beats Scissors. Your score: ${humanScore}, Computer's score: ${computerScore}`;
                if (humanScore === 5) {
                    result.textContent += " - You are the winner!";
                }        
            }
        }
        //ELSE IF human uses paper...
        else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore++;
                result.textContent = `You lose! Scissors beats Paper. Your score: ${humanScore}, Computer's score: ${computerScore}`;
                if (computerScore === 5) {
                    result.textContent += " - Computer is the winner!";
                }
            }
            else {
                humanScore++;
                result.textContent = `You win! Paper beats Rock. Your score: ${humanScore}, Computer's score: ${computerScore}`;
                if (humanScore === 5) {
                    result.textContent += " - You are the winner!";
                }   
            }
        }
        //ELSE IF human uses scissors...
        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore++;
                result.textContent = `You lose! Rock beats Scissors. Your score: ${humanScore}, Computer's score: ${computerScore}`;
                if (computerScore === 5) {
                    result.textContent += " - Computer is the winner!";
                }
            }
            else {
                humanScore++;
                result.textContent = `You win! Scissors beats Paper. Your score: ${humanScore}, Computer's score: ${computerScore}`;
                if (humanScore === 5) {
                    result.textContent += " - You are the winner!";
                } 
            }
        }
    }
}        

//End of playRound function


//DOM Manipulation

//Create 3 buttons, one for each selection

const container = document.createElement("div");

container.classList.add("container");
document.body.appendChild(container);
const title = document.createElement("h1");
title.textContent = "Rock, Paper, Scissors: Shoot your shot";
container.appendChild(title);

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
container.append(rockButton, paperButton, scissorsButton);


//Add event listener to the buttons that call playRound function
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice());
    })
});

//Add a div below title to show players' choice
const choiceBox = document.createElement("div");
document.body.appendChild(choiceBox);
const choice = document.createElement("p");
choiceBox.appendChild(choice);


//Add a div below player's choice to display results
const resultBox = document.createElement("div");
document.body.appendChild(resultBox);
const result = document.createElement("p");
resultBox.appendChild(result);