function swap_to_img_1() {
    document.getElementById("cat").src = "images/buddybuddy.jpeg";
}

function swap_to_img_2() {
    document.getElementById("cat").src = "images/ravi2.jpeg";
}

function swap_to_img_3() {
    document.getElementById("cat").src = "images/jayjay6.jpeg";
}

function img_width() {
    document.getElementById("cat").style.width = "800px"
}

function text_color_swap() {
    document.getElementById("changing_p").style.color = "white"
}

function text_restore() {
    document.getElementById("changing_p").innerHTML = "The first img is Buddy Buddy"
}

function text_swap() {
    document.getElementById("changing_p").innerHTML = "The second img is Ravi"
}

function hide_img() {
    document.getElementById("cat").style.display="none"
}

function show_img() {
    document.getElementById("cat").style.display="block"
}