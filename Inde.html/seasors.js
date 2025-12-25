let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompchoice = () => {
    const options =[ "rock" , "paper" , "scissore"];
    const randIdx = Math.floor (Math.random () * 3);
    return options[randIdx];
}

const drawGame =()  => {
    msg.innerText = "game was Draw. Play again/";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin , userchoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win ! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText =`you lose. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame =(userchoice) => {
    console.log("userchoice = ", userchoice);
    // Generate computer choice
    const compChoice = genCompchoice() ;
    console.log ("compChoice = " , compChoice)

    if (userchoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userwin = true ;
        if (userchoice === "rock") {
            // scissor , paper
            userwin = compChoice === "paper" ? false : true ;
        } else if (userchoice ="paper" ) {
            // rock ,scissor\
            userwin = compChoice === "scissor" ? false : true ;
        } else {
            // rock ,paper
            userwin = compChoice === " rock" ? false : true ;
        }
        showWinner(userwin , userchoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",  () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});