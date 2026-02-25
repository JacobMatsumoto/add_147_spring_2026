function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    let my_float1 = 4.4;
    let my_float2 = 4.6;
    let my_round = Math.round(my_float1)
    let my_ceil = Math.ceil(my_float1)
    let my_floor = Math.floor(my_float2)
    let my_trunc = Math.trunc(my_float2)
    let my_sign = Math.sign(my_float1)
    let my_pow = Math.pow(2, 5)
    let my_min = Math.min(my_float1, my_float2, my_pow)
    let my_rand = Math.random()

    document.getElementById("round").innerHTML = my_round
    document.getElementById("ceil").innerHTML = my_ceil
    document.getElementById("floor").innerHTML = my_floor
    document.getElementById("trunc").innerHTML = my_trunc
    document.getElementById("sign").innerHTML = my_sign
    document.getElementById("pow").innerHTML = my_pow 
    document.getElementById("min").innerHTML = my_min
    document.getElementById("random").innerHTML = my_rand





    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    let my_random_1_to_100 = Math.floor((Math.random() * 100) + 1)
    document.getElementById("random2").innerHTML = my_random_1_to_100

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let my_understanding = "From my understanding, === is a very strict comparison, 1 the int is not equal to \"1\" the string. However, under a == comparison 1==\"1\" it returns true because it more so just sees well, these are both 1 it doesn't take into account one is a string while the other is an int. Whereas === also checks type. ! then replaces the first of the =s and makes it a does not equal operator == loose comparison, === strict comparison (Same question from learn07?) Continued, == is just value, === is both value and type comparison"
    document.getElementById("comparisons").innerHTML = my_understanding


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}