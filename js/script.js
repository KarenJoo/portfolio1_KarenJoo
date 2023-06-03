// Function to ensure that the side menu is hidden when scrolling on or above the wrapper and displayed when scrolling below the wrapper.
//Function 'toggleSideMenu to toggle the visibility of the side menu based on scroll position (chatGPT)
function toggleSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  const reopenBox = document.getElementById("reopen-menu");
  const wrapperDisplay = document.getElementById("wrapper").offsetTop;
  //scrollTop and pageYOffset to to get the current scroll position (chatGPT)
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // determining when to display/not display the side menu using wrapperDisplay (.offsetTop)
  // scrolling past wrapper the reopen side menu is visible
  if (scrollTop > wrapperDisplay) {
    sideMenu.style.left = "-300px"; // Hide the side menu by moving it off-screen
    reopenBox.style.display = "block"; // Show the reopen box
  } else {
    sideMenu.style.left = "-300px"; // Hide the side menu by moving it off-screen
    reopenBox.style.display = "none"; // Hide the reopen box
  }
}

// Event listener for scroll event
window.addEventListener("scroll", toggleSideMenu);

// side menu close button
// using event listener for the close button, when clicked, the side menu moves off-screen by setting the left property to -300px.
const closeButton = document.getElementById("close-button");
const reopenSideMenu = document.getElementById("reopen-menu");

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
  document.getElementById("side-menu").style.left = "0";
}

// Function to close the side menu
function closeSideMenu() {
  document.getElementById("side-menu").style.left = "-300px";
}
