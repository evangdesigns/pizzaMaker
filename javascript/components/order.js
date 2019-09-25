import cheese from './cheese.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domStringI = '';
    for( let i = 0; i < items.length; i++){
        domStringI += `<h2>${items[i].name}</h2>`
    }
    utilities.printToDom('finalOrder', domStringI);
};

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    createFinalOrder(selectedCheeses)
}

const printOrderButton = () => {
    const domString = '<button id="orderButton" class="btn btn-outline-secondary">Order</button>'
    utilities.printToDom('finalOrder', domString);
    document.getElementById('orderButton').addEventListener('click', createOrderEvent)
};

export default { printOrderButton }