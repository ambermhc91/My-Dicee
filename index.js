// var dice1Number = document.querySelector(".img1");
// var dice2Number = document.querySelector(".img2");
document.querySelector(".refresh").addEventListener("click", function(event){
    //console.log(event);
    window.location.reload();
})
var dice1Number = randomNumberGenerator();
var dice1Img = "images/dice" + dice1Number + ".png"

var dice2Number = randomNumberGenerator();
var dice2Img = "images/dice" + dice2Number + ".png"


var message = "";
if(dice1Number > dice2Number){
    message = "🚩 Player 1 Wins!";
}
if(dice1Number < dice2Number){
    message = "Player 2 Wins! 🚩";
}
if(dice1Number === dice2Number){
    message = "Draw!";
}

document.querySelector(".img1").setAttribute("src", dice1Img);
document.querySelector(".img2").setAttribute("src", dice2Img);
document.querySelector("h1").innerHTML = message;
//button

function randomNumberGenerator(){
    var randomNumber1 = Math.random()*6;
    randomNumber1 = Math.floor(randomNumber1)+1;
    return randomNumber1;
}