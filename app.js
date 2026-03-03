let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn=document.querySelector("#new-btn")
let msg=document.querySelector("#msg")
let msgcontainer=document.querySelector(".msg-container");



let turn0 = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame=()=>{
    turn0=true;
    enablebox();
    msgcontainer.classList.add("hide");
}





box.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0 === true) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});


const disablebox =()=>{
    for(let boxx of box){
        boxx.disabled=true;
    }
}

const enablebox =()=>{
    for(let boxx of box){
        boxx.disabled=false;
        boxx.innerText="";
    }
}


const showwinner=(winner)=>{
    msg.innerText =    `congratulations ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}


const checkwinner = () => {
  for (pattern of winpattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   box[pattern[0]].innerText,
    //   box[pattern[1]].innerText,
    //   box[pattern[2].innerText],
    // );


    let pos1val =box[pattern[0]].innerText
    let pos2val= box[pattern[1]].innerText
    let pos3val= box[pattern[2]].innerText

  if(pos1val !="" && pos2val !="" && pos3val !="" ){
   if(pos1val==pos2val  &&  pos2val==pos3val){
    console.log("winner",pos1val); 
    showwinner(pos1val);
   }
  }
  }
};


newgamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)