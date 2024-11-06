function addToCart(paintName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ paintName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${paintName} added to cart!`);
}

function goToCart() {
    window.location.href = 'cart.html';
}

function joinaworkshop(){
    window.location.href = 'workshops.html';
}
function shopnow(){
    window.location.href = 'shop.html';
}


// Form validation function
function validateForm(event) {
    // Prevent form from submitting by default (to avoid triggering the email client)
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    let errors = [];

    // Validate name
    if (name === "") {
        errors.push("Name is required.");
    }

    // Validate email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        errors.push("Email is required.");
    } else if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email.");
    }

    // Validate subject
    if (subject === "") {
        errors.push("Subject is required.");
    }

    // Validate message
    if (message === "") {
        errors.push("Message is required.");
    }

    // Show errors or submit the form
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        // If validation passes, reset the form and show a success message
        document.getElementById('contactForm').reset();
        alert("Thank you for your message. We will get back to you shortly!");
    }
}

// Add an event listener to the contact form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    validateForm(event);
});