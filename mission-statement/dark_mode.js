
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

let bodyStyle = document.querySelector("body").style;

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.src = 'byui_logo_dark.png';
        bodyStyle.backgroundColor = "#2b2b2b";
        document.querySelector("#container").style.border = "1px solid #a6a6a6";
        bodyStyle.color = "#fff";
        document.querySelector("h2").style.color = "#79c8fc";

    } else {
        logo.src = 'byui.png'
        bodyStyle.backgroundColor = "#ffffff";
        document.querySelector("#container").style.border = "none";
        bodyStyle.color = "#000";
        document.querySelector("h2").style.color = "#035F9C";
    }
}
