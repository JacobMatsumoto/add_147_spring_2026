/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb */

const items = [
    {
        picture: "images/Jayjay2Square.jpeg", 
        paragraph: "Our family’s cats live in separate homes, each bringing their own quirks to their surroundings. Jade and Shifu are calm observers, often found quietly watching the world. Taco and Tobi add energy, dashing around and chasing everything in sight. Mira, Thor, Shadow, and Stripes enjoy their independence, exploring their spaces with curiosity. Ginger and Frank are the laid-back ones, preferring cozy corners to curl up in. Though they don’t share a roof, they each leave their unique imprint on their households.", 
        title:"Jacob's Family's Cats"
    },
    {
        picture: "images/Mira3Square.jpeg", 
        paragraph: "Our family’s cats live in separate homes, each bringing their own quirks to their surroundings. Jade and Shifu are calm observers, often found quietly watching the world. Taco and Tobi add energy, dashing around and chasing everything in sight. Mira, Thor, Shadow, and Stripes enjoy their independence, exploring their spaces with curiosity. Ginger and Frank are the laid-back ones, preferring cozy corners to curl up in. Though they don’t share a roof, they each leave their unique imprint on their households.", 
        title: "Jacob's Family's Cats"
    },
    {
        picture: "images/TobiSquare2.jpeg", 
        paragraph: "Our family’s cats live in separate homes, each bringing their own quirks to their surroundings. Jade and Shifu are calm observers, often found quietly watching the world. Taco and Tobi add energy, dashing around and chasing everything in sight. Mira, Thor, Shadow, and Stripes enjoy their independence, exploring their spaces with curiosity. Ginger and Frank are the laid-back ones, preferring cozy corners to curl up in. Though they don’t share a roof, they each leave their unique imprint on their households.", 
        title:"Jacob's Family's Cats",
    },
    {
        picture: "images/ShadowSquare.jpeg", 
        paragraph: "Our family’s cats live in separate homes, each bringing their own quirks to their surroundings. Jade and Shifu are calm observers, often found quietly watching the world. Taco and Tobi add energy, dashing around and chasing everything in sight. Mira, Thor, Shadow, and Stripes enjoy their independence, exploring their spaces with curiosity. Ginger and Frank are the laid-back ones, preferring cozy corners to curl up in. Though they don’t share a roof, they each leave their unique imprint on their households.", 
        title:"Jacob's Family's Cats"
    },
    {
        picture: "images/JayJay3Square.jpeg", 
        paragraph: "Our family’s cats live in separate homes, each bringing their own quirks to their surroundings. Jade and Shifu are calm observers, often found quietly watching the world. Taco and Tobi add energy, dashing around and chasing everything in sight. Mira, Thor, Shadow, and Stripes enjoy their independence, exploring their spaces with curiosity. Ginger and Frank are the laid-back ones, preferring cozy corners to curl up in. Though they don’t share a roof, they each leave their unique imprint on their households.", 
        title:"Jacob's Family's Cats"
    },   
    {
        picture: "images/Ginger2square.jpeg", 
        paragraph: "Our family’s cats live in separate homes, each bringing their own quirks to their surroundings. Jade and Shifu are calm observers, often found quietly watching the world. Taco and Tobi add energy, dashing around and chasing everything in sight. Mira, Thor, Shadow, and Stripes enjoy their independence, exploring their spaces with curiosity. Ginger and Frank are the laid-back ones, preferring cozy corners to curl up in. Though they don’t share a roof, they each leave their unique imprint on their households.", 
        title:"Jacob's Family's Cats"
    }
]
/* change the image, paragraph and title */
function change(picture, paragraph, title) {
    document.getElementById("large").src = picture; 
    document.getElementById("paragraph_display").innerHTML = paragraph;
    document.getElementById("title_display").innerHTML = title;

}

let index_change = 1

setInterval(() => { //the () => is shorthand for giving it a function to then interval
    const item = items[index_change]; // Get the current item from the array
    change(item.picture, item.paragraph, item.title); // Update the display
    index_change = (index_change + 1) % items.length; // Increment the index and loop back to 0
}, 5000);
