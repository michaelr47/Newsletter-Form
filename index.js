const emailInput = document.querySelector('input');
const subscribeButton = document.getElementById('subscribe');
const errorMessage = document.querySelector('.errorMessage')
const dismissMessage = document.getElementById('dismiss');
const articleCard = document.querySelector('article');
const successMessage = document.querySelector('.success');

const emailValidation = () => {
    const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(emailInput.value);
}

subscribeButton.addEventListener('click', () => {

    if (emailValidation()) {
        articleCard.classList.add('hidden');
        successMessage.classList.remove('hidden');
    } else {
        emailInput.placeholder = 'ash#loremcompany.com';
        emailInput.classList.add('errorPlaceholder');
        emailInput.classList.add('backgroundError');
        errorMessage.classList.remove('hidden');
    };

})

emailInput.addEventListener('keydown', () => {
    if (emailInput.classList.contains('errorPlaceholder')) {
        emailInput.classList.remove('errorPlaceholder');
        emailInput.classList.remove('backgroundError');
        errorMessage.classList.add('hidden');

    }
})

dismissMessage.addEventListener('click', () => {
    articleCard.classList.remove('hidden');
    successMessage.classList.add('hidden');
    clearInputField();
})

function clearInputField() {
    emailInput.value = '';
}