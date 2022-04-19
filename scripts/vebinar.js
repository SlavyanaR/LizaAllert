
const indexListItemNodes = document.querySelectorAll('.index-list__item');

indexListItemNodes.forEach((indexListItemNode) => {
  const contentNode = indexListItemNode.querySelector('.index-list__content');

  contentNode.addEventListener('click', (evt) => evt.stopPropagation());

  indexListItemNode.addEventListener('click', () => {
    indexListItemNode.classList.toggle('index-list__item_visible');
  });
});

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

