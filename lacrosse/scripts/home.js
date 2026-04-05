const images = [
    {img: "1652"},
    {img: "1657"},
    {img: "1683"},
    {img: "1720"},
    {img: "1760"},
    {img: "1768"},
    {img: "1779"},
    {img: "1785"},
    {img: "1786"},
    {img: "1790"},
    {img: "1795"},
    {img: "1798"},
    {img: "1814"},
    {img: "1838"},
    {img: "1850"},
    {img: "1857"},
    {img: "1860"},
    {img: "1870"},
    {img: "1873"},
    {img: "1874"},
    {img: "1879"},
    {img: "1884"},
    {img: "1887"},
    {img: "1889"},
    {img: "1905"},
    {img: "1921"},
]

const imagePSeries = 4;
/*function() {
    if(window.matchMedia("(min-width: 1000px)").matches)
    {
        return 8;
    }
    if(window.matchMedia("(min-width: 800px)").matches)
    {
        return 6;
    }
    return 4;
}
*/

let series = 0;
const maxSeries = Math.ceil((images.length / imagePSeries) - 1);

console.log(maxSeries);
init();

const modal = document.querySelector('#modal');
const modalImage = modal.querySelector('img');
const closeBtn = document.querySelector('.close-btn');

function placeImages() {
    let gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    for (let i = 0; i < imagePSeries; i++) {
        if (series * imagePSeries + i >= images.length) {
            break;
        }
        let img = document.createElement("img");
        img.classList.add("gal-img");
        img.src = `gal_image/IMG_${images[series * imagePSeries + i].img}.JPG`;
        gallery.appendChild(img);
    }
}

function init()
{
    placeImages();
}

document.querySelector("#left").addEventListener("click", function() {
    if (series === 0)
    {
        series = maxSeries;
    }
    else
    {
        series--;
    }
    placeImages();
});

document.querySelector("#right").addEventListener("click", function() {
    if (series === maxSeries)
    {
        series = 0;
    }
    else
    {
        series++;
    }
    placeImages();
});

document.querySelector(".gallery").addEventListener('click', openModal);

function openModal(e) {

// Code to show modal  - Use event parameter 'e'
    const img = e.target;

    modalImage.src = img.getAttribute("src");
    modalImage.alt = img.getAttribute("alt");

    modal.showModal();

}

function closeModal() {
    modalImage.src = "";
    modalImage.alt = "";

    modal.close();
}

closeBtn.addEventListener("click", closeModal);

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});


