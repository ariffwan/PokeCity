// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const cards = document.querySelectorAll('.collection-card');
const popup = document.getElementById('cardPopup');
const popupImg = document.getElementById('popupImg');
const popupTitle = document.getElementById('popupTitle');
const popupClose = document.querySelector('.popup-close');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        const title = card.dataset.card || card.querySelector('h3').innerText;

        popupImg.src = imgSrc;
        popupTitle.innerText = title;

        popup.style.display = 'flex';
    });
});

// Close popup
popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close if click outside content
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
