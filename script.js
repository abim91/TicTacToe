let slots = [{value: 0, available: true}, {value: 1,available: true}, {value: 2, available: true},
             {value: 3,  available: true},{value: 4, available: true},{value: 5, available: true},
             {value: 6,  available: true},{value: 7, available: true},{value: 8, available: true}];

function displayGrid(){
    let output = "";
    for(let i = 0; i < slots.length; i++){
        if(i%3 === 0){
            output += "\n \n";
        }
        output += (" "+ slots[i].value);
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

    const answer = parseInt(prompt(currentPlayer.type+ " - player's turn"),10);
    
    if(slots[answer].available  ){
        console.log("here for answer ", answer);
        slots[answer].value = currentPlayer.type;
        slots[answer].available = false;
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
        
        if(slots[i].value === slots[i+1].value && slots[i+1].value === slots[i+2].value){
            
            return true;
        }
        return false;
    }
}
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
 
