const startBtn = document.getElementById("btn-start");
const winnerBtn = document.getElementById("btn-winner");
const otherBtn = document.getElementById("btn-round");
const resetBtn = document.getElementById("btn-reset");

function startTheGame() {
    // lance la partie fait apparaitre plussieur bouton

    startBtn.classList.toggle('hidden');

    winnerBtn.classList.remove('hidden');
    otherBtn.classList.remove('hidden');

    resetBtn.classList.remove('hidden');

}

function winner() {
    // change de couleur et lance une alerte
    alert("you won !");
    winnerBtn.classList.toggle('btn-winner');
}

function other() {
    
}

function reset() {
    location.reload();
}

startBtn.addEventListener("click", startTheGame);
winnerBtn.addEventListener("click", winner);
otherBtn.addEventListener("click", other);
resetBtn.addEventListener("click", reset);