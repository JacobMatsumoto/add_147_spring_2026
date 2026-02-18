// declare and initialize array 
//this uses some stuff we hadn't learned yet and also the video doesn't fix any issues. you can see around 25:30 she guesses a p and it still counts down. Nothing got solved. Incredibly frustrating I'm just venting, sorry I got it eventually.
let game = ["PANCAKES","WAFFLES","OMELETTE","HASHBROWNS","TOAST","EGGS","BACON","SAUSAGE","BAGEL","BURRITO"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let guessed_letters = [];
// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    for (let c = 0; c < answer.length; c++) {
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }

        output = output + display[c] + ' ';
  




    }
//https://www.w3schools.com/js/js_array_search.asp#mark_includes source

if (guessed_letters.includes(userLetter.toUpperCase())){ //catches re-guesses to stop you from getting one letter and spamming it
    win++;
} 
guessed_letters.push(userLetter.toUpperCase())
document.getElementById("guessed").innerHTML = guessed_letters.toString()
//above I kept the logic of dectecting if a letter guessed is correct or not, but I moved the if else detecting found out of the loop because it would always either count as false if you got the guess right, or it would iterate over the entire word decreasing guesses as it went causing the game to be impossible. bellow I just made a simple if else. it checks if found is still false after the click and then de-increments attempts. or if found is not false it makes found false to make the logic work. (same reason guessed letter just kinda doesn't work in the loop. it iterates over weirdly. cool insight to how a loop like this works but frustrating to work with after not being the one to write it. 
if (found == false){
    attemptsLeft -= 1;

} else{
    found = false;
    }

    
document.getElementById("word").innerHTML = output;
output = '';

if (attemptsLeft == 6){
    document.getElementById("hangman").src = "images/01.png"
    }else if (attemptsLeft == 5){
    document.getElementById("hangman").src = "images/02.png"
    }else if (attemptsLeft == 4){
    document.getElementById("hangman").src = "images/03.png"
    }else if (attemptsLeft == 3){
    document.getElementById("hangman").src = "images/04.png"
    }else if (attemptsLeft == 2){
    document.getElementById("hangman").src = "images/05.png"
    }else if (attemptsLeft == 1){
    document.getElementById("hangman").src = "images/06.png"
    }else if (attemptsLeft == 0){
    document.getElementById("hangman").src = "images/07.png"
    }



    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
});


//scirpt connected fine somereason the button and the script are not registering.