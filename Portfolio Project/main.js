// Get all menu links
const menuLinks = document.querySelectorAll('nav a');

// Add click event listener to each link
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Remove active class from all links
    menuLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    event.target.classList.add('active');
  });
});

