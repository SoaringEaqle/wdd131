let character = {
    imageSRC: "images/img.webp",
    imageALT: "Picture of Snortleblat",
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 8,
    health: 100,

    attacked: function() {
        this.health -= 20;
    },

    levelUp: function() {
        this.health = 100 + this.level;
        this.level ++;
    }
}


render();



function render() {
    let card = document.querySelector(".card");

    card.innerHTML = `<img src="${character.imageSRC}" alt="${character.imageALT}" class="image">
    <h2 class ="name">${character.name}</h2>
    <div class="stats">
        <p>${character.class}</p>
        <p>${character.level}</p>
        <p>${character.health}</p>
        <div class = "buttons">
            <button id="attacked">Attacked</button>
            <button id="levelUp">Level Up</button>
        </div>
    </div>`;

    let aButton = document.querySelector("#attacked");

    aButton.addEventListener("click", function() {
        character.attacked();
        render();
    });

    let lButton = document.querySelector("#levelUp");
    lButton.addEventListener("click", function() {
        character.levelUp();
        render();
    });
}