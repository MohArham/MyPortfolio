let currentSectionId = "start"
let time = 31;
let timeEl = document.querySelector("#timeVal")
let startBtn = document.querySelector(".start-btn")

let creeper = document.createElement("img")
creeper.src = "../images/creeper-face.png"
creeper.className = "creeper"

let blocks = document.querySelectorAll(".block")
let randomBlock = blocks[Math.floor(Math.random() * 9)]

blocks[0].append(creeper)

function switchScreen(nextSectionId) {
    document.getElementById(currentSectionId).hidden = true
  
    // Show the new section
    document.getElementById(nextSectionId).hidden = false;
  
    // Update the tracker to the new section
    currentSectionId = nextSectionId;
}

function startTimer() {
    let timer = setInterval(function(){
        time--
        timeEl.textContent = time

        if (time === 0) {
            clearInterval(timer)
        }
    },1000)
}
