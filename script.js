// Get all the menu items
const menuItems = document.querySelectorAll('.menu-item');

// Get all the content items
const contentItems = document.querySelectorAll('.content-item');

// Function to show content based on the menu item clicked
function showContent(selectedItem) {
    // Hide all content items
    contentItems.forEach(content => content.classList.remove('active'));

    // Remove 'active' class from all menu items
    menuItems.forEach(menuItem => menuItem.style.backgroundColor = '#333');

    // Show the corresponding content
    const contentId = 'content' + selectedItem.id.charAt(selectedItem.id.length - 1);
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');

    // Highlight the selected menu item
    selectedItem.style.backgroundColor = '#575757';
}

// Add event listeners to menu items
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        showContent(item);
    });
});

// Automatically select the first item and show its content on page load
document.addEventListener('DOMContentLoaded', function () {
    showContent(menuItems[0]);  // Select and show the content of the first item
});
