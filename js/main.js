import {fetchData} from "./modules/DataMiner.js";
// import "./modules/cardFlip.js";

(() => {

    function retrieveProjectInfo(event) {
        if (!event.target.id) { return }
        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function getCardData(info) {
        // cards
        let thingSection = document.querySelector('.favoriteSection'),
            thingTemplate = document.querySelector('#favesTemplate').content,
            currentThing = thingTemplate.cloneNode(true),
            currentThingText = currentThing.querySelector('.card__face').children,
        // buttons
            buttonsSection = document.querySelector('.buttonsSection'),
            buttonTemplate = document.querySelector('#buttonTemplate').content;

        for (let thing of info) {
            let currentButton = buttonTemplate.cloneNode(true),
                currentButtonText = currentButton.querySelector('.buttons').children;
            //cards
            currentThingText[0].id = thing.ID;
            currentThingText[0].src = `images/${thing.picture}`;
            currentThingText[1].innerHTML = thing.thing;
            currentThingText[2].innerHTML = thing.description;
            //buttons
            currentButtonText[0].id = thing.ID;
            currentButtonText[0].innerHTML = thing.thing;

            thingSection.appendChild(currentThing);
            buttonsSection.appendChild(currentButton);
            }

            buttonsSection.addEventListener("click", retrieveProjectInfo);
            let card = document.querySelector('.card'),
                flipButton = document.querySelectorAll('.buttonSection');
                debugger;

            function flipCard() {

            card.classList.toggle('flipped');
            }

flipButton.forEach(butt => butt.addEventListener('click', flipCard));
        }

    fetchData('./includes/index.php').then(data => getCardData(data)).catch(err => console.log(err));

})();

