let scoreOne=document.getElementById("score1")
let scoreTwo=document.getElementById("score2")
let counth = 0
let countg = 0

function addOneh(){
    counth += 1
    scoreOne.innerText=counth
}
function addTwoh(){
    counth += 2
    scoreOne.innerText=counth
}
function addThreeh(){
    counth += 3
    scoreOne.innerText=counth
}
function addOneg(){
    countg += 1
    scoreTwo.innerText=countg
}
function addTwog(){
    countg += 2
    scoreTwo.innerText=countg
}
function addThreeg(){
    countg += 3
    scoreTwo.innerText=countg
}
function reset(){
    scoreOne.innerText=0
    scoreTwo.innerText=0
    counth=0
    countg=0
}