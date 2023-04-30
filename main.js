
let nameLeft = document.querySelector(".player1-name");
let nameRight = document.querySelector(".player2-name");
const enterLeft = document.querySelector(".enter-btnleft");
const enterRight = document.querySelector(".enter-btnright");
let result = document.querySelector("h2");


enterLeft.addEventListener('click', (e)=> {   
    var selectAvatar = $("input[type='radio']:checked").val();
    const create = document.querySelector(".avatarLeft");
    if(selectAvatar == undefined){
        create.setAttribute("src", "assets/avatar/5.png")            
    }else{
        create.setAttribute("src", selectAvatar);
    }

        const name = document.querySelector(".name-inputleft");
    if(name.value == ""){
        nameLeft.innerHTML = "player 1";
    }else{
        nameLeft.innerHTML = name.value;   
    }
    
    enterLeft.style.display = "none";
});

enterRight.addEventListener('click', (e)=> {  
    var selectAvatar = $("input[type='radio']:checked").val();
    const create = document.querySelector(".avatarRight");
    if(selectAvatar == undefined){
        create.setAttribute("src", "assets/avatar/5.png")            
    }else{
        create.setAttribute("src", selectAvatar);
    }

    const name = document.querySelector(".name-inputright");
    if(name.value == ""){
        nameRight.innerHTML = "player 2";
    }else{
        nameRight.innerHTML = name.value;        
    }

    enterRight.style.display = "none";
});

document.querySelector(".diceBtn").addEventListener('click', (e) => {
    //generate a random number from 1 to 6
    
    const leftRandomNum = Math.floor(Math.random()*6) + 1;
    const rightRandomNum = Math.floor(Math.random()*6) + 1;
   //setting the dice  images
    document.querySelector('.diceImageL').setAttribute("src" , 'assets/dice/'+leftRandomNum+'.png');
    document.querySelector('.diceImageR').setAttribute("src" , 'assets/dice/'+rightRandomNum+'.png');

    setTimeout(() => {
    if( leftRandomNum > rightRandomNum){
        result.innerHTML = `${nameLeft.innerHTML} has won`;
    }else if( leftRandomNum < rightRandomNum){
        result.innerHTML = `${nameRight.innerHTML} has won!`;
    }else{
        result.innerHTML = `it's draw`;
    }},300);
});
