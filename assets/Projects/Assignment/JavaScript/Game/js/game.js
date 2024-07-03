var btn = document.querySelector("button");
btn.addEventListener("click", function () {
    document.body.classList.toggle("purple");
});
var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var resetBtn = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningDisplayScore = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 7;

p1Btn.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;

        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner")
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add("winner")
        }
    }
    p2Display.textContent = p2Score
});

resetBtn.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function () {
    winningDisplayScore.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});
