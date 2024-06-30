let humanScore = 0;
let computerScore = 0;



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
        console.log("The computer's choice is rock");
        return "rock";
    }
    //ELSE IF the random number equals 2 THEN
        //RETURN "paper"
    else if (computerChoice === 2) {
        console.log("The computer's choice is paper");
        return "paper";
    }
    //ELSE IF the random number equals 3 THEN
        //RETURN "scissors"
    else if (computerChoice === 3) {
        console.log("The computer's choice is scissors");
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

