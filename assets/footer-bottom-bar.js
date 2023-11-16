const selector = document.querySelector(".main-footer__bottom-language")

  function addClassOnClick() {
    selector?.classList.toggle('active');
  }

selector?.addEventListener('click', addClassOnClick);