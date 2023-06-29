document.addEventListener("DOMContentLoaded", function () {
  const sideMenu = document.querySelector(".side-menu");
  const wrapper = document.getElementById("wrapper");

  // Event listener for scrolling
  window.addEventListener("scroll", function () {
    const wrapperRect = wrapper.getBoundingClientRect();

    if (window.scrollY >= wrapperRect.bottom) {
      sideMenu.style.display = "block";
    } else {
      sideMenu.style.display = "none";
    }
  });
});
