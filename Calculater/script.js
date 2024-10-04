let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
    currentNumber += number;
    document.getElementById("result").value = currentNumber;
}

function clearScreen() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    document.getElementById("result").value = "";
}

function calculate(op) {
    if (currentNumber === "") return;
    if (previousNumber !== "") computeResult();
    operator = op;
    previousNumber = currentNumber;
    currentNumber = "";

    // Update the input display to show the operator
    let displayOperator = op;
    switch (op) {
        case "*":
            displayOperator = "×";
            break;
        case "/":
            displayOperator = "÷";
            break;
        case "-":
            displayOperator = "−";
            break;
    }
    document.getElementById("result").value = displayOperator;
}

function computeResult() {
    let computation;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case "+":
            computation = prev + curr;
            break;
        case "-":
            computation = prev - curr;
            break;
        case "*":
            computation = prev * curr;
            break;
        case "/":
            computation = prev / curr;
            break;
        case "%":
            computation = prev % curr;
            break;
        default:
            return;
    }
    currentNumber = computation.toString();
    operator = "";
    previousNumber = "";
    document.getElementById("result").value = currentNumber;
}

function changeSign() {
    if (currentNumber !== "") {
        currentNumber = (-parseFloat(currentNumber)).toString();
        document.getElementById("result").value = currentNumber;
    }
}
