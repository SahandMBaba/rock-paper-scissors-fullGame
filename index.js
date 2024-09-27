//////////////////////////////////////////  this line is the function of a randomized pick of computer
console.log('hello player');
function getcomputerchoice(value){
    let randomnumber = Math.floor(Math.random() * 3);
    if(randomnumber === 0) {
        return  "rock";
    }
    if(randomnumber === 1) {
        return "paper";
    }
    if(randomnumber === 2) {
        return "scissors";
    }
}
//////////////////////////////////////////  these lines tracks the scors
let humanScore = 0;
let computerScore = 0;
////////////////////////////////////////// this lines is the actual game


function playround(humanchoice) {
    const computerchoice = getcomputerchoice();
    if (humanchoice === computerchoice) {
        return "it is a draw";
    }
    if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")) 
        {
        return "You won";} 
    else {
        return "You lost";
    }
}

////////////////////////////////////////////////////////// this line runs the game and update the scors
    function updateScore(choice) {
            const result = playround(choice);
            
            if (result === "You won") {
               humanScore++;
            } else if (result === "You lost") {
                computerScore++;
            }

            if (humanScore === 5) {
                finalResultParagraph.innerText=(`YAY YOU WON GOOD JOB BUDDY`)
                humanScore = 0;
                computerScore = 0;
            }
            else if (computerScore === 5) {
                finalResultParagraph.innerText=(`you lost! try again later`)
                humanScore = 0;
                computerScore = 0;

            }
            else {
                finalResultParagraph.innerText="" 
            }
            
        humanScoreVistual.innerText=("You have " + humanScore + " points")
        computerScoreVistual.innerText=("computer have " + computerScore + " points")
        roundJudge.innerText=(result)

            
    
}
/////////////////////////////////////////////////// its the rock button play
const rockbtn = document.querySelector("#rockbtn");
rockbtn.addEventListener("click", () => {  
    updateScore("rock");});
//////////////////////////////////////////////// its the paper button play
const paperbtn = document.querySelector("#paperbtn");
paperbtn.addEventListener("click", () => {  
    updateScore("paper");});
    //////////////////////////////////////////// its the scissors button play
    const scissorsbtn = document.querySelector("#scissorsbtn");
scissorsbtn.addEventListener("click", () => {  
    updateScore("scissors");});
    //////////////////////////////////////////
    const scoreBoard = document.querySelector("#scoreboard");
    const humanScoreVistual = document.createElement('p');
    const computerScoreVistual = document.createElement('p');
    const roundJudge = document.createElement('p');
    const finalResultParagraph = document.createElement('p');
    humanScoreVistual.className = "text";
    computerScoreVistual.className = "text";
    roundJudge.className = "text1";
    finalResultParagraph.className = "text1";
    scoreBoard.append(finalResultParagraph);
    scoreBoard.append(roundJudge);
    scoreBoard.append(humanScoreVistual);
    scoreBoard.append(computerScoreVistual);
    humanScoreVistual.innerText=("You have " + humanScore + " points");
    computerScoreVistual.innerText=("computer have " + computerScore + " points");


