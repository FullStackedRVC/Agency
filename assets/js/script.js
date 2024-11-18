'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");
const contBtn = document.querySelector(".send-button");
const scrollBtn = document.querySelectorAll("#scrollButton");
const menuButton = document.querySelector(".nav-toggle-btn");
const logoNavbar = document.querySelector(".logo");
const email = "xvrtechgroup@gmail.com";

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

for (let i = 0; i < scrollBtn.length; i++) {
  scrollBtn[i].addEventListener("click", function () {
    var section = document.querySelector(".footer");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/**
 * header scroll active state & go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

contBtn.addEventListener('click', function (e) {
  e.preventDefault()
  console.log("email triggered");
  const name = document.getElementById('name').value;
  
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const body = 'Name: ' + name + '\n' + 'Message: ' + message + '\n';
 

  if(name === '' && subject === '' && message === '' ){
      alert("Form is empty. Can't send an empty email.");
      return;
  }
  else if (name === '' && subject !== '' && message !== '' )
  {
    alert("Name field is empty.");
    return;    
  }
  else if (name !== '' && subject === '' && message !== '' )
  {
    alert("Subject field is empty.");
    return;    
  }
  else if (name !== '' && subject !== '' && message === '' )
  {
    alert("Message field is empty."); 
    return;   
  }
  else 
  {
    var mailtoLink = 'mailto:' + email +
                             '?subject=' + encodeURIComponent(subject) +
                             '&body=' + encodeURIComponent(body);
    // Open default email client
    window.location.href = mailtoLink;

  }
});

/* Code for different window sizes */
menuButton.addEventListener("click", function () {
  
  
  if (window.innerWidth < 992) {
    if (logoNavbar.style.display === "none") {
      logoNavbar.style.display = "block"; // Show the image
    } else {
      logoNavbar.style.display = "none"; // Hide the image
    }
  }
});
