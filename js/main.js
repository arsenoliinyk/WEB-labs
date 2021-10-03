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
        helicopterName: "Magic Zoo",
        numOfPassangers: parseInt("330"),
        maxSpeed: parseInt("800"),
    },
    {
        id: 2,
        helicopterName: "Amaizing Elephants",
        numOfPassangers: parseInt("210"),
        maxSpeed: parseInt("750"),
    },
    {
        id: 3,
        helicopterName: "Happy Animals",
        numOfPassangers: parseInt("150"),
        maxSpeed: parseInt("930"),
    },
    {
        id: 4,
        helicopterName: "Reptile World",
        numOfPassangers: parseInt("450"),
        maxSpeed: parseInt("1100"),
    },
    {
        id: 5,
        helicopterName: "Zoo of Extremes",
        numOfPassangers: parseInt("210"),
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