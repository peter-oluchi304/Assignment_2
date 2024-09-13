// Initialize variables
const menu = document.getElementById("menu");
const toggleButton = document.querySelector(".menu-toggle");
const menuItems = document.querySelectorAll('#menu a');
// Function to toggle the menu visibility
function toggleMenu() {
menu.classList.toggle("show");
// Update ARIA attribute and icon
if (menu.classList.contains("show")) {
toggleButton.setAttribute("aria-expanded", "true");
toggleButton.innerHTML = '&times;'; // Replace with "X" icon
// Focus on the first menu item when the menu is opened
const firstMenuItem = menu.querySelector('a');
if (firstMenuItem) firstMenuItem.focus();
} else {
toggleButton.setAttribute("aria-expanded", "false");
toggleButton.innerHTML = '&#9776;'; // Replace with menu icon
}
}
