import utilities from '../helpers/utilities.js';

const cheeses =[
    {id:"cheese1",name:"swiss", price: 50},
    {id:"cheese2",name:"yellow", price: 90},
    {id:"cheese3",name:"white", price: 500},
    {id:"cheese4",name:"green", price: 0},
];

const getSelectedCheeses = () => {
    //get all cheese checkboxes
    const selectedCheeses = []
    //keep the checked cheeses
    const cheeseCheckbox = document.getElementsByClassName('cheese');
    for(let j = 0; j < cheeseCheckbox.length; j++){
        for(let k = 0; k < cheeses.length; k++){
            if(cheeseCheckbox[j].checked && cheeseCheckbox[j].id === cheeses[k].id){
                selectedCheeses.push(cheeses[k]);
            }
        }
    }

    return selectedCheeses;
};

const printCheeseOpt = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++){
    domString +=`
    <div class="form-group form-check">
        <input type="checkbox" class="cheese form-check-input" id="${cheeses[i].id}">
        <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
    </div>
  `;
    }
    utilities.printToDom('cheeseCounter', domString);
};

export default { printCheeseOpt, getSelectedCheeses };