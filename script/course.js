const accordions = document.querySelectorAll(".card__button");

//Открытие аккордеона 
for (item of accordions) {
  item.addEventListener("click", function () {
    const content = this.parentElement; //Ищу родителя кнопки
    const contentNeighbor = content.nextElementSibling; //Выхожу на соседний спрятанный элемент, для добавления ему стилей
    if (!contentNeighbor.classList.contains("card__wrapper_type_active")) {
      this.textContent = "Свернуть";
      contentNeighbor.style.maxHeight = contentNeighbor.scrollHeight + 'px';
    } else {
      this.textContent = "Развернуть";
      contentNeighbor.style.maxHeight = 0;
    }
    contentNeighbor.classList.toggle("card__wrapper_type_active");
  });
}


