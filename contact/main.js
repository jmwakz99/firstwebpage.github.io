const inputName = document.getElementById('name');
const inputMail = document.getElementById('mail');
const inputMessage = document.getElementById('message');
const button = document.querySelector('.submit');
const regEx = /\S+@\S+\.\S+/;
const form = document.querySelector('.form');

function checkInput() {
    if(inputName.value.trim() !== '' && regEx.test(inputMail.value) && inputMessage.value.trim() !== '') {
        button.style.backgroundColor = '#fa923f';
        button.disabled = false;

    } else {
        button.style.backgroundColor = '#979695';
        button.disabled = true;
    }
}
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Submitted');

})