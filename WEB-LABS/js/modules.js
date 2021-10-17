import { cardDeck } from "./main.js";

const EDIT_BUTTON_PREFIX = "edit-";
const DELETE_BUTTON_PREFIX = "delete-";

const nameInput = document.getElementById("name_input");
const numOfPassangersInput = document.getElementById("num_of_passangers_input");
const maxSpeedInput = document.getElementById("max_speed_input");

const cardTemplate = ({ id, helicopterName, numOfPassangers, maxSpeed }) => `
<div id="${id}" class="card bg-dark text-light">
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
<i id="${EDIT_BUTTON_PREFIX}${id}" class="fas fa-edit fa-lg btnedit"></i>
<i id="${DELETE_BUTTON_PREFIX}${id}" class="fas fa-trash-alt fa-lg btndelete"></i>
</small>
</div>
</div>
`;

const addItemToPage = ({ id, name, num_of_passangers, max_speed },
    onEdit,
    onDelete,
) => {
    cardDeck.insertAdjacentHTML(
        "afterbegin",
        cardTemplate({
            id,
            helicopterName: name,
            numOfPassangers: num_of_passangers,
            maxSpeed: max_speed,
        })
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click", onEdit);

    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);
    deleteButton.addEventListener("click", onDelete);
};

const renderItemsDOM = (dataArray, onEdit, onDelete) => {
    cardDeck.innerHTML = "";
    for (const item of dataArray) {
        addItemToPage(item, onEdit, onDelete);
    }
};

const calculateTotal = (dataArray, key) => {
    const total = dataArray.reduce((acc, item) => acc + key(item), 0);
    return total;
};

const clearInputs = () => {
    nameInput.value = "";
    numOfPassangersInput.value = "";
    maxSpeedInput.value = "";
};

const fillUpdateValues = ({ name, numOfPassangers, maxSpeed }) => {
    nameInput.value = name;
    numOfPassangersInput.value = numOfPassangers;
    maxSpeedInput.value = maxSpeed;
};

const getInputValues = () => {
    return {
        name: nameInput.value,
        num_of_passangers: numOfPassangersInput.value,
        max_speed: maxSpeedInput.value,
    };
};

export {
    addItemToPage,
    renderItemsDOM,
    calculateTotal,
    clearInputs,
    getInputValues,
    EDIT_BUTTON_PREFIX,
    DELETE_BUTTON_PREFIX,
    fillUpdateValues,
};