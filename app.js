
let instruction = document.getElementById("instruction")
let easyBtn = document.getElementById("easyBtn")
let hardBtn = document.getElementById("hardBtn")
let playerName = document.getElementById("playerName")
let nickName = document.getElementById("nickName");

function storePlayer(event){
    localStorage.setItem("playername", event.target.value);
    
}

function storeNickName(event){
    localStorage.setItem("nickname", event.target.value);
    if(nickName.value === ""){
        alert("Enter valid name");
    }
}

easyBtn.onclick = function(){
    if(playerName.value === "" || nickName.value === ""){
        alert("Enter valid name");
    }else{
        location.href = "game.html";
    }
    
}

hardBtn.onclick = function(){
    location.href = "game.html"
}

instruction.onclick = function(){
    location.href = "instruction.html";
}

playerName.addEventListener("keyup", storePlayer);
nickName.addEventListener("keyup", storeNickName);