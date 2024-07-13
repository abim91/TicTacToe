let gameBoard = [{value: .0, available: true}, {value: .1,available: true}, {value: .2, available: true},
             {value: .3,  available: true},{value: .4, available: true},{value: .5, available: true},
             {value: .6,  available: true},{value: .7, available: true},{value: .8, available: true}];

function displayGrid(){
    let output = "";
    for(let i = 0; i < gameBoard.length; i++){
        if(i%3 === 0){
            output += "\n \n";
        }
        output += (" "+ gameBoard[i].value);
    }
    console.log(output);
};


function player(type){
    let choice = "";
    const getSelectedSlot = () => choice;
    return {type,getSelectedSlot}
}

let p1 = player("X");
let p2 = player("O");

function askUser(currentPlayer){
// add feature to highlight button each turn, the point is to make the program wait so 


    const answer = parseInt(prompt(currentPlayer.type+ " - player's turn"),10);
    
    if(gameBoard[answer].available  ){
        console.log("here for answer ", answer);
        gameBoard[answer].value = currentPlayer.type;
        gameBoard[answer].available = false;
        displayGrid();
    }
    else{
        console.log("Already Selected, Try Again");
        console.log("the chosen is ", answer)
        askUser(currentPlayer);
        
    }
    
   // console.log(currentPlayer.type, " choose your option");
}

function detectWinner(){
    //check horizontal for winners, check if all the horizontals are the same
    for(let i = 0; i < 9; i+=3){
        
        if(gameBoard[i].value === gameBoard[i+1].value && gameBoard[i+1].value === gameBoard[i+2].value){
            
            return true;
        }
    }
    //check Vertical for winners, check if all the horizontals are the same

    //check diagonal for winners, check if all the horizontals are the same

    //check anti-diagonal for winners, check if all the horizontals are the same
    return false;
}
/*
displayGrid();
while (true){
    
    askUser(p1);
    if(detectWinner()){
        console.log("Player", p1.type ,"is the winner!!");
        break;
    }

    
   
    askUser(p2);
    if(detectWinner()){
        console.log("Player ", p2.type ," is the winner!!");
        break;
    }

}
 
*/


/*for(let i = 0; i < eachSlot.length ; i++){
    const slot = document.getElementById(`slot-${eachSlot[i]}`);
    slot.addEventListener("click",(e)=>{
        console.log("You clicked " , slot.innerText);
    });
}*/

let eachSlot = ["zero","one","two","three","four","five","six","seven","eight"];
/*function updateGrid(){
    for(let i = 0; i < eachSlot.length ; i++){
        const slot = document.getElementById(`slot-${eachSlot[i]}`);
        slot.innerText = gameBoard[i].value; 
    }
};

updateGrid();*/

function play(cP){
    currentPlayer = cP;
    let currentlySelected;
    for(let i = 0; i < eachSlot.length ; i++){
        const clickedCell = document.getElementById(`slot-${eachSlot[i]}`);
        clickedCell.addEventListener("click",(e)=>{
            currentlySelected = clickedCell;
            currentlySelected.innerText = currentPlayer.type;
            gameBoard[i].value = currentPlayer.type; //updates the gameboard array
        });
    }
    
}
//play();

function runner(){
    
    for(let i = 0; i < 9; i++){
        console.log("inhere");
        
        if(detectWinner()){
        console.log("Player", p1.type ,"is the winner!!");
        break;
        }
        else{
            play(p1);
        }
    /*    else{
            play(p2);
        }*/
        
        play(p2);
        if(detectWinner()){
            console.log("Player", p1.type ,"is the winner!!");
            break;
        }
   /*     else{
            play(p1);
        }*/
        


    }
}
runner();