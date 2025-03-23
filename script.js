const hamburger = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


//MEMBERSHIP PAGE
// Function to toggle content visibility when "Load More" is clicked
function toggleContent(plan) {
    // Get the content section associated with the plan
    var content = document.getElementById(plan);

    // Toggle the visibility of the content
    if (content.style.display === "none") {
        content.style.display = "block"; // Show content
    } else {
        content.style.display = "none"; // Hide content
    }
}