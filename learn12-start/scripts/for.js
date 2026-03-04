// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

/*
My old python 1 99 bottles code

count = 99 #defining our count
while count > 1:
    print(f"{count} bottles of beer on the wall " f"\n{count} bottles of beer" "\nTake one down pass it around")
    count -= 1 #incrementing it to count down
    if count == 1: #insurance for grammar on 1 bottle
         print(f"{count} bottle of beer on the wall" "\n")
    else:print(f"{count} bottles of beer on the wall" "\n")
    if count == 1:
         print(f"{count} bottle of beer on the wall"f"\n{count} bottle of beer""\nTake it down pass it around" "\nNo more bottles of beer on the wall!")

Ended up with almost entirely different logic anyway, nice to have the reference though
*/

text = ""

for (let i = 99; i > 0;) {
    if (i > 1){
        text += i + " Bottles of beer on the wall, " + i + " bottles of beer! " + "Take one down, pass it around, " + (i-1) + " bottles of beer on the wall" + "<br>";
        i--;
    }
    else if (i == 1){
        text += i + " Bottle of beer on the wall, " + i + " bottle of beer! " + "Take it down, pass it around, " + (i-1) + " bottles of beer on the wall" + "<br>";
        i--;
    }
}

document.getElementById("beer").innerHTML = text;



//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

let for_in = "";
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

for (let x in months){
    for_in += months[x] + ", ";
}


document.getElementById("for-in").innerHTML = for_in;


// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let my_string = "Donut";

let my_breakdown = ""

for (let x of my_string) {
  my_breakdown += x + "<br>";
}

document.getElementById("for-of").innerHTML = my_breakdown;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let my_while = ""
let i = 1
while (i<51){
    my_while += i + ", ";
    i++;
}

document.getElementById("while").innerHTML = my_while;