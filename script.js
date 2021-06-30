const sliderValue = document.getElementById("range");
const sliderValueContainer = document.getElementById("sliderValueDiv");

function colorChanger() {
    const divs = document.querySelectorAll('.divRepeat');

    divs.forEach(item => {
        item.addEventListener('mouseenter', colorChange => {
            item.style.backgroundColor = "red";
        })
    })
}


sliderValueContainer.innerText = sliderValue.value;

window.addEventListener('load', placeBoardDivs(32));
colorChanger();




//Update the value of the slider
//Update the Number of Divs in the board
sliderValue.oninput = function boardDivUpdate() {

    sliderValueContainer.innerText = this.value;
    clearBoard();

    numOfDivs = Number(this.value);
    placeBoardDivs(numOfDivs)
    colorChanger();
}

function placeBoardDivs(numOfDivs) {
    const boardContainer = document.getElementById("boardContainer");
    const containerWidth = boardContainer.offsetWidth;
    const divWidth = containerWidth / (numOfDivs + 1);

    for (j = 0; j < numOfDivs; j++) {

        for (i = 0; i < numOfDivs; i++) {

            let div = document.createElement('div');
            div.id = "div" + String(i);
            div.className = "divRepeat";
            div.style.width = String(divWidth) + "px";
            div.style.flexGrow = "1";

            boardContainer.appendChild(div);
        }
    }
}



function clearBoardButton() {
    const divs = document.querySelectorAll('.divRepeat');

    divs.forEach(item => {
        item.style.backgroundColor = "white";
    })
}

function clearBoard() {
    const boardContainer = document.getElementById("boardContainer")
    boardContainer.innerText = "";

}

/*TO DO:

Must add the following features:
   - add buttons/selections for different coloring
   - clear board button

*/