function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}


function operate(operator, x, y) {
    let value;
    switch (operator) {
        case "/": 
            value = divide(x, y);
            break;
        case "*":
            value = multiply(x, y);
            break;
        case "+":
            value = add(x, y);
            break;
        case "-":
            value = subtract(x, y);
            break;
        default:
            console.log("ERROR IN FUNCTION OPERATE");    
    }
    return value;
}


const numbers = document.querySelectorAll(".num"); // number buttons
numbers.forEach(button => {
    button.addEventListener('click', () => {
        populateDisplay(button.innerText);
    });
});

const operators = document.querySelectorAll(".op"); //operator buttons
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        populateDisplay(operator.innerText);
    });
});

const clear = document.querySelector(".clear"); //clear button
clear.addEventListener('click', () => {
    display.innerText = '';
    solutionDisplay.innerText = '';
});

const equals = document.querySelector(".equals"); // equals button
equals.addEventListener('click', () => { 
    if (checkWhich(currentValue)) {
        console.log(operations); // test
    }
})

function checkWhich(value) {
    return value != "/" && value != "*" && value != "-" && value != "+" && value != "%";
}

let operations = [];
const display = document.getElementById("value");
const solutionDisplay = document.getElementById("solution"); 

let check = false;
let currentValue = ''; 
function populateDisplay(value) {
    if (display.innerText.length != 20) {
        if (checkWhich(value)) { 
            display.innerText += value;
            console.log("i work more than once"); // test
            check = true;
            currentValue = value; 
        }else if (check) {
            display.innerText += value;
            check = false;
            currentValue = value; 
            console.log("i work after number"); // test
        }
    }
}