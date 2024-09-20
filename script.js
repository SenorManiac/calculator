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
let memoryValue2;


numberids.forEach(id => {
    nbuttons[id] = document.getElementById(id);
    nbuttons[id].onclick = () => {
        const value = nbuttons[id].innerText || nbuttons[id].value;
        if (firstNumber === "0") {
            firstNumber = value; // Assign the button's value to firstNumber
        } else if (firstNumber === answer) {
            firstNumber = value; // Assign the button's value to firstNumber
        }else if (firstNumber.length == "10" ) {
            alert('You have reached the max number limit'); // Assign the button's value to firstNumber
        } else {
            firstNumber += value; 
        }
        display.innerText = firstNumber; 
    };
});

function formatResult(result) {
    let resultStr = result.toString();
    if (resultStr.length > 9) {
        resultStr = parseFloat(result).toFixed(9);
        resultStr = resultStr.replace(/\.?0+$/, '');
    }
    return resultStr;
}

function performOperation(num1, num2, operator) {
    let result;
    switch (operator) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        case "square-root":
            result = Math.sqrt(num1);
            break;
        case "percentage":
            result = num1 / 100;
            break;
        case "plus-minus":
            result = -num1;
            break;
        case "clear":
            firstNumber = "0";
            secondNumber = undefined;
            operator = undefined;
            return "0";
        case "equals":
            result = num1;
            break;
        default:
            result = num1;
    }
    return formatResult(result);
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
            firstNumber = '0';
            secondNumber = answer;
            operator = id;
        }
        if(answer.length > 11) {
            alert('Your answer exceeds the limit we can display');
            firstNumber = "0";
            secondNumber = undefined;
            operator = undefined;
            answer = "0";
        }
        if(answer === "Infinity") {
            alert('You cannot divide by zero');
            firstNumber = "0";
            secondNumber = undefined;
            operator = undefined;
            answer = "U_R_Wrong";
        }
        display.innerText = answer; 
    };
});