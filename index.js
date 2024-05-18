const emailInput = document.querySelector('input');
const subscribeButton = document.getElementById('subscribe');
const errorMessage = document.querySelector('.errorMessage');
const emailValidation = () => {
    const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(emailInput.value);
}



subscribeButton.addEventListener('click', () => {
    const articleCard = document.querySelector('article');
    const successMessage = document.querySelector('.success');
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
        emailInput.placeholder = '';
        errorMessage.classList.add('hidden');

    }
})