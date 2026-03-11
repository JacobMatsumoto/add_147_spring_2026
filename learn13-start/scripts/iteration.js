/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const movies = [
  "Snow White",
  "Fox and the Hound",
  "Cinderella",
  "Lady and the Tramp",
  "Encanto"
];

let list = "";

for (const x of movies) {
    list +=  x + "<br>"
}

document.getElementById("list").innerHTML = list;


/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

const songs = new Set([
  "Shots",
  "Gold",
  "Smoke and Mirrors",
  "I'm So Sorry",
  "I Bet My Life"
]);

let mySet = "";
for (const x of songs) {
  mySet += x + "<br>";
}
document.getElementById("set1").innerHTML = mySet;

// add two more songs to the set then display in the set2 paragraph


songs.add("Polaroid");

songs.add("It Comes Back to You");

let mySet2 = "";
for (const x of songs) {
  mySet2 += x + "<br>";
}


document.getElementById("set2").innerHTML = mySet2;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page) Not at the bottom of the page btw
    only mentioned once at the top with no example

https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_foreach
    const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}
*/

let contact = ""

const contacts = new Map([
  ["John", "johnm@example.com"],
  ["Jake", "jakec@example.com"],
  ["Emma", "emmad@example.com"],
  ["Ryan", "ryant@example.com"],
  ["Lily", "lilyb@example.com"]
]);

contacts.forEach(myFunction)

function myFunction(email, name) { //Grabs them in reverse order?
    contact += "Name: " + name + ". Email: " + email + "<br>"
}

document.getElementById("map1").innerHTML = contact;



// add two new names and emails and display in map2 use the forEach() method

contacts.set("Jim", "jimf@example.com");
contacts.set("Bill", "billw@example.com");

let contact2 = ""

contacts.forEach(myFunction2)

function myFunction2(email, name) { //Grabs them in reverse order?
    contact2 += "Name: " + name + ". Email: " + email + "<br>"
}

document.getElementById("map2").innerHTML = contact2;


// get and display the email of one person, display in map3

let oneEmail = contacts.get("Jim");

document.getElementById("map3").innerHTML = oneEmail;