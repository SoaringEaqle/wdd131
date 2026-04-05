
const navBtn = document.querySelector("#main-nav-button");

let menuClicked = false;
const menu = document.querySelector("#main-nav");


function toggleMenu(toggle) {

    switch (toggle) {
        case "on":
            menu.classList.remove("hidden");
            break;
        case "off":
            menu.classList.add("hidden");
            break;
        default:
            menu.classList.toggle("hidden");
            break;
    }
}

navBtn.addEventListener("mouseover", () =>
{
    toggleMenu("on");
});

navBtn.addEventListener("click", () =>
{
    menuClicked = !menuClicked;
    switch (menuClicked) {
        case true:
            toggleMenu("on");
            break;
        case false:
            toggleMenu("off");
            break;
    }
});

menu.addEventListener("mouseover", () =>{
        toggleMenu("on");
    }
);

navBtn.addEventListener("mouseout", () =>
{
    if(menuClicked){
        return;
    }

    toggleMenu("off");
});

menu.addEventListener("mouseout", () =>{
    if(menuClicked){
        return;
    }

    toggleMenu("off");
})
