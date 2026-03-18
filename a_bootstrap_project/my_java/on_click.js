/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb */
//this links to more_pictures
const items = [
    {
        picture: "../images/buts.jpeg", 
        paragraph: "Butts is a trouble maker, he likes to fight, he is eating my grandma's shoe in this picture", 
        title:"Butts attacks!"
    },
    {
        picture: "../images/frank2.jpeg", 
        paragraph: "Frank enjoying a bit of rest in his cat food can bed!", 
        title: "Frank in bed"
    },
    {
        picture: "../images/IMG_6749.jpeg", 
        paragraph: "I just wanted to include some of my favorite pictures of Jay, he is so sweet", 
        title:"JayJay big streeeeetch"
    },
    {
        picture: "../images/jayjay4.jpeg", 
        paragraph: "Jay loves this window! He sits in it for hours", 
        title:"Jay's favorite window"
    },
    {
        picture: "../images/jayjay6.jpeg", 
        paragraph: "I love this picture of Jay, he is a very photogenic cat, not biased obviously", 
        title:"Jay laying down"
    },   
    {
        picture: "../images/TobiStripes2rect.jpeg", 
        paragraph: "Tobi and Stripes cuddling and napping together when they were younger, they are best of friends.", 
        title:"Tobi and Stripes taking a nap"
    },
    {
        picture: "../images/buddybuddy.jpeg", 
        paragraph: "Buddy Buddy is my S.O.'s family's cat, he is such a character. He is super nosey and loves to play", 
        title:"Nosey Buddy Buddy"
    },
    {
        picture: "../images/Tobi3.jpeg", 
        paragraph: "Tobi laying down taking a nap, no, they can't avoid the cameras anywhere!", 
        title: "Tobi taking a nap"
    },
    {
        picture: "../images/taco2.jpeg", 
        paragraph: "It is rare to see Taco out and about so we try to take advantage of those times by taking as many pictures as possible", 
        title:"Taco trying to sleep but it is photo time"
    },  
    {
        picture: "../images/taco1.jpeg", 
        paragraph: "I'm 99.99% sure he was begging for treats in this photo. He always stands around that spot when he begs", 
        title:"Taco begging"
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
    if (current_index == -1) //catches - index and fixes it to loop back could be items.length to make it a more modular.
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
