function addition(a, b) {
    return (a + b)
}

function subtraction(a, b) {
    return (a - b)
}

function multiplication(a, b) {
    return (a * b)
}

function division(a, b) {
    return (a / b)
}

alert('This is mini Calculator, prepare your task!')
let arq1 = prompt('Type your first number')
let arq2 = prompt('Type your second number')
let operation = prompt('Type your math action with these numbers')

function calculation(arq1, arq2, operation) {
    switch (operation) {
        case "+":
            return addition(arq1, arq2);
        case "-":
            return subtraction(arq1, arq2);
        case "*":
            return multiplication(arq1, arq2);
        case "/":
            return division(arq1, arq2);
            default:
                alert('INCORECT ACTION')
    }
}