document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.view-btn'); // Get all view buttons
    const popupModal = document.getElementById('popupModal'); // Get the popup modal
    const popupContent = document.getElementById('popupContent'); // Get popup content area
    const closeBtn = document.querySelector('.close'); // Close button

    // Add click event listener to each view button
    viewButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();  // Prevents triggering click event on parent element
            const galleryItem = button.parentElement;  // Get the parent gallery item
            const content = galleryItem.innerHTML;  // Get the image or video content
            popupContent.innerHTML = content;  // Insert the content inside the modal
            popupModal.style.display = 'block';  // Show the modal
        });
    });

    // Close the modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        popupModal.style.display = 'none';  // Hide the modal
    });

    // Close the modal when clicking outside the popup content
    window.addEventListener('click', function(event) {
        if (event.target === popupModal) {
            popupModal.style.display = 'none';  // Hide the modal
        }
    });
});
