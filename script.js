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

let firstNumber ;
let secondNumber;
let answer;
let operator;
let memoryValue;
let memoryValue2;


numberids.forEach(id => {
    nbuttons[id] = document.getElementById(id);
    nbuttons[id].onclick = () => {
        const value = nbuttons[id].innerText || nbuttons[id].value;
        if (firstNumber === undefined) {
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
            firstNumber = undefined;
            secondNumber = undefined;
            operator = undefined;
            return "0";
        case "equals":
            result = num2;
            break;
        default:
            result = num1;
    }
    return formatResult(result);
}
functionids.forEach(id => {
    fbuttons[id] = document.getElementById(id);
    fbuttons[id].onclick = () => {
        
        let flag
        if(id === "clear") {
            firstNumber = undefined;
            answer = 0;
            secondNumber = undefined;
            operator = undefined;        
        } else if (secondNumber === undefined) {
            secondNumber = parseFloat(firstNumber);
            answer = secondNumber.toString();
            firstNumber = undefined;
            operator = id;
        }else if (secondNumber!== undefined  && firstNumber=== undefined){
            operator = id;            
        }
         else if (secondNumber!== undefined  && firstNumber !== undefined){
            const num1 = parseFloat(secondNumber);
            const num2 = parseFloat(firstNumber);
            const result = performOperation(num1, num2, operator);
            answer = result.toString();
            firstNumber = undefined;
            secondNumber = answer;
            operator = id;
            flag = "y"
        }
        if(answer.length > 11) {
            alert('Your answer exceeds the limit we can display');
            firstNumber = undefined;
            secondNumber = undefined;
            operator = undefined;
            answer = "0";
        }
        if(answer === "Infinity") {
            alert('You cannot divide by zero');
            firstNumber = undefined;
            secondNumber = undefined;
            operator = undefined;
            answer = "U_R_Wrong";
        }
        display.innerText = answer; 
        value = undefined;
    };
});

const solarBoxes = document.querySelectorAll(".solar .solar-box");

solarBoxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
        decreaseOpacity();
        checkSolarPower();
    });
});

function decreaseOpacity() {
    const currentOpacity = parseFloat(display.style.opacity) || 1;
    display.style.opacity = (currentOpacity - 0.25).toString();
}

function checkSolarPower() {
    const allBlack = Array.from(solarBoxes).every(box => box.style.backgroundColor === "black");
    if (allBlack) {
        alert("Calculator has run out of solar power. Wait a second for light to hight the solar panels");
        setTimeout(resetCalculator, 1000); 
    }
}

function resetCalculator() {
    solarBoxes.forEach(box => {
        box.style.backgroundColor = "";
    });
    display.style.opacity = "1";
}