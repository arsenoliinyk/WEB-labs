import {
    getAllHelicopters,
    searchHelicopters,
    postHelicopter,
    editHelicopter,
    getHelicopterById,
    deleteHelicopter,
} from "./api.js";
import {
    renderItemsDOM,
    calculateTotal,
    clearInputs,
    getInputValues,
    EDIT_BUTTON_PREFIX,
    fillUpdateValues,
    DELETE_BUTTON_PREFIX,
} from "./modules.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");
const createSubmit = document.getElementById("submit_button");
const updateSubmit = document.getElementById("submit_update");
const formFields = document.getElementsByClassName("create-input");

let helicopters = [];

const onEdit = async(element) => {
    const id = element.target.id.replace(EDIT_BUTTON_PREFIX, "");
    let { name, num_of_passangers, max_speed } = await getHelicopterById(id);
    fillUpdateValues({
        name,
        numOfPassangers: num_of_passangers,
        maxSpeed: max_speed,
    });

    updateSubmit.addEventListener("click", (event) => {
        if (includesEmptyFields()) {
            return;
        }
        event.preventDefault();
        const newHelicopter = getInputValues();
        clearInputs();
        editHelicopter(id, newHelicopter).then(refetchAllHelicopters);
    })
};

const onDelete = (element) => {
    const id = element.target.id.replace(DELETE_BUTTON_PREFIX, "");
    deleteHelicopter(id).then(refetchAllHelicopters);
}

const refetchAllHelicopters = async() => {
    const allHelicopters = await getAllHelicopters();
    helicopters = allHelicopters;
    renderItemsDOM(helicopters, onEdit, onDelete);
};

const includesEmptyFields = () => {
    let countOfEmptyFields = Array.from(formFields).filter(
        (x) => x.value == ""
    ).length;
    return countOfEmptyFields != 0;
};

createSubmit.addEventListener("click", (event) => {
    if (includesEmptyFields()) {
        return;
    }
    event.preventDefault();
    const newHelicopter = getInputValues();
    clearInputs();
    postHelicopter(newHelicopter).then(refetchAllHelicopters);
});

searchButton.addEventListener("click", async(event) => {
    event.preventDefault();
    const foundHelicopters = await searchHelicopters(searchInput.value);
    renderItemsDOM(foundHelicopters, onEdit, onDelete);
});

sortCheckbox.addEventListener("change", () => {
    let sortedHelicopters = Array.from(helicopters);
    if (sortCheckbox.checked) {
        sortedHelicopters.sort(
            (first, second) => first.max_speed - second.max_speed
        );
    }
    renderItemsDOM(sortedHelicopters, onEdit, onDelete);
});

countBtn.addEventListener("click", () => {
    countResults.classList.remove("hidden");
    const totalPrice = calculateTotal(helicopters, (helicopter) => helicopter.num_of_passangers);
    countTotal.innerHTML = totalPrice;
});

refetchAllHelicopters();

export default helicopters;
export { cardDeck };