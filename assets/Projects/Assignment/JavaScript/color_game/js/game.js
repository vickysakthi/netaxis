var numSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("displayColor");
var messageDisplay = document.querySelector(".message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    setupModeBtn();
    setupSquares();
    reset();
}

function setupModeBtn() {
    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function () {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            modeBtn[2].classList.remove("selected");
            this.classList.add("selected");            
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else if (this.textContent === "Medium") {
                numSquares = 6;
            } else if (this.textContent === "Hard") {
                numSquares = 9;
            }
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            //Grab  color of clicked square
            var clickedColor = this.style.background;
            //compare to colorPicker
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!."
                resetBtn.textContent = "Play Again?"
                changeColor(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323"
                messageDisplay.textContent = "Try Again!!.."
            }
        });
    }
}

function reset() {
    //generate all colors
    colors = generateRandomColor(numSquares);
    //Pick a new random color from array
    pickedColor = pickColor();
    //change the colordisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors"
    messageDisplay.textContent = "";
    // change color of square 
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
    h1.style.background = "steelblue";
}

resetBtn.addEventListener("click", function () {
    reset();
});
function changeColor(color) {
    // loop the colors
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}