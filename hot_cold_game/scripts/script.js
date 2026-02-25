//Addapted heavily and unneccassarily from the hangman project (probably made it more pain that it was worth) as this uses sort of completely different logic
let game = Math.floor(Math.random() * 1000);
let answer = game;
let output = '';
let user_num = '';
let found = false;
let guessed_numbers = [];
let comparison = 0;
function setup() {
    alert(answer);
    document.getElementById("number").innerHTML = output;
}



document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    output = '';
    user_num = document.getElementById("guess").value;
    document.getElementById("guess").value = '';
    comparison = Math.abs(user_num - answer) //https://www.w3schools.com/js/js_math.asp

    if (user_num == answer) {
        found = true;
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
        document.getElementById("hot_or_cold").innerHTML = "You got it!!!"
        document.getElementById("hot_or_cold").style.color = "red"
        }
    else if (comparison <= 5) {
        document.getElementById("hot_or_cold").innerHTML = "On fire!"
        document.getElementById("hot_or_cold").style.color = "red"
    }else if (comparison <= 10) {
        document.getElementById("hot_or_cold").innerHTML = "Very Hot!"
        document.getElementById("hot_or_cold").style.color = "orange"
    }else if (comparison <= 50) {
        document.getElementById("hot_or_cold").innerHTML = "Hot"
        document.getElementById("hot_or_cold").style.color = "gold"
    }else if (comparison <= 100) {
        document.getElementById("hot_or_cold").innerHTML = "warm"
        document.getElementById("hot_or_cold").style.color = "yellow"
    }else if (comparison <= 200) {
        document.getElementById("hot_or_cold").innerHTML = "cool"
        document.getElementById("hot_or_cold").style.color = "lightblue"
    }else if (comparison <= 300) {
        document.getElementById("hot_or_cold").innerHTML = "cold"
        document.getElementById("hot_or_cold").style.color = "blue"
    }else if (comparison <= 500) {
        document.getElementById("hot_or_cold").innerHTML = "very cold"
        document.getElementById("hot_or_cold").style.color = "purple"
    }else if (comparison <= 750) {
        document.getElementById("hot_or_cold").innerHTML = "insanely cold"
        document.getElementById("hot_or_cold").style.color = "darkgrey"
    }else {
        document.getElementById("hot_or_cold").innerHTML = "frozen"
        document.getElementById("hot_or_cold").style.color = "black"
    }

  





    guessed_numbers.push(" " + user_num + " was " + document.getElementById("hot_or_cold").innerHTML); //I wish I could find an easier way to do that #TODO
    document.getElementById("guessed").innerHTML = guessed_numbers.toString();



        
    document.getElementById("number").innerHTML = output;
    output = '';
});
