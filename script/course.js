const accordions = document.querySelectorAll(".card__button_type_course");

//Открытие аккордеона
for (item of accordions) {
  item.addEventListener("click", function () {
    const content = this.parentElement; //Ищу родителя кнопки
    const card = content.parentElement; //Общий файл карточки
    const contentNeighbor = content.nextElementSibling; //Выхожу на соседний спрятанный элемент, для добавления ему стилей
    if (!contentNeighbor.classList.contains("card__wrapper_type_active")) {
      this.textContent = "Свернуть";
      contentNeighbor.style.maxHeight = contentNeighbor.scrollHeight + "px";
      card.style.display = "flex";
    } else {
      this.textContent = "Развернуть";
      contentNeighbor.style.maxHeight = 0;
      card.style.display = "block";
    }
    contentNeighbor.classList.toggle("card__wrapper_type_active");
  });
}



//Работаю над FAQ аккордеоном
const faqAqqordions = document.querySelectorAll(".card__button_type_faq");
for (item of faqAqqordions) {
  item.addEventListener("click", function (){
    const questionHeader = this.parentElement;
    const cardFaq= questionHeader.parentElement.parentElement;
    const  questionContent= questionHeader.nextElementSibling;
    console.log(questionHeader)
    if (!questionContent.classList.contains("card__wrapper_type_active")) {
      this.style.transform = "rotate(-180deg)";
      this.style.transition = '.1s linear'
      questionContent.style.maxHeight = questionContent.scrollHeight + "px"; 
      cardFaq.style.maxHeight = cardFaq.scrollHeight + questionContent.scrollHeight + "px";
      questionContent.style.display = 'block';
    } else {
      this.style.transform = "rotate(0deg)";
      questionContent.style.maxHeight = 0;
    }
    questionContent.classList.toggle("card__wrapper_type_active");
  });
}
