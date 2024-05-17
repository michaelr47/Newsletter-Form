const emailInput = document.querySelector('input');
const subscribeButton = document.getElementById('subscribe');

const emailValidation = () => {
    const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(emailInput.value);
}



subscribeButton.addEventListener('click', () => {
    const articleCard = document.querySelector('article');
    const successMessage = document.querySelector('.success');
    const errorMessage = document.querySelector('.errorMessage');
    if (emailValidation()) {
        articleCard.classList.add('hidden');
        successMessage.classList.remove('hidden');
    } else {
        emailInput.placeholder = 'ash#loremcompany.com';
        emailInput.classList.add('errorPlaceholder');
        errorMessage.classList.remove('hidden');
    };

})
