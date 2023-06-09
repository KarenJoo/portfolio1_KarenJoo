// Function to open the modal window and display the corresponding section (chatGPT)
function openModal(sectionId) {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const closeButton = document.createElement("span");

  // Add a close button to the modal content
  closeButton.innerHTML = "&times;";
  closeButton.classList.add("modal-close");
  modalContent.innerHTML = "";
  modalContent.appendChild(closeButton);

  // Get the content of the right section
  const sectionContent = document.querySelector(sectionId).innerHTML;
  modalContent.innerHTML += sectionContent;
 // Modify the section content to include query parameters
 const url = new URL(window.location.href);
 url.searchParams.set("section", sectionId.slice(1));
 const sectionContentWithQueryParams = sectionContent.replace(
   /href="#/g,
   `href="${url.href}#`
 );

 // Create a new container for the section content
 const sectionContainer = document.createElement("div");
 sectionContainer.innerHTML = sectionContentWithQueryParams;

 // Append the section container to the modal content
 modalContent.appendChild(sectionContainer);

  
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
  
    // Get the content of the right section
    const sectionContent = document.querySelector(sectionId).innerHTML;
  
    // Modify the section content to include query parameters
    const url = new URL(window.location.href);
    url.searchParams.set("section", sectionId.slice(1));
    const sectionContentWithQueryParams = sectionContent.replace(
      /href="#/g,
      `href="${url.href}#`
    );
  
    // Create a new container for the section content
    const sectionContainer = document.createElement("div");
    sectionContainer.innerHTML = sectionContentWithQueryParams;
  
    // Append the section container to the modal content
    modalContent.appendChild(sectionContainer);
  
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
  
    // Update the browser URL with the query parameters
    history.pushState({}, "", url.href);
  }
