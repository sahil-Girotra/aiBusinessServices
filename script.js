// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Scroll smoothly to the target element
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Toggle navigation menu on small screens
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
  
  // Add an event listener to the "Send" button
  document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve input values
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
  
    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.'); // Display an alert if any field is empty
    } else {
      // Display a success message with the submitted data
      const successMessage = `Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
      alert(successMessage);
      // Clear input fields
      document.querySelector('input[name="name"]').value = '';
      document.querySelector('input[name="email"]').value = '';
      document.querySelector('input[name="phone"]').value = '';
      document.querySelector('textarea[name="message"]').value = '';
    }
  });
  