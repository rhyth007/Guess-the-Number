let randomNum  = Math.floor(Math.random() *100) + 1;
console.log(randomNum);
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const HighorLow = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
console.log(guessSubmit)
const guessNumber = document.querySelector('.guessNumber');
console.log(guessNumber)

let GuessCountDown = 1;

function CheckGuess(){

    const userGuess = Number(guessNumber.value);
    console.log(userGuess);
    if(GuessCountDown===1)
    {
        guesses.textContent = 'Previous Guesses : ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess===randomNum){
        lastResult.textContent = 'Congratulations !! You Guessed it Correctly';
        lastResult.style.backgroundColor = 'green';
        HighorLow.textContent = '';
        SetGameOver();
    }
    else if(GuessCountDown === 10){
        lastResult.textContent = ' !! G A M E O V E R !!';
        lastResult.style.backgroundColor = 'red';
        HighorLow.textContent = '';
        SetGameOver();

    }
    else{

        lastResult.textContent = 'Wrong!!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess > randomNum){
            HighorLow.textContent = 'Last guess was too High!';
    }else if(userGuess < randomNum){
        HighorLow.textContent = 'Last guess was too low!';

    }
    GuessCountDown++;
    guessNumber.value = '';
    guessNumber.focus();

}
}
guessSubmit.addEventListener('click',CheckGuess);

function SetGameOver(){
 guessNumber.disabled = true;
 guessSubmit.disabled = true;
 resetButton = document.createElement('button');
 resetButton.textContent = 'Start new game';
 document.body.append(resetButton);
 resetButton.addEventListener('click', resetGame);


 
}
function resetGame(){
    guessCount = 1;
    

  
  const resetParas = document.querySelectorAll('.result p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);

  guessNumber.disabled = false;
  guessSubmit.disabled = false;
  guessNumber.value = '';
  guessNumber.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;

}