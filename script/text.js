const goToCourseButton = document.querySelector('#goToCourse');
const goToVebinarButton = document.querySelector('#goToVebinar');
const contentAqqordions = document.querySelectorAll(".index-list__button_type_content");

function goToCourseButtonHandler() {
    document.location.href = './course.html';
  }

goToCourseButton.addEventListener('click', goToCourseButtonHandler);

function goToVebinarButtonHandler() {
    document.location.href = './vebinar.html';
  }

goToVebinarButton.addEventListener('click', goToVebinarButtonHandler);


for (const item of contentAqqordions){
  item.addEventListener("click", function (){
  const contentList = this.parentElement;
  const  contentInner= contentList.nextElementSibling;
  if (!contentInner.classList.contains("index-list__conten_type_active")) {
        this.style.transform = "rotate(-180deg)";
        this.style.transition = '.1s linear';
        contentInner.style.maxHeight = contentInner.scrollHeight + "px";
      } else {
        this.style.transform = "rotate(0deg)";
        contentInner.style.maxHeight = 0;
      }
      contentInner.classList.toggle("index-list__conten_type_active");
  });
} 
