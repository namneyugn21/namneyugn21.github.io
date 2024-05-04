// Make the greetings change
document.addEventListener('DOMContentLoaded', function() {
    var switchText = true;
    // Select the element to change
    var greeting = document.getElementById('greetings');
    greeting.textContent = 'Hello !';

    setInterval(function() {
        // Toggle between "Hello" and "Xin Chào"
        greeting.style.opacity = 0; // Fade out
        setTimeout(function() {
            if (switchText) {
                greeting.textContent = 'Hello !'; // Change the text content
            } else {
                greeting.textContent = 'Xin Chào !'; // Change the text content
            }
            greeting.style.opacity = 1; // Fade in
        }, 500); // Wait for the fade out transition to complete
        switchText = !switchText;
    }, 3000);
});
