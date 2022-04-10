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
    const content = this.parentElement;
    const section = content.parentElement.parentElement.parentElement;
    const cardFaq = content.nextElementSibling;

    if (!cardFaq.classList.contains("card__wrapper_type_active")) {
      this.style.transform = "rotate(-180deg)";
      this.style.transition = '.1s linear'
      cardFaq.style.maxHeight = cardFaq.scrollHeight + "px";
      // section.style.maxHeight = section.scrollHeight + cardFaq.scrollHeight + "px";   
    } else {
      this.style.transform = "rotate(0deg)";
      cardFaq.style.maxHeight = 0;
      // section.style.maxHeight = section.scrollHeight + cardFaq.scrollHeight + "px";
    }
    console.log(section);
    cardFaq.classList.toggle("card__wrapper_type_active");
  });
}
