const contentAqqordions = document.querySelectorAll(".index-list__button_type_content");
const goToVideoButton = document.querySelector('#goToVideo');
const goToTextButton = document.querySelector('#goToText');

function goToVideoButtonHandler() {
    document.location.href = './video.html';
  }
  
goToVideoButton.addEventListener('click', goToVideoButtonHandler);

function goToTextButtonHandler() {
    document.location.href = './text.html';
  }
  
goToTextButton.addEventListener('click', goToTextButtonHandler);


for (const item of contentAqqordions){
  item.addEventListener("click", function (){
  const contentList = this.parentElement;
  const  contentInner= contentList.nextElementSibling;
  if (!contentInner.classList.contains("index-list__conten_type_active")) {
        this.style.transform = "rotate(-180deg)";
        contentInner.style.maxHeight = contentInner.scrollHeight + "px";
      } else {
        this.style.transform = "rotate(0deg)";
        contentInner.style.maxHeight = 0;
      }
      contentInner.classList.toggle("index-list__conten_type_active");
  });
} 