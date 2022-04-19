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

const indexListItemNodes = document.querySelectorAll('.index-list__item');

indexListItemNodes.forEach((indexListItemNode) => {
  const contentNode = indexListItemNode.querySelector('.index-list__content');

  contentNode.addEventListener('click', (evt) => evt.stopPropagation());

  indexListItemNode.addEventListener('click', () => {
    indexListItemNode.classList.toggle('index-list__item_visible');
  });
});
