
let playAgainButton = document.getElementById("play-again-button")
let finalScore = document.getElementById("final-score")
let endTxt = document.getElementById("end-txt")
let textarray = ["WORK HARD", "GOOD ONE", "GREAT JOB SOLDIER"];
let playerDetails = document.getElementById("player-details");



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

function appendPlayersToScoreBoard(player, score){
    let playersArr = JSON.parse(localStorage.getItem("scoreBoard")) || [];
    let currentPlayer = playersArr.find(function(a){
        a.player === player
    });
    if(currentPlayer){
        currentPlayer.score = score;
    }else{
        playersArr.push({player, score});
    }
    playersArr.sort(function(a, b){
        b.score - a.score
    });

    localStorage.setItem("scoreBoard", JSON.stringify(playersArr));
    displayScoreBoard(playersArr);
}

function displayScoreBoard(playersArr){
    playerDetails.innerHTML = "";
    playersArr.forEach(function(playersObj){
        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.classList.add("boardText");
        playerDetails.appendChild(div);

        let name = document.createElement("p");
        name.style.marginRight = "15%"
        name.textContent = playersObj.player;
        let score = document.createElement("p");
        score.textContent = playersObj.score;

        div.appendChild(name);
        div.appendChild(score);
    })
}

appendPlayersToScoreBoard(localStorage.getItem("nickname"), localStorage.getItem("score"));

localStorage.clear()