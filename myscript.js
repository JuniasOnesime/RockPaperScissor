function computerPlay() {
    let myArray= ['rock','paper','scissor'];
    let b = myArray[Math.floor(Math.random()*myArray.length)];
    return b;
    
}

function playRound(PlayerSelection, ComputerSelection) {
     PlayerSelection= prompt("Enter a string to play the Rock Paper Scissor");
    let c = PlayerSelection.toLowerCase();
     ComputerSelection= computerPlay();
    let a = c.length;
    let b = ComputerSelection.length;

    if(a==4 && b==5){
        console.log("You Lost! Paper beats Rock");
        return 1;
    }else if (a==4 && b ==7){
        console.log("You Win! Rock beats Scissor");
        return 0;
    }else if(a==5 && b==7){
        console.log("You Lost! Scissor beats Paper");
        return 1;
    }else if(a==5 && b==4){
        console.log("You Win!, Paper beats Rock");
        return 0;
    }else if(a==7 && b ==4){
        console.log("You Lost! Rock beat Scissor ");
        return 1;
        
    }else if(a==7 && b==5){
        console.log("You Win! Scissor beats Paper");
        return 0;

    }else{
        console.log("It is a Tie Game");
        return 2;
    }
    
}

function Game(){
    let v = 0;
    let ComputerScore = 0;
    let PlayerScore = 0;
    let TieScore = 0;
    for(let i=0; i<5; i++){
        v= playRound();
        if(v==0){
            PlayerScore = PlayerScore + 1;
        }else if(v==1){
            ComputerScore = ComputerScore + 1;
        }else if(v==2){
            TieScore=TieScore +1;
        }else
        {
            console.log("Something went wrong");
        }
    }

    if(PlayerScore>ComputerScore){
        alert("Congratulation! You Win" + ' '+ 'PlayerScore='+ PlayerScore);
    }else if(PlayerScore==ComputerScore)
    {
        alert("It is a Tied Game, We need another round");
    }else{
        alert("OOPS! YOU LOST " + ' '+ 'ComputerScore='+ ComputerScore);
    }
}




const PlayerSelection= 'rock';
const ComputerSelection = 'paper';
const PlayerScore =0;
const ComputerScore =0;
const TieScore = 0;
Game();