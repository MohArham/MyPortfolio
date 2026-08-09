let currentSectionId = "start"

function switchScreen(nextSectionId) {
    document.getElementById(currentSectionId).hidden = true
  
    // Show the new section
    document.getElementById(nextSectionId).hidden = false;
  
    // Update the tracker to the new section
    currentSectionId = nextSectionId;
}   

let time = 32;

setInterval(() => {
  time = time - 1;
  document.getElementById('timeVal').textContent = time;
}, 1000);