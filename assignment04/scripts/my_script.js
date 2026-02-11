const cat1 = {
    name: "Jay Jay",
    breed: "Russian Blue",
    image: "images/Jayjay2Square.jpeg",
    personality: "Kind but sassy",
    story: "Jayjay laying on the bed waiting for pets"
};

const cat2 = {
    name: "Tobi",
    breed: "Saiamese",
    image: "images/Tobi3.jpeg",
    personality: "Kind but dumb as rocks",
    story: "Tobi trying to take a nap on the couch"
};

const cat3 = {
    name: "Stripes",
    breed: "Tabby",
    image: "images/stripes2.jpeg",
    personality: "Kind and noisy",
    story: "Stripes laying on the top of a matress looking for more pets"
};

const cat4 = {
    name: "Thor",
    breed: "Tabby",
    image: "images/thor3vertical.jpeg",
    personality: "Nice and fiesty",
    story: "Thor laying on the railing"
};

const cat5 = {
    name: "Ravioli",
    breed: "Tuxedo",
    image: "images/ravi2.jpeg",
    personality: "Very skiddish",
    story: "She finally came out and let me get a picture"
};
function display() {
    let html = `<h2>${cat1.name}</h2>` +
    `<h3>${cat1.breed}</h3>` + `<img src = ${cat1.image}>` +
    `<h3>Personality</h3>` +
    `<p>${cat1.personality}</p>` + `<h3>Story</h3>` +
    `<p>${cat1.story}</p>`;
    document.getElementById('cat1').innerHTML = html;

    let html2 = `<h2>${cat2.name}</h2>` +
    `<h3>${cat2.breed}</h3>` + `<img src = ${cat2.image}>` +
    `<h3>Personality</h3>` +
    `<p>${cat2.personality}</p>` + `<h3>Story</h3>` +
    `<p>${cat2.story}</p>`;
    document.getElementById('cat2').innerHTML = html2;

    let html3 = `<h2>${cat3.name}</h2>` +
    `<h3>${cat3.breed}</h3>` + `<img src = ${cat3.image}>` +
    `<h3>Personality</h3>` +
    `<p>${cat3.personality}</p>` + `<h3>Story</h3>` +
    `<p>${cat3.story}</p>`;
    document.getElementById('cat3').innerHTML = html3;

    let html4 = `<h2>${cat4.name}</h2>` +
    `<h3>${cat4.breed}</h3>` + `<img src = ${cat4.image}>` +
    `<h3>Personality</h3>` +
    `<p>${cat4.personality}</p>` + `<h3>Story</h3>` +
    `<p>${cat4.story}</p>`;
    document.getElementById('cat4').innerHTML = html4;

    let html5 = `<h2>${cat5.name}</h2>` +
    `<h3>${cat5.breed}</h3>` + `<img src = ${cat5.image}>` +
    `<h3>Personality</h3>` +
    `<p>${cat5.personality}</p>` + `<h3>Story</h3>` +
    `<p>${cat5.story}</p>`;
    document.getElementById('cat5').innerHTML = html5;
}