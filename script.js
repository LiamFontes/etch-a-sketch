const sliderValue = document.getElementById("range");
const sliderValueContainer = document.getElementById("sliderValueDiv");


sliderValueContainer.innerText = sliderValue.value;


//Update the value of the slider

//Update the Number of Divs in the board
sliderValue.oninput = function boardDiveUpdate() {

    sliderValueContainer.innerText = this.value;
    clearBoard();

    numOfDivs = this.value;
    const boardContainer = document.getElementById("boardContainer");
    
    for (i = 0; i <= numOfDivs;i++){
        let div = document.createElement('div');
        
        div.id = `div{$i}`;
        div.className = "divRepeat";
        div.innerText = "1"
        boardContainer.appendChild(div);
    }
   
   }



   function clearBoard(){
    const boardContainer = document.getElementById("boardContainer")
    boardContainer.innerText = "";

   }

/*TO DO:

Must add the following features:
   - Function: Calculate the div size based on the size of the board
   - Function: add event handler for hovering
   - add buttons/selections for different coloring
   - clear board button
   
