const emailInput = document.querySelector('input');
const subscribeButton = document.getElementById('subscribe');

const emailValidation = () => {

    if (emailInput.value.length > 0) {
         return true;
    }
    else {
        return false;
    };
}
subscribeButton.addEventListener('click', () => {
    const articleCard = document.querySelector('article');
    const successMessage = document.querySelector('.success');
    if (emailValidation) {
        articleCard.classList.add('hidden');
        successMessage.classList.remove('hidden');
    } else return;

})
