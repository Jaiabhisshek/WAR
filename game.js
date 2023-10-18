
// const backgroundSound = new Audio("./Assests/bgm_out.mp3")
// backgroundSound.loop = true
// backgroundSound.play()

let enemyPath = document.getElementById("enemyPath")
let tankerId = 1;
let lives = 5;

let tanker;

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
    // tanker.style.transform = `translateX(${randomNumber2(40,80)}%)`
    // tanker.style.animationDuration = `${randomNumber2(3,4)}s`;
    // enemyPath.style.width = `${randomNumber2(50,100)}vw`
    tanker.style.left = `${randomNumber2(20, 60)}%`;
    tanker.style.animationDuration = `${randomNumber2(3, 4)}s`;
    tanker.addEventListener("click",()=>{destroyTankers(tanker)});
}

function destroyTankers(tanker){
    tanker.style.display = "none"
    tankerId++
    
    createTanker();
}

// function health(){
//     if (lives===0){
//         location.href = "gameover.html";
//     }else if(tanker.getBoundingClientRect().top <=0){
//         lives--;
//         console.log(lives);
//         destroyTankers(tanker);
//     }
// }
// health();
createTanker();


