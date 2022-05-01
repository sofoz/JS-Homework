function SayHello() {
    let name = prompt('What is yout name?',);
    let hello = (`Let's do the math, ${name}!`);
    alert(hello);
}

let op;

function result() {
    let result;
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    switch (op) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    document.getElementById("result").innerHTML = result;
}



