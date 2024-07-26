document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById("lightmode-toggle");
    const isLightMode = document.body.classList.contains("light-mode");
  
    // Sync the checkbox with the current theme
    themeToggle.checked = isLightMode;
  
    themeToggle.addEventListener("change", function() {
      document.body.classList.toggle("light-mode");
      document.body.classList.toggle("dark-mode");
    });
  
    // Set the initial theme based on the checkbox state
    if (themeToggle.checked) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  });
  

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav');

window.onscroll = () => {
sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
    }
})
};

menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
}

