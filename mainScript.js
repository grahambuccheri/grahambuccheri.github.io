document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profileImage');

    profileImage.addEventListener('mouseover', function() {
        this.style.transition = 'filter 0.5s ease'; // Apply transition for the filter effect
        this.style.filter = 'brightness(0)'; // Fade to black (0% brightness)

        // Switch image when the brightness reaches black
        setTimeout(() => {
            this.src = 'images/vert.jpg'; // Change to new image
            this.style.filter = 'brightness(1)'; // Fade back to full brightness (100%)
        }, 250); // Change image halfway through the transition
    });

    profileImage.addEventListener('mouseout', function() {
        this.style.transition = 'filter 0.5s ease'; // Apply transition for the filter effect
        this.style.filter = 'brightness(0)'; // Fade to black (0% brightness)

        // Switch image when the brightness reaches black
        setTimeout(() => {
            this.src = 'images/window.jpg'; // Switch back to original image
            this.style.filter = 'brightness(1)'; // Fade back to full brightness (100%)
        }, 250); // Change image halfway through the transition
    });
});
