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