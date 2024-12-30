// Select all elements with the class 'accordion-container'
const accordion_containers = document.querySelectorAll(".accordion-container");

// Loop through each accordion container
accordion_containers.forEach((accordion_container) => {
  // Add a click event listener to each accordion container
  accordion_container.addEventListener("click", function () {
    // Get the next sibling element (presumably the content to show/hide)
    const data = this.nextElementSibling;
    
    // Toggle the 'show' class on the data element to display/hide it
    data.classList.toggle("show");

    // Select the <i> (icon) element inside the clicked accordion container
    const icon = this.querySelector("i");
    console.log(icon); // Log the icon element to the console for debugging

    // Toggle the 'animate' class on the icon to trigger an animation or style change
    icon.classList.toggle("animate");
  });
}); 