document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".group-item");

  openButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const parentItem = this.closest(".group-item-main");
      const moreContent = parentItem.querySelector(".group-item-more");
      const svgIcon = parentItem.querySelector(".changeIcon");

      moreContent.classList.toggle("closeMore");
      if (moreContent.classList.contains("closeMore")) {
        svgIcon.setAttribute("href", "./images/defs.svg#icon-Add");
      } else {
        svgIcon.setAttribute("href", "./images/defs.svg#icon-Minus");
      }
    });
  });
});
