let gal = document.querySelector("#gallery");
let modal = document.querySelector('#modal');
let modalImage = modal.querySelector('img');
let closeButton = modal.querySelector('.close-viewer');
let menu = document.querySelector('#menu-btn');
let nav = document.querySelector('#nav');


gal.addEventListener('click', openModal);

function openModal(e)
{
    let img = e.target;

    modalImage.src = img.src;
    modalImage.alt = img.alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => modal.close());

menu.addEventListener('click', () =>
{
    if(nav.style.display === 'flex')
    {
        nav.style.display = 'none';

    }
    else
    {
        nav.style.display = 'flex';
    }
});



