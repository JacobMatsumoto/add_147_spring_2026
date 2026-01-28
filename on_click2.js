/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb */
//this links to even_more_pictures
const items = [
    {
        picture: "../images/Mira1.jpeg", 
        paragraph: "Mira looking expectantly for pets... well are you gonna keep her waiting?", 
        title:"Mira Wants Head Pats!"
    },
    {
        picture: "../images/Frank1.jpeg", 
        paragraph: "Frank laying in a basket, he likes to find the best spots to lay down how cute!", 
        title:"Frank Resting"
    },
    {
        picture: "../images/jayjay5.jpeg", 
        paragraph: "JayJay waiting for belly scratches in a little window, he is so adorable isn't he??", 
        title:"Tummy Rubs"
    },
    {
        picture: "../images/rav.jpeg", 
        paragraph: "Ravioli laying down making biscuits, she is a very shy cat but when you get her going she loves pets", 
        title:"Makin Biscuits"
    },
    {
        picture: "../images/Buts&Taco.jpeg", 
        paragraph: "Butts and Taco are best buddies here Butts is giving him a bath! They love to cuddle with eachother", 
        title:"Bath Time"
    },
    {
        picture: "../images/ravi2.jpeg", 
        paragraph: "Ravioli laying in an old bed trying to take a nap... but the camera yearns for photos!", 
        title:"Little Rav"
    },
    {
        picture: "../images/Shifu1.jpeg", 
        paragraph: "Shifu stretching on the wall.", 
        title:"Shifu Big Stretch!"
    },
    {
        picture: "../images/buts3.jpeg", 
        paragraph: "Butts laying on his tower resting, if you walk past him he can and will slap you for not petting him", 
        title:"Butts in waiting"
    },
    {
        picture: "../images/frank3.jpeg", 
        paragraph: "Frank is laying down in a little sleigh here. What a little goofball", 
        title:"Sleigh Frank!"
    },
    {
        picture: "../images/taco&jay.jpeg", 
        paragraph: "Jay graciously sharing his favorite window with Taco. I love this picture because it shows them in almost the exact same pose.", 
        title:"Jay and Taco sharing a window view"
    },
]
let current_index = 0;
function change_on_click(index) {
    const item = items[index];
    current_index = index
    change(item.picture, item.paragraph, item.title);
}
function arrow_right() {
    current_index = (current_index + 1) % items.length;
    const item = items[current_index];
    change(item.picture, item.paragraph, item.title);
}
function arrow_left() {
    current_index = (current_index - 1) % items.length;
    if (current_index == -1)
        current_index = 9
    const item = items[current_index];
    change(item.picture, item.paragraph, item.title);
}
/* change the image */
function change(picture, paragraph, title) {
    document.getElementById("large").src = picture; 
    document.getElementById("paragraph_display").innerHTML = paragraph;
    document.getElementById("title_display").innerHTML = title;
}