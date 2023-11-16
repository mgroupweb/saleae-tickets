const burgerBtn = document.querySelector(".header-new-hamburger");
const navigationBlock = document.querySelector(".header-new-navigation-mobile");

let isOpen = false;

const open = () => {
  isOpen = true;
  burgerBtn?.classList.add("open");
  navigationBlock.style.transition = "height 0.3s";
  navigationBlock.style.display = "block";
  navigationBlock.style.height = `${navigationBlock.scrollHeight}px`;

  setTimeout(() => {
    navigationBlock.style.transition = "";
    navigationBlock.style.height = "auto";
  }, 500);
};

const close = () => {
  isOpen = false;
  burgerBtn?.classList.remove("open");
  navigationBlock.style.height = `${navigationBlock.scrollHeight}px`;
  navigationBlock.style.transition = "height 0.3s";

  setTimeout(() => {
    navigationBlock.style.height = "0px";
  }, 0);

  setTimeout(() => {
  navigationBlock.style.transition = "";
  navigationBlock.style.display = "none";
  }, 500);
};

const toggle = () => (isOpen ? close() : open());

burgerBtn.addEventListener("click", toggle);
