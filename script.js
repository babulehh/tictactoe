console.clear();
var cell = document.querySelectorAll(".cell"),
    result = document.getElementById("result-game"),
    message = document.getElementById("message"),
    resetGame = document.getElementById("reset-game"),
    resetCount = document.getElementById("reset-count"),
    player = "X",
    step = 0,
    winArr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ],
    counterX = 0,
    counterO = 0,
    menuX = document.getElementById("countX"),
    menuO = document.getElementById("countO");

for (var i = 0; i < 9; i++) {
    cell[i].addEventListener("click", currentStep);
}

function currentStep() {
    num = +this.dataset["sell"];
    if (!this.textContent && step !== 9) {
        this.innerText = player;
        player === "X" ? this.classList.add("x") : this.classList.add("o");
        player === "X" ? player = "O" : player = "X";
        message.innerText = "Ходит игрок " + player;
        step++;
        var isWin = winCheck(winArr, num);
        if ((step == 9) && (!isWin)) {
            message.innerText = "Игра окончена";
            result.innerText = "Ничья";
        }
    }
}

function winCheck(winArr, num) {
    var isWin = false;
    for (var i = 0, length = winArr.length; i < length; i++) {

        for (var j = 0; j < 3; j++) {

            if (winArr[i][j] !== num) {
                continue;
            }

            if (player === "X") {
                winArr[i][j] = 0;
            }
            if (player === "O") {
                winArr[i][j] = -100;
            }
        }

        var sum = winArr[i][0] + winArr[i][1] + winArr[i][2];

        if (sum === 0) {
            result.innerHTML = "Победили нолики";
            message.innerHTML = "Игра окончена";
            counterO++;
            menuO.innerHTML = counterO;
            for (i = 0; i < 9; i++) {
                cell[i].removeEventListener("click", currentStep);
            }
            isWin = true;
        } else if (sum === -300) {
            result.innerHTML = "Победили Крестики";
            message.innerHTML = "Игра окончена";
            counterX++;
            menuX.innerHTML = counterX;
            for (i = 0; i < 9; i++) {
                cell[i].removeEventListener("click", currentStep);
            }
            isWin = true;
        }

    }
    return isWin;
}



resetGame.addEventListener("click", function() {
    for (i = 0; i < 9; i++) {
        cell[i].textContent = "";
        cell[i].classList.remove("x");
        cell[i].classList.remove("o");
        player = "X";
        step = 0;
        winArr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
        result.innerText = "";
        message.innerText = "Ходит игрок " + player;
        cell[i].addEventListener("click", currentStep);
    }
});


resetCount.addEventListener("click", function() {
    counterX = 0;
    counterO = 0;
    menuO.innerHTML = counterO;
    menuX.innerHTML = counterX;
});































