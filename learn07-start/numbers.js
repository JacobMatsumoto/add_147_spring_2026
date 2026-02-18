function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Jacob Matsumoto"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let one = "one";
    let equation = one + 1
    document.getElementById("add").innerHTML = "one + 1 = " + equation;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph

    let my_num = 10;
    let my_string = my_num.toString();
    document.getElementById("to-string").innerHTML = my_string;


    // Demonstrate the use of toExponential() and print to the exponent paragraph

    let my_expo = my_num.toExponential();
    document.getElementById("exponent").innerHTML = my_expo;

    // Demonstrate the use of toFixed() and print to the fixed paragraph

    let my_float = 10.1343;
    let my_float_fixed = my_float.toFixed(2);
    document.getElementById("fixed").innerHTML = my_float + " toFixed(2) is " +  my_float_fixed;

    // Demonstrate the use of toPrecision() and print to the precision paragraph

    let my_float_precise = my_float.toPrecision(2);
    document.getElementById("precision").innerHTML = my_float + " toPrecision(2) is " +  my_float_precise;
    // Demonstrate the use of parseFloat() and print to the float paragraph

    let my_float_parse_float = parseFloat(my_float);
    document.getElementById("float").innerHTML = "my float = 10.1343 <br> and parseFloat(${my_float}) is " +  my_float_parse_float;

    // Demonstrate the use of parseInt() and print to the int paragraph

    let my_string_parsed = parseInt(my_string);
    document.getElementById("int").innerHTML = "my_string = \"10\" <br> and parseInt(${my_string}) is " +  my_string_parsed;

    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    let my_understanding = "From my understanding, === is a very strict comparison, 1 the int is not equal to \"1\" the string. However, under a == comparison 1==\"1\" it returns true because it more so just sees well, these are both 1 it doesn't take into account one is a string while the other is an int. Whereas === also checks type. ! then replaces the first of the =s and makes it a does not equal operator == loose comparison, === strict comparison"
    document.getElementById("equals").innerHTML = my_understanding

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    let my_understanding_logic = "and operator is && while || is or. if you use a couple and operators, every single statement needs to return true, if you use an or only on or the order needs to be true. Same as python and swift just different syntax. && will be evaluated first in an expression before any || ors will be"
    document.getElementById("logic").innerHTML = my_understanding_logic


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah


    let answer = 10;

    switch(answer){
        case 10:
            document.getElementById("switch").innerHTML = "Yes! 10+0=10";
            break;
        case 5:
            document.getElementById("switch").innerHTML = "where'd you get 5 from?";
            break;
        default:
            document.getElementById("switch").innerHTML = "did you even try?"
    }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

    var grade = 80
    // grade = 15

    grade >= 60 
    ? document.getElementById("ternary").innerHTML = "You passed!"
    : document.getElementById("ternary").innerHTML = "Unfortunately, you didn't pass"
}