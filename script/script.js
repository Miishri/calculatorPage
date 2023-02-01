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
    
    if (operator == "/") {
        value = divide(x, y);
    }else if (operator == "*") {
        value = multiply(x, y);
    }else if (operator == "-") {
        value = subtract(x, y);
    }else if (operate == "+") {
        add(x, y);
    }
    return value;
}

const display = document.getElementById("value");
const solutionDisplay = document.getElementById("solution");
let operations = [];
let op = [];

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
    display.innerText = "";
    solutionDisplay.innerText = "";
});

const equals = document.querySelector(".equals"); // equals button
equals.addEventListener('click', () => {
    let numberOne = "";
    console.log("equals");
})

let once = false;
function populateDisplay(value) {
    if (display.textContent.length != 20) {
        current = value;   
        if (value != "/" && value != "*" && value != "-" && value != "+" && value != "%") {
            operations.push(value);
            display.innerText += value;
            once = true;
        }else if (once) {
            operations.push(value);
            op.push(value);
            display.innerText += value;
            once = false;
        }
        console.log(operations);
        console.log(op);
    }
}