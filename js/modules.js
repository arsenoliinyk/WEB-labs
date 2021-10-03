import { cardDeck } from "./main.js";

const cardTemplate = ({ id, helicopterName, numOfPassangers, maxSpeed }) => `
<div id="item-${id}" class="card bg-dark text-light">
<img class="card-img-top" src="../img/helicopter.jpg" alt="Card image cap" />
<div class="card-body">
<h5 class="card-title">Helicopter "${helicopterName}"</h5>
<p class="card-text">
Passangers: ${numOfPassangers}<br>
Max Speed: ${maxSpeed}
</p>
</div>
<div class="card-footer">
<small class="text-muted">
<i class="fas fa-edit fa-lg btnedit"></i>
<i class="fas fa-trash-alt fa-lg btndelete"></i>
</small>
</div>
</div>
`;

const addItemToPage = ({ id, helicopterName, numOfPassangers, maxSpeed }) => {
    cardDeck.insertAdjacentHTML(
        "afterbegin",
        cardTemplate({ id, helicopterName, numOfPassangers, maxSpeed })
    );
};

const renderItemsDOM = (dataArray) => {
    cardDeck.innerHTML = "";
    for (const item of dataArray) {
        addItemToPage(item);
    }
};

const calculateTotal = (dataArray, key) => {
    const total = dataArray.reduce((acc, item) => acc + key(item), 0);
    return total;
}

export { addItemToPage, renderItemsDOM, calculateTotal };