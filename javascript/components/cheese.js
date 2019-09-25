import utilities from '../helpers/utilities.js';

const printCheeseOpt = () => {
    const domString = 'cheese';
    utilities.printToDom('cheeseCounter', domString);
};

export default { printCheeseOpt };