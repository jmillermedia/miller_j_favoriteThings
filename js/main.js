import {fetchData} from "./modules/DataMiner.js";

(() => {

    let thingSection = document.querySelector('.favoriteSection'),
            thingTemplate = document.querySelector('#favesTemplate').content,
            currentThing = thingTemplate.cloneNode(true),
            currentThingText = currentThing.querySelector('.card__face').children;

            thingSection.appendChild(currentThing);

    function handleDataSet(data) {
        for (let thing of data) {
            currentThingText[0].id = thing.ID;
            currentThingText[0].src = `images/${thing.picture}`;
            currentThingText[1].innerHTML = thing.thing;
            currentThingText[2].innerHTML = thing.description;
            }
        }

    function retrieveCardInfo(data) {
        if (!data.target.id) { return }
        fetchData(`./includes/index.php?id=${data.target.id}`).then(data => handleDataSet(data)).catch(err => console.log(err));
    }

    function getButtonData(info) {
        let buttonsSection = document.querySelector('.buttonsSection'),
            buttonTemplate = document.querySelector('#buttonTemplate').content;

        for (let piece of info) {
            let currentButton = buttonTemplate.cloneNode(true),
                currentButtonText = currentButton.querySelector('.buttons').children;

            currentButtonText[0].id = piece.ID;
            currentButtonText[0].innerHTML = piece.thing;
            buttonsSection.appendChild(currentButton);
            }

        buttonsSection.addEventListener("click", retrieveCardInfo);

        let flipButton = document.querySelectorAll('.buttonsSection'),
            flipBack = document.querySelector('.flipBack');

        flipButton.forEach(butt => butt.addEventListener('click', flipCard));
        flipBack.addEventListener('click', flipBackCard);
        }

    function flipCard() {
        let card = document.querySelector('.card');

        if (!card.classList.contains('flipped')) {
            return;
        }
        card.classList.toggle('flipped');
        }

    function flipBackCard() {
    let card = document.querySelector('.card');

        card.classList.toggle('flipped');
    }


    fetchData('./includes/index.php').then(data => getButtonData(data)).catch(err => console.log(err));

})();

