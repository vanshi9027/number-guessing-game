let  randomnumber = Math.floor(Math.random () * 100) + 1;
let attemptleft = 5;
console.log(randomnumber);
const checkbtn = document.getElementById("checkbtn");
const userinput = document.getElementById("guessinput");
const resetbtn = document.getElementById("resetbtn");
const message = document.getElementById("message");
const attemptDisplay = document.getElementById("attempts");
const container = document.querySelector(".game-container");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
const closesound = document.getElementById("closeSound");


userinput.addEventListener("keydown",(e) => {
  if(e.key ==="Enter"){
    checkbtn.click();
  }
});
checkbtn.addEventListener("click", () => {
    const userguess = parseInt(userinput.value);
   if(isNaN(userguess) || userguess<1 || userguess>100){
    message.innerText = "⛔ Enter a number between 1 and 100!";
    return;
   }


   if(userguess=== randomnumber){
    message.innerText ="🎉 Correct! You guessed it!";
    winSound.play();
    container.style.backgroundColor = "lightgreen";
   setTimeout(() => {
    container.style.backgroundColor = ""; // or use original color
    }, 5000); // 2000ms = 2 seconds

    endGame();

    
    
   }
   else{
    attemptleft--;

    const diff = Math.abs(userguess-randomnumber);
    if(diff <=5){
      message.innerText = "🔥 Very close!";
      closesound.play();
         container.style.backgroundColor = "yellow";
         setTimeout(() => {
    container.style.backgroundColor = ""; // or use original color
  }, 2000); // 2000ms = 2 seconds

       
    }else if(userguess < randomnumber){
         message.innerText = "📉 Too low!";
    }else {
      message.innerText = "📈 Too high!";
    }
     

    if(attemptleft === 0){
        message.innerText += ` 💀 Game Over! The number was ${randomnumber}`;
        loseSound.play();
      container.style.backgroundColor = "salmon";
      setTimeout(() => {
    container.style.backgroundColor = ""; // or use original color
  }, 3000); // 2000ms = 2 seconds

      endGame();
    }

   }
    attemptDisplay.innerText = `Attempts Left: ${attemptleft}`;
    userinput.value ="";

   
});
function endGame(){
    checkbtn.disabled = true;
    resetbtn.style.display = "inline"
}
resetbtn.addEventListener("click", resetGame);

function resetGame() {
  randomnumber = Math.floor(Math.random() * 100) + 1; 
  console.log("new random generated ", randomnumber);// new random number
  attemptleft = 5;          // reset tries
  userinput.value = "";
  message.innerText = "";
  attemptDisplay.innerText = `Attempts Left : ${attemptleft}`;
  container.style.backgroundColor = "#f3f3f3"; // reset color
  checkbtn.disabled = false;
  resetbtn.style.display = "none"; // hide reset
}
