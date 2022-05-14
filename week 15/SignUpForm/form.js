let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordRep = document.querySelector('#passwordRep');

let sign = document.querySelector('#btn-sign');

let r = `solid rgba(166, 10, 10, 0.681)`;
let b = `1px solid #ddd`;

let popup = document.querySelector('.popup');
let close = document.querySelector('#btn-close');

let clear = () => {
    document.querySelector('#firstNameError').innerHTML = '';
    document.querySelector('#lastNameError').innerHTML = '';
    document.querySelector('#emailError').innerHTML = '';
    document.querySelector('#passwordError').innerHTML = '';
    document.querySelector('#passwordRepError').innerHTML = '';
};

let reset = () => {
    firstName.style.border = b
    lastName.style.border = b
    email.style.border = b
    password.style.border = b
    passwordRep.style.border = b
};

let check = () => {
    clear()

    if (firstName.value == '') {
        document.querySelector('#firstNameError').innerHTML += "First name is required <br>"
        firstName.style.border = r
    }
    if (lastName.value == '') {
        document.querySelector('#lastNameError').innerHTML += "Last name is required <br>"
        lastName.style.border = r
    }
    if (email.value == '') {
        document.querySelector('#emailError').innerHTML += "Email is required <br>"
        email.style.border = r
    }
    if (password.value == '') {
        document.querySelector('#passwordError').innerHTML += "Password is required <br>"
        password.style.border = r
    } else if (password.value.length < 4) {
        document.querySelector('#passwordError').innerHTML += "Password is shorter then 4 symbols <br>"
        password.style.border = r
    }
    if (passwordRep.value == '') {
        document.querySelector('#passwordRepError').innerHTML += "this field is required <br>"
        passwordRep.style.border = r
    } else if (passwordRep.value != password.value) {
        document.querySelector('#passwordRepError').innerHTML += "passwords don't match <br>"
        passwordRep.style.border = r
    }
    else {
        reset()
        sign.addEventListener('mouseup', openPopup);
    }
}
sign.addEventListener('mousedown', check);

firstName.addEventListener('click', () => {
    clear();
    reset()
})
lastName.addEventListener('click', () => {
    clear();
    reset()
})
email.addEventListener('click', () => {
    clear();
    reset()
})
password.addEventListener('click', () => {
    clear();
    reset()
})
passwordRep.addEventListener('click', () => {
    clear();
    reset()
})


let openPopup = () => {
    popup.classList.remove('hidden');
    let userName = firstName.value;
    document.querySelector('.popup-text').innerHTML = `Thank you for registering, ${userName}! <br> An email has just
    been
    sent to you.`;
}
let closePopup = () => {
    popup.classList.add('hidden');
}
close.addEventListener('click', closePopup);



/*function signButton() {
    if (firstName.value != '' && lastName.value != '' && email.value != '' && password.value != '' && password.value.length >= 4 && passwordRep.value != '' && passwordRep.value == password.value) {
        reset()
        sign.addEventListener('click', openPopup);
    } else {
        check()
    }
};*/
