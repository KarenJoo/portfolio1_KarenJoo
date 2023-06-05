// Function to ensure that the side menu is hidden when scrolling on or above the wrapper and displayed when scrolling below the wrapper.
//Function 'toggleSideMenu to toggle the visibility of the side menu based on scroll position (chatGPT)
function toggleSideMenu() {
  const sideMenu = document.querySelector(".side-menu");
  const reopenBox = document.querySelector(".reopen-menu");
  const wrapperDisplay = document.getElementById("wrapper").offsetTop;
  //scrollTop and pageYOffset to to get the current scroll position (chatGPT)
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > wrapperDisplay) {
    sideMenu.classList.add("show"); // Adding the 'show' class
    reopenBox.style.display = "block"; // displaying the reopen box
  } else {
    sideMenu.classList.remove("show"); // Removing the 'show' class
    reopenBox.style.display = "none"; // Hiding the reopen box
  }
}

// Event listener for scroll event
window.addEventListener("scroll", toggleSideMenu);

// side menu close button
// using event listener for the close button, when clicked, the side menu moves off-screen by setting the left property to -300px.
const closeButton = document.getElementById("close-button");
const reopenSideMenu = document.querySelector(".reopen-menu");

closeButton.addEventListener("click", () => {
  closeSideMenu();
  reopenSideMenu.style.display = "block"; // Show the reopen menu when the side menu is closed
});

reopenSideMenu.addEventListener("click", () => {
  openSideMenu();
  reopenSideMenu.style.display = "none"; // Hide the reopen menu when the side menu is open
});

// Function to open the side menu
function openSideMenu() {
  document.querySelector(".side-menu").style.left = "0";
}

// Function to close the side menu
function closeSideMenu() {
  document.querySelector(".side-menu").style.left = "-300px";
}
