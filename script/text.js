const goToCourseButton = document.querySelector('#goToCourse');
const goToVebinarButton = document.querySelector('#goToVebinar');

function goToCourseButtonHandler() {
    document.location.href = './course.html';
  }
  
goToCourseButton.addEventListener('click', goToCourseButtonHandler);

function goToVebinarButtonHandler() {
    document.location.href = './vebinar.html';
  }
  
goToVebinarButton.addEventListener('click', goToVebinarButtonHandler);