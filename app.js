let boxes = document.querySelectorAll(".box");

let resetButton = document.querySelector("#reset-button");
// to determine whose turn it will be
let player = 'O';
// winning patterns to determine the winner of the game
let message = document.querySelector(".popup");
let new_button = document.querySelector("#new_button");

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const reset = () =>{
    player = 'O';
    enableBoxes();
    message.classList.add("hide");
    new_button.classList.add("hide");
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""; 
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let i = 1;
boxes.forEach((box) => { 
    box.addEventListener("click",() => {
        console.log("clicked");
        if(player === 'O'){
            box.innerText = "O";
            player = 'X';
        } else{
            box.innerText = "X";
            player = 'O';
        }

        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let position_1 =boxes[pattern[0]].innerText;
        let position_2 =boxes[pattern[1]].innerText;
        let position_3 =boxes[pattern[2]].innerText;

        if(position_1 != "" && position_2 != "" && position_3 != ""){
            if(position_1 === position_2 && position_2 === position_3){
                
                console.log("winner");
                message.innerText = `winner is ${position_1}`;
                message.classList.remove("hide");
                new_button.classList.remove("hide");
                disableBoxes();

            }
        }
    }    
}

resetButton.addEventListener("click", reset);
new_button.addEventListener("click",reset);