let card = document.querySelector('.card'),
    flipButton = document.querySelectorAll('.buttonSection');
    debugger;

function flipCard() {

    card.classList.toggle('flipped');
}

flipButton.forEach(butt => butt.addEventListener('click', flipCard));