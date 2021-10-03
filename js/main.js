import { renderItemsDOM, calculateTotal } from "./modules.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");

let helicopters = [{
        id: 1,
        helicopterName: "Lockheed AH-56 Cheyenne",
        numOfPassangers: parseInt("33"),
        maxSpeed: parseInt("800"),
    },
    {
        id: 2,
        helicopterName: "Sikorsky UH-60 Black Hawk",
        numOfPassangers: parseInt("21"),
        maxSpeed: parseInt("750"),
    },
    {
        id: 3,
        helicopterName: "Sikorsky HH-60 Pave Hawk",
        numOfPassangers: parseInt("15"),
        maxSpeed: parseInt("930"),
    },
    {
        id: 4,
        helicopterName: "Eurocopter UH-72 Lakota",
        numOfPassangers: parseInt("10"),
        maxSpeed: parseInt("1100"),
    },
    {
        id: 5,
        helicopterName: "Cargo helicopter",
        numOfPassangers: parseInt("13"),
        maxSpeed: parseInt("900"),
    },
];
let sortedHelicopters = [];

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let foundHelicopters = helicopters.filter(
        (helicopter) => zoo.helicopterName.search(searchInput.value) !== -1
    );
    renderItemsDOM(foundHelicopters);
});

sortCheckbox.addEventListener("change", () => {
    let sortedHelicopters = Array.from(helicopters);
    if (sortCheckbox.checked) {
        sortedHelicopters.sort(
            (first, second) => first.maxSpeed - second.maxSpeed
        );
    }
    renderItemsDOM(sortedHelicopters);
});

countBtn.addEventListener("click", () => {
    countResults.classList.remove("hidden");
    const totalPrice = calculateTotal(helicopters, (helicopter) => helicopter.numOfPassangers);
    countTotal.innerHTML = totalPrice;
});

renderItemsDOM(helicopters);

export default helicopters;
export { cardDeck };