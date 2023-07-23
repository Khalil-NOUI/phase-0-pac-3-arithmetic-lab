function add(a, b) {
    return  a + b;
}

function subtract(a, b) {
    return  a - b;
}

function multiply(a, b) {
    return  a * b;
}

function divide(a, b) {
    return  a / b;
}


function increment(n) {
    n += 1;
    return n;
}

function decrement(n) {
    n -= 1;
    return n;
}

function makeInt(n) {
    let integer = parseInt(n, 10);
    return integer;
}

function preserveDecimal(n) {
    let decimal = parseFloat(n, 10);
    return decimal;
}