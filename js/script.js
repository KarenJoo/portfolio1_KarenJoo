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

// Function to open the modal window and display the corresponding section
function openModal(sectionId) {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const closeButton = document.createElement("span");

  // Add a close button to the modal content
  closeButton.innerHTML = "&times;";
  closeButton.classList.add("modal-close");
  modalContent.innerHTML = "";
  modalContent.appendChild(closeButton);

  // Get the content of the corresponding section
  const sectionContent = document.querySelector(sectionId).innerHTML;
  modalContent.innerHTML += sectionContent;

  // Display the modal
  modal.classList.add("modal-show");

  // Event listener for the close button
  closeButton.addEventListener("click", closeModal);

  // Event listener for clicking outside the modal window to close it
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

// Function to close the modal window
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("modal-show");
}

// Event listeners for the main menu links
const mainMenuLinks = document.querySelectorAll("#main-menu a");
mainMenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute("href");
    openModal(targetSectionId);
  });
});
// Add event listener for the close button in the modal
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal-close")) {
    closeModal();
  }
});
