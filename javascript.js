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
    //IF the random number equals 2 THEN
        //RETURN "paper"
    else if (computerChoice === 2) {
        console.log("The computer's choice is paper");
        return "paper";
    }
    //IF the random number equals 3 THEN
        //RETURN "scissors"
    else if (computerChoice === 3) {
        console.log("The computer's choice is scissors");
        return "scissors";
    }
}