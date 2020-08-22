const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const button = document.querySelector('#submit');

const nameBlur = () => name.style.border = 'none';
const emailBlur = () => email.style.border = 'none';
const messageBlur = () => message.style.border = 'none';

button.addEventListener('click', e => {
    e.preventDefault();
    if (!validateEmail() || !name.value || !message.value) {
        if (!validateEmail()) email.style.border = '2px solid var(--red-color)';
        if (!name.value) name.style.border = '2px solid var(--red-color)';
        if (!message.value) message.style.border = '2px solid var(--red-color)';
        setTimeout(returnToNormal, 2000);
    }
});

name.addEventListener('focus', () => name.style.border = '2px solid var(--purple-color)');
name.addEventListener('blur', nameBlur);
email.addEventListener('focus', () => email.style.border = '2px solid var(--purple-color)');
email.addEventListener('blur', emailBlur);
message.addEventListener('focus', () => message.style.border = '2px solid var(--purple-color)');
message.addEventListener('blur', messageBlur);

function returnToNormal() {
    nameBlur();
    emailBlur();
    messageBlur();
}

function validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.value);
}