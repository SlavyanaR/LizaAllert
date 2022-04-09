const indexListItemNodes = document.querySelectorAll('.index-list__item');

indexListItemNodes.forEach((indexListItemNode) => {
  const buttonNode = indexListItemNode.querySelector('.index-list__button');

  buttonNode.addEventListener('click', () => {
    indexListItemNode.classList.toggle('index-list__item_visible');
  });
});
