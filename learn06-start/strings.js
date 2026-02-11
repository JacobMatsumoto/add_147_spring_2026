function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Jacob Matsumoto";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    let myStringLength = myString.length;
    document.getElementById("length").innerHTML = myStringLength;

    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let myEscape = "He told me \" I\'d not do that if I were you also here\'s a slash \\ \"";
 
    document.getElementById("escape").innerHTML = myEscape;
    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph

    let name = "Jacob Ryan Matsumoto";

    first = name.slice(0, 5);

    document.getElementById("first").innerHTML = first;
    // Use the Javascript substring Method to display your middle name to the middle paragraph

    middle = name.substring(6, 10);
    document.getElementById("middle").innerHTML = middle;
    // Use the JavaScript subst Method to display your last name to the last paragraph

    last = name.substr(11, 21);
    document.getElementById("last").innerHTML = last;
    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College";
    let myMajor = major.replace("Physical Therapy", "Programming");
    document.getElementById("major").innerHTML = myMajor;
    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!";
    let upperMyText = myText.toUpperCase();
    document.getElementById("upper").innerHTML = upperMyText;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                ";

    let trimmedText = trimText.trim();
    document.getElementById("trim").innerHTML = trimmedText;
    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"

    let indexMay = months.indexOf("May") //Couldn't find this on the site, but through following the trend of how the others worked I think I got it
    document.getElementById("index").innerHTML = indexMay;

    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first2 = `Jacob`
    let last2 = `Matsumoto`

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph

    let greeting = `Welcome to ${first2} ${last2} dummy website!`
    document.getElementById("greeting").innerHTML = greeting;
}