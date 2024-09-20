const numberids = [ "seven", "eight",
    "nine", "four", "five", "six", "one", "two", "three", "zero", "decimal"
];

const nbuttons = {};

numberids.forEach(id => {
    nbuttons[id] = document.getElementById(id);
    
});

const functionids = ["add", "subtract", "multiply", "divide", "equals", "clear", "plus-minus",
    "square-root", "percentage", "mrc", "m-minus", "m-plus"];

const display = document.getElementById("display");

const fbuttons = {};

functionids.forEach(id => {
    fbuttons[id] = document.getElementById(id);
});

let firstNumber = "0";
let secondNumber;
let answer;
let operator;
let memoryValue;

fbuttons["add"].onclick = () => {
    // Add functionality here
};

numberids.forEach(id => {
    nbuttons[id] = document.getElementById(id);
    nbuttons[id].onclick = () => {
        const value = nbuttons[id].innerText || nbuttons[id].value;
        if (firstNumber === "0") {
            firstNumber = value; // Assign the button's value to firstNumber
        } else if (firstNumber === answer) {
            firstNumber = value; // Assign the button's value to firstNumber
        } else {
            firstNumber += value; // Concatenate the new value to firstNumber
        }
        display.innerText = firstNumber; // Update the display
    };
});

function performOperation(num1, num2, operator) {
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        case "square-root":
            return Math.sqrt(num1);
        case "percentage":
            return num1 / 100;
        case "plus-minus":
            return -num1;
        case "clear":{
            firstNumber = "0";
            secondNumber = undefined;
            operator = undefined;
            return "0";
        }case "equals":
            return answer;
    }   
}

functionids.forEach(id => {
    fbuttons[id] = document.getElementById(id);
    fbuttons[id].onclick = () => {
        if(id === "clear") {
            firstNumber = "0";
            answer = firstNumber;
            secondNumber = undefined;
            operator = undefined;     
        } else if (secondNumber === undefined) {
            secondNumber = parseFloat(firstNumber);
            answer = secondNumber.toString();
            firstNumber = "0";
            operator = id;
        } else {
            const num1 = parseFloat(secondNumber);
            const num2 = parseFloat(firstNumber);
            const result = performOperation(num1, num2, operator);
            answer = result.toString();
            firstNumber = answer;
            secondNumber = undefined;
            operator = id === "equals" ? undefined : id;
        }
        display.innerText = answer; 
    };
});