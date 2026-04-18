// Form validation and submission for CampusConnect
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form values
    let name = document.querySelector('#contactForm input[placeholder="Your Name"]')?.value.trim();
    let email = document.querySelector('#contactForm input[placeholder="Your Email"]')?.value.trim();
    let message = document.querySelector('#contactForm textarea')?.value.trim();
    
    // Validate Name
    if (!name) {
        alert("Please enter your name");
        return false;
    }
    
    // Validate Email
    if (!email) {
        alert("Please enter your email address");
        return false;
    }
    
    // Validate Email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (e.g., name@example.com)");
        return false;
    }
    
    // Validate Message
    if (!message) {
        alert("Please enter your message");
        return false;
    }
    
    // If all validation passes
    alert("Thank you " + name + "! Your message has been sent successfully.");
    
    // Reset the form
    this.reset();
});