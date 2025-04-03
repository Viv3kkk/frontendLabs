const shareOption = document.querySelector('.share-option');
const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', function () {
  this.classList.toggle('active');
  shareOption.classList.toggle('active');
});