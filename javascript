let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");

let turn0 = true; 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { 
            box.innerText = turn0 ? "O" : "X"; 
            box.classList.add("disabled"); 
            turn0 = !turn0; 

            checkWinner();
        }
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos1Val === pos3Val) {
            showWinner(pos1Val);
            return;
        }
    }
};
const checkDraw = () => {
    
    return Array.from(boxes).every(box => box.innerText !== "");
};


resetbtn.addEventListener("click", () => {
    resetGame();
});

newGameBtn.addEventListener("click", () => {
    resetGame();
});

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = ""; 
        box.classList.remove("disabled"); 
    });
    msgContainer.classList.add("hide"); 
    turn0 = true; 
}
