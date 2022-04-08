const faqButton = document.querySelector("#faqButton");

let closeOpenCard = (cardId) => cardId.classList.toggle('card__close');

const cardFaq = document.querySelector('#cardFaq');

faqButton.addEventListener('click', () => closeOpenCard(cardFaq));