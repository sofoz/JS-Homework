let num1, num2, result;

function getNumbers() {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    result = document.getElementById('result');
    return
}

let sum = () => {
    getNumbers()
    result.innerHTML = +num1 + +num2;
}

let min = () => {
    getNumbers()
    result.innerHTML = +num1 - +num2;
}


let mult = () => {
    getNumbers()
    result.innerHTML = +num1 * +num2;
}


let div = () => {
    getNumbers()
    result.innerHTML = +num1 / +num2;
}

let clearAll = () => {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    result.innerHTML = '';
}


/*function sum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = +num1 + +num2;
    document.getElementById('result').innerHTML = result;
}

function min() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = +num1 - +num2;
    document.getElementById('result').innerHTML = result;
}


function mult() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = +num1 * +num2;
    document.getElementById('result').innerHTML = result;
}


function div() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = +num1 / +num2;
    document.getElementById('result').innerHTML = result;
}

function clearAll() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = '';
}*/

function changeBgLight() {
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/2b/30/20/2b3020fcbc29ea77452b32553524d08f.jpg')";
}

function changeBgDark() {
    document.body.style.backgroundImage = "url('https://img5.goodfon.ru/wallpaper/nbig/a/2e/korabl-gory-nebo.jpg')";
}

function changeBgSimple() {
    document.body.style.background = "rgba(93, 52, 197, 0.284)";
}


