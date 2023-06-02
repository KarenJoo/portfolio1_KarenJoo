// scroll function side-menu (chatGPT)
// add eventlistener for scroll on body
//using pageYOffset if user scrolles below the visible area of the page
// toggle > if scrolled is true the css class 'scrolled' is added if false it removes the css class
window.addEventListener("scroll", function () {
  const body = document.querySelector("body");
  const scrolled = window.pageYOffset > window.innerHeight;
  body.classList.toggle("scrolled", scrolled);
});
