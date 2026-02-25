/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

const time_at_recording = new Date();
document.getElementById("basic").innerHTML = time_at_recording;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

const today = new Date(2026, 1, 24);

document.getElementById("today").innerHTML = today;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph

const birthday = new Date("December 24, 2000")

document.getElementById("birthday").innerHTML = birthday;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

document.getElementById("iso").innerHTML = time_at_recording.toISOString();

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

const date1 = new Date("2026-02"); //Weird and gets the day wrong? Makes sense if it isn't given.
const date2 = new Date("02/24/2026");
const date3 = new Date("Feb 24 2026");

document.getElementById("date1").innerHTML = "ISO Dates (Year and Month): " + date1;
document.getElementById("date2").innerHTML = "JavaScript Short Dates: " + date2; 
document.getElementById("date3").innerHTML = "JavaScript Long Dates: " + date3;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

const get1 = new Date().getFullYear();
const get2 = new Date().getMonth();
const get3 = new Date().getDate();
const get4 = new Date().getDay();

document.getElementById("get1").innerHTML = "Get full year: " + get1;
document.getElementById("get2").innerHTML = "get month: " + get2; 
document.getElementById("get3").innerHTML = "get date: " + get3;
document.getElementById("get4").innerHTML = "get day: " + get4;

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

const set1 = new Date(); //cant declare and set at the same time
set1.setFullYear(2085, 11, 5);
const set2 = new Date();
set2.setMonth(2);
const set3 = new Date();
set3.setDate(4);
const set4 = new Date();
set4.setMinutes(45);

document.getElementById("set1").innerHTML = "Set full year: " + set1;
document.getElementById("set2").innerHTML = "Set month: " + set2; 
document.getElementById("set3").innerHTML = "Set date: " + set3;
document.getElementById("set4").innerHTML = "set minutes: " + set4;