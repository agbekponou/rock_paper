console.log("Hello World")
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let value = Math.random();
    if (value <= 0.3){
        return 'ROCK'
    }else if (value > 0.3 && value <= 0.6){
        return 'PAPER'
    }else {
        return 'SCISSORS'
    }
};

function getHumanChoice(){
    let choice = prompt("Please enter choice rock,paper or scissors: ");
    return choice
};

function playRound(humanChoice,computerChoice){
    let hvalue = humanChoice.toUpperCase();
    if (hvalue === computerChoice){
        humanScore += 1;
        console.log("You win");
        
    }else{        
        computerScore += 1;
        console.log(`You Lose! ${computerChoice.toLowerCase()} beats ${hvalue.toLowerCase()}`)
    }
};

function playGame(){
    let i = 0;
    while (i < 5){
        const humanselection = getHumanChoice();
        const computerselection = getComputerChoice();
        playRound(humanselection,computerselection);
        i++;
    };
   
    if (humanScore > computerScore){
        console.log("Player Wins");
    }else{
        console.log("Computer Wins")
    }
};

playGame()

/*const humanselection = getHumanChoice();
const computerselection = getComputerChoice();

playRound(humanselection,computerselection)
/*console.log(getComputerChoice())*/
/*console.log(getHumanChoice())*/