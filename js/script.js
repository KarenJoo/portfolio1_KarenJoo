// scroll function side-menu and reopen menu box (chatGPT)

// add eventlistener for scroll on body
//using pageYOffset if user scrolles below the visible area of the page
// toggle > if scrolled is true the css class 'scrolled' is added if false it removes the css class
window.addEventListener('scroll', function() {
    var body = document.querySelector('body');
    var scrolled = window.pageYOffset > window.innerHeight;
    body.classList.toggle('scrolled', scrolled);
  });

// toggle on the reopen menu box to display similar to the side-menu

// side menu close button
//  using event listener to the close button, when clicked, the side menu moves off-screen by left property -300px.
const sideMenu = document.getElementById("side-menu");
const closeButton = document.getElementById("close-button");
const reopenSideMenu = document.getElementById("reopen-menu");

closeButton.addEventListener("click", () => {
  sideMenu.style.left = "-300px"; //moving the sidemenu off screen
});

reopenSideMenu.addEventListener("click", () => {
  sideMenu.style.left = "0"; // Move the menu back to its original position
});

// Function to open the side menu
function openSideMenu() {
  document.getElementById("side-menu").style.left = "0";
  document.getElementById("reopen-menu").style.display = "none";
}

// Function to close the side menu
function closeSideMenu() {
  document.getElementById("side-menu").style.left = "-300px";
  document.getElementById("reopen-menu").style.display = "block";
}

// Event listener for the reopen box
document.getElementById("reopen-menu").addEventListener("click", openSideMenu);

// Event listener for the close button
document
  .getElementById("close-button")
  .addEventListener("click", closeSideMenu);
