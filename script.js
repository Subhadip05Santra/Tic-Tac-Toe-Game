let boxes=document.querySelectorAll(".box"); 
let turnOf=true;  // true if it is the turn of the 1st player
let newGame=document.querySelector("#new-game");
let messageWinnings=document.querySelector(".new-btn");
let resetGame=document.querySelector("#reset");

const winCon=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


boxes.forEach((box)=> {                              //adding event handlers
    box.addEventListener("click",()=>{
        if(turnOf){
            box.innerText ="O";
            turnOf = false;
        }
        else{
            box.innerText ="X";
            turnOf = true;
        }
        box.disabled =true;

        winning();
    });
    
});


newGame.addEventListener("click",()=>{                    //when newgame is clicked after a game is finished with a winner
    messageWinnings.classList.remove("show");
    newGame.style.display="none";
    resetGame.style.display="inline-block";
    turnOf=true;
    enabledbutton();
});
resetGame.addEventListener("click",()=>{                   //when reset button is clicked
    messageWinnings.classList.remove("show");
    turnOf=true;
    enabledbutton();
});

const winning=()=>{                                //checking for winning condiitons
    for(let pattern of winCon)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&& pos2!=""&& pos3!="")
        {
            if(pos1===pos2&& pos2===pos3)
            {
                if(pos1==="O")
                {
                    message("player 1");
                }
                else
                {
                    message("player 2");
                }
            }
        }
                
    }
};



const message=(win)=>{
    messageWinnings.classList.add("show");
    messageWinnings.innerText=`Congratulations, Winner is ${win}`;
    newGame.style.display="inline-block";
    resetGame.style.display="none";
    disabledboxes();
};


const disabledboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enabledbutton=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};