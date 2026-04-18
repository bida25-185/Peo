function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return false;
    }
    
    if (email === "") {
        alert("Please enter your email address");
        return false;
    }
    
    if (message === "") {
        alert("Please enter your message");
        return false;
    }

    alert("Thank you " + name + "! Your message has been sent successfully.");
    return true;
}