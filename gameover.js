
let playAgainButton = document.getElementById("play-again-button")
let finalScore = document.getElementById("final-score")
let endTxt = document.getElementById("end-txt")
let textarray = ["WORK HARD", "GOOD ONE", "GREAT JOB SOLDIER"];

let score = localStorage.getItem("score");

function checkscore(){
    if(score<=50){
        endTxt.textContent = textarray[0];
    }else if(50<score<=100){
        endTxt.textContent = textarray[1];
    }else{
        endTxt.textContent = textarray[2];
    }
}

checkscore();

playAgainButton.onclick = function(){
    location.href = "index.html"
}

finalScore.textContent = localStorage.getItem("score")