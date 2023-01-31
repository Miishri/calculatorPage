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


function populateDisplay(value) {
    if (display.textContent.length != 20) {
        current = value;   
        display.innerText += value;
        console.log(current);
    }
}