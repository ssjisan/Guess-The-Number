// * Guess The Number Game
//  * Done: Get user value from input and save it to variable numberGuess
//  * Done: Generate a random number 1 to 100 and save it to variable correctNumber
//  * Done: Console whether the guess is too high, too low, or is correct inside playGame function
//  * Done: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
//  * Done: Complete the showYouWon, showNumberAbove, showNumberBelow
//  * Done: Use the showYouWon... functions within displayResult to display the correct dialog
//  * Done: Save the guess history in a variable called guess
//  * Done: Display the guess history using displayHistory() function
//  * ToDo: Use the initGame() function to restart the game

let correctNumber = getRandomNumber();
let guesses = [];

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", clearData);
}

function playGame() {
    let receivedNumbers = document.getElementById('number-guess').value;
    displayResult(receivedNumbers);
    saveGuess(receivedNumbers)
    displayHistory();
    console.log(receivedNumbers);
}

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    return(randomNumber);
}


function displayResult(receivedNumbers){
    if(receivedNumbers > correctNumber){
        showNumberAbove();
    }
    else if(receivedNumbers < correctNumber){
        showNumberBelow();
    }
    else{
        
        showYouWon();
    }
}
function saveGuess(guess){
    guesses.push(guess);
    console.log(guesses);
}

function displayHistory() {
    let index = guesses.length-1; 
    let list = "<ul class='list-group'>";
    while(index >= 0){
      list += "<li class='list-group-item'>" + "You guessed" +" "+  guesses[index] + "</li>";
      index-=1;
    }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
  }


function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
      case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>"
        break;
      case "won":
        dialog = "<div class='alert alert-success' role='alert'>"
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
  }

function showYouWon(){
    const text = "Awesome job, you got it!"
    let dialog = getDialog("won",text);
    document.getElementById("result").innerHTML = dialog;
  }
  
  function showNumberAbove(){
    const text = "Your guess is too high!"
    let dialog = getDialog("warning",text);
    document.getElementById("result").innerHTML = dialog;
  }
  
  function showNumberBelow(){
    const text = "Your guess is too low!"
    let dialog = getDialog("warning",text);
    document.getElementById("result").innerHTML = dialog;
  }
  
function clearData(){
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    document.getElementById("number-guess").value = "";
    document.getElementById("history").innerHTML = "";
    guesses = [];
}