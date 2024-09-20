const numberids = [ "seven", "eight",
    "nine", "four", "five", "six", "one", "two", "three", "zero", "decimal"
];

const nbuttons = {};

numberids.forEach(id => {
    nbuttons[id] = document.getElementById(id);
    
});

const functionids = ["add", "subtract", "multiply", "divide", "equals", "clear", "plus-minus",
    "square-root", "percentage", "mrc", "m-minus", "m-plus"];

const fbuttons = {};

functionids.forEach(id => {
    fbuttons[id] = document.getElementById(id);
    
});



let firstNumber = 0;
let secondNumber;
let memoryValue;


fbuttons["add"].onclick = () => alert('Add')