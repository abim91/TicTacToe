let gameBoard = [{value: 0, available: true}, {value: 1,available: true}, {value: 2, available: true},
             {value: 3,  available: true},{value: 4, available: true},{value: 5, available: true},
             {value: 6,  available: true},{value: 7, available: true},{value: 8, available: true}];



const dialog = document.querySelector("dialog");

function player(type){
    let choice = "";
    const getSelectedSlot = () => choice;
    return {type,getSelectedSlot}
}

let p1 = player("X");
let p2 = player("O");

function detectWinner(){
    //check horizontal for winners, check if all the horizontals are the same
    for(let i = 0; i < 9; i+=3){
        
        if(gameBoard[i].value === gameBoard[i+1].value && gameBoard[i+1].value === gameBoard[i+2].value){
            console.log("horizontal win");
            return true;
        }
    }
    //check Vertical for winners, check if all the horizontals are the same
    for(let i = 0; i < 3; i++){
        
        if(gameBoard[i].value === gameBoard[i+3].value && gameBoard[i+3].value === gameBoard[i+6].value){
            console.log("vertical win");
            return true;
        }
    }
    //check diagonal for winners, check if all the horizontals are the same
    for(let i = 0; i < 1; i++){
        
        if(gameBoard[i].value === gameBoard[i+4].value && gameBoard[i+4].value === gameBoard[i+8].value){
            console.log("diagonal win");
            return true;
        }
    }
    //check anti-diagonal for winners, check if all the horizontals are the same
    for(let i = 2; i < 3; i++){
        
        if(gameBoard[i].value === gameBoard[i*2].value && gameBoard[i*2].value === gameBoard[i*3].value){
            console.log("anti-diagonal win");
            return true;
        }
    }
    return false;
}
//detects whether the game was a draw
function detectDraw(){
    let availableCounter = 0;
    let gameStatus = true;
    for(let i = 0; i < gameBoard.length; i++){
        if(gameBoard[i].available){//if there is emply slots then the game isn't over.
            availableCounter++;
        }
    }

    if(availableCounter == 0){
        gameStatus = false;
    }
    
    if(!gameStatus && !detectWinner()){
        return true;
    }
        
    return false;
}
function play(cP){
    currentPlayer = cP;
    let currentlySelected;
    let eachSlot = ["zero","one","two","three","four","five","six","seven","eight"];
    
    for(let i = 0; i < eachSlot.length ; i++){
        
        const clickedCell = document.getElementById(`slot-${eachSlot[i]}`);
        clickedCell.addEventListener("click",(e)=>{

            document.getElementById("playerTracker").hidden = true;

            if(gameBoard[i].available){ 
            currentlySelected = clickedCell;
            currentlySelected.innerText = currentPlayer.type;
            
            gameBoard[i].available = false;
            gameBoard[i].value = currentPlayer.type; //updates the gameboard array
          

            if(detectDraw()){
                dialog.showModal();
                dialog.style.display = "flex";
                document.getElementById("winnerDisplay").innerText = "The game was a draw";
            }
            if(detectWinner()){
                
                dialog.showModal();
                dialog.style.display = "flex";
                document.getElementById("winnerDisplay").innerText = `PLAYER ${currentPlayer.type} IS THE WINNER`;
                
                
            }
            else{
                currentPlayer = (currentPlayer === p1)? p2: p1;
                play(currentPlayer);
            }
        }
        
        });
        
    }
    
    
    
}

function restart(){
    console.log("went into restart");
    dialog.style.display = "none";
    for(let i = 0; i < gameBoard.length; i++){
        gameBoard[i].available = true;
        gameBoard[i].value = i; 
    }
    play(p1);

}

function runner(){
    play(p1);
    const restart = document.getElementById("playAgainBTN");
    restart.addEventListener("click", restart);
    
}
runner();