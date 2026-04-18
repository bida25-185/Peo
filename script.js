// CampusConnect Form Validation
// This script validates the contact form before submission

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if contact form exists on the page
    let contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add submit event listener to the form
        contactForm.addEventListener('submit', function(e) {
            // Prevent form from actually submitting
            e.preventDefault();
            
            // Get all form field values and remove extra spaces
            let name = document.getElementById('name').value.trim();
            let email = document.getElementById('email').value.trim();
            let message = document.getElementById('message').value.trim();
            
            // Check if name is empty
            if (name === "") {
                alert("❌ Please enter your name");
                return false;
            }
            
            // Check if name has at least 2 characters
            if (name.length < 2) {
                alert("❌ Please enter a valid name (at least 2 characters)");
                return false;
            }
            
            // Check if email is empty
            if (email === "") {
                alert("❌ Please enter your email address");
                return false;
            }
            
            // Check if email format is valid (must contain @ and .)
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("❌ Please enter a valid email address (e.g., name@example.com)");
                return false;
            }
            
            // Check if message is empty
            if (message === "") {
                alert("❌ Please enter your message");
                return false;
            }
            
            // Check if message has at least 10 characters
            if (message.length < 10) {
                alert("❌ Please enter a longer message (at least 10 characters)");
                return false;
            }
            
            // If all validation passes, show success message
            alert("✅ Thank you " + name + "! Your message has been sent successfully. We will get back to you soon.");
            
            // Clear/Reset the form
            contactForm.reset();
            
            return true;
        });
    }
});