// Function to filter projects based on category
function filterProjects(category) {
  // Get all project cards
  var projects = document.getElementsByClassName("project-card");

  // Loop through each project card
  for (var i = 0; i < projects.length; i++) {
    // Check if the project should be displayed
    if (category === "all" || projects[i].classList.contains(category)) {
      // Show the project if it matches the category
      projects[i].style.display = "block";
    } else {
      // Hide the project if it doesn't match the category
      projects[i].style.display = "none";
    }
  }
}
