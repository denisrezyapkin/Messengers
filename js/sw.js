let socialBlock = document.querySelector('.sbw');

socialButton.onclick = () => {
   socialBlock.classList.remove('hide');
   socialBlock.classList.add('show');
   socialButton.classList.remove('open');
   socialButton.classList.add('close');
}

closeButton.onclick = () => {
   socialBlock.classList.remove('show');
   socialBlock.classList.add('hide');
   socialButton.classList.remove('close');
   socialButton.classList.add('open');
}
