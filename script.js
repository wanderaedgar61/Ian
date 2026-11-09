// GET THE MENU BUTTON AND NAVIGATION LINKS
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// OPEN AND CLOSE THE MOBILE MENU
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});

// CLOSE THE MENU AFTER A LINK IS CLICKED
const links = navLinks.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
});

// THEME SWITCHER
const themeButtons = document.querySelectorAll(".themes button");

function setTheme(themeName) {
    // Put the theme name on the body so the CSS can change the colours
    document.body.setAttribute("data-theme", themeName);

    // Highlight the button of the theme that is being used
    themeButtons.forEach(function(button) {
        if (button.getAttribute("data-theme") === themeName) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // Remember the visitor's choice for next time
    try {
        localStorage.setItem("group19Theme", themeName);
    } catch (error) {
        // If the browser blocks saving, the page still works
    }
}

themeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        setTheme(button.getAttribute("data-theme"));
    });
});

// Use the saved theme if there is one, otherwise start with light
let savedTheme = "light";
try {
    savedTheme = localStorage.getItem("group19Theme") || "light";
} catch (error) {
    savedTheme = "light";
}
setTheme(savedTheme);

// SESSION INFORMATION BUTTONS
const infoButtons = document.querySelectorAll(".info-btn");

infoButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Find the information box that belongs to this button
        const box = document.getElementById(button.getAttribute("data-target"));

        // Show it if hidden, hide it if showing
        box.hidden = !box.hidden;

        // Change the button text
        if (box.hidden) {
            button.textContent = "Session information";
            button.setAttribute("aria-expanded", "false");
        } else {
            button.textContent = "Hide session information";
            button.setAttribute("aria-expanded", "true");
        }
    });
});

// CONTACT FORM FUNCTIONALITY
const contactForm = document.getElementById("contactForm");
const thankYou = document.getElementById("thankYou");

contactForm.addEventListener("submit", function(event) {
    // Stop the page from refreshing
    event.preventDefault();

    // Display a thank-you message
    thankYou.textContent = "Thank you! Your message has been received.";

    // Clear the form
    contactForm.reset();
});
