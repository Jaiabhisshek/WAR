const backgroundSound = new Audio("./Assests/bgm_out.mp3")
backgroundSound.loop = true;
backgroundSound.play();

let tankerRoad = document.getElementById("tankerRoad");

let blastsound = new Audio("./Assests/blast.mp3");
tankerRoad.addEventListener("click", blastSound);

function blastSound(){
    blastsound.pause()
    blastsound.currentTime = 0
    blastsound.play()
}

let enemyPath = document.getElementById("enemyPath");
let tankerId = 1;

let scoreBox = document.getElementById("score-box");
let score = 0;
scoreBox.textContent = score;

let tanker;
createTanker();

function randomNumber2(min, max){
    return Math.floor(Math.random()*max)+min;
}

function randomNumber(){
    return Math.ceil(Math.random()*4)
}

function createTanker(){
    let number = randomNumber();
    enemyPath.innerHTML += `<img src =./Assests/tank${number}.png class = tankers id=tankers${tankerId} alt=tank />`
    
    tanker = document.getElementById(`tankers${tankerId}`)
    tanker.style.left = `${randomNumber2(20, 60)}%`;
    tanker.style.animationDuration = `${randomNumber2(3, 4)}s`;
    tanker.addEventListener("click",()=>{destroyTankers(tanker)});
    
}


function destroyTankers(tanker){
    score += 5;
    scoreBox.textContent = score;
    localStorage.setItem("score", score)
    tanker.style.display = "none";
    tankerId++;
    createTanker();
}


let time = 60;
setInterval(timer,1000)

function timer(){
    const timer = document.getElementById("timer-box")

    if(time==0){
        location.href = "gameover.html"
    }else{
        timer.innerText = time;
        time--;
        health(tanker);
    }
}

console.log("HII")

