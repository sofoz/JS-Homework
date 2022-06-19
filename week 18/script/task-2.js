const password = document.querySelector('.password');
const passwordRep = document.querySelector('.password-rep');
const red = `border-color: rgba(219, 25, 25, 0.508);`
const green = `border-color: rgb(64, 255, 0);`
const inputs = document.querySelectorAll('input');

const btn = document.querySelector('.btn')
btn.addEventListener('click', inputCheck);

const form = document.querySelector('form');
form.addEventListener('input', inputCheck);

function inputCheck({ target }) {
    if (target.validity.valueMissing || target.value.length < 2) {
        target.style = red;
    } else {
        target.style = green
    }
    if (target.validity.patternMismatch) {
        target.style = red
    }
    if (target.classList.contains('login') && target.validity.tooShort) {
        target.style = red
    }
    if (target.classList.contains('password-rep')) {
        checkPassword();
    }
}

function checkPassword() {
    if (passwordRep.value !== password.value) {
        passwordRep.style = red;
    }
}

// макска для телефона
// проверка: если все поля валидны - кнопка активна, нет - не активна
// использовать checkValidity()
//use strict