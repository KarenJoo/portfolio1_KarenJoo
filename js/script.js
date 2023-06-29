document.addEventListener("DOMContentLoaded", function () {
  const sideMenu = document.querySelector(".side-menu");
  const wrapper = document.getElementById("wrapper");
  const header = document.getElementById("header");

  function adjustHeaderPosition() {
    if (window.scrollY >= wrapper.offsetHeight && window.innerWidth > 600) {
      header.style.top = "50px";
      sideMenu.style.display = "block";
    } else {
      header.style.top = "0";
      sideMenu.style.display = "none";
    }
  }

  window.addEventListener("scroll", adjustHeaderPosition);
  window.addEventListener("resize", adjustHeaderPosition);

  adjustHeaderPosition();

  // Event listener for scrolling, side-menu appears when scrolled under wrapper
  window.addEventListener("scroll", function () {
    const wrapperRect = wrapper.getBoundingClientRect();

    if (window.scrollY >= wrapperRect.bottom) {
      sideMenu.style.display = "block";
    } else {
      sideMenu.style.display = "none";
    }
  });
});
