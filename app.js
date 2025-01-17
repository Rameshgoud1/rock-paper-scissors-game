let userscore=0;
let compscore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#message');
const score1=document.querySelector('#user-score');
const score2=document.querySelector('#comp-score');
const genComputerScore=()=>{
    const options=['rock','paper','scissors'];
    const computerIdx=Math.floor(Math.random()*3)
    return options[computerIdx];
}
const drawCase=()=>{
     msg.innerText='It was Draw Play Again!';
     msg.style.backgroundColor='#081b31';
}
const showWinner=(userWin,userchoice,computerChoice)=>{
    if(userWin){
        msg.innerText=`You Win! Your ${userchoice} beats ${computerChoice}`;
        msg.style.backgroundColor='green';
        userscore++
        score1.innerText=userscore;
        }
    else {
        msg.innerText=`Computer Win! ${computerChoice} beats your ${userchoice}`;
        msg.style.backgroundColor='red';
        compscore++;
        score2.innerText=compscore;
    }
        
}
const playGame=(userchoice)=>{
    let computerChoice=genComputerScore();
    if(userchoice===computerChoice){
        drawCase();
    }
    else{
        let userWin=true;
        if(userchoice=='rock'){
            //paper, scissors
            userWin=computerChoice==='paper'?false:true;
        }
        else if(userchoice==='paper'){
            //rock, scissors
            userWin=computerChoice==='rock'?true:false;
        }
        else{
            //rock, paper
            userWin=computerChoice==='paper'?true:false;
        }
        showWinner(userWin,userchoice,computerChoice);
     }
     
    }

choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
    const userchoice=choice.getAttribute('id')
     playGame(userchoice);
     
    })
});