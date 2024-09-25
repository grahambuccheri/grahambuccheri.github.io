document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profileImage');

    profileImage.addEventListener('mouseover', function() {
        this.style.transition = 'filter 0.5s ease';
        this.style.filter = 'brightness(0)';

        setTimeout(() => {
            this.src = 'images/vert.jpg';
            this.style.filter = 'brightness(1)';
        }, 250);
    });

    profileImage.addEventListener('mouseout', function() {
        this.style.transition = 'filter 0.5s ease';
        this.style.filter = 'brightness(0)';

        setTimeout(() => {
            this.src = 'images/window.jpg';
            this.style.filter = 'brightness(1)';
        }, 250);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loaderContainer = document.getElementById('loader-container');
    const loaderBar = document.getElementById('loader-bar');
    let progress = 0;

    loaderContainer.style.display = 'flex';
    loaderContainer.style.opacity = '1';
    document.documentElement.style.overflow = 'hidden';

    const loadingInterval = setInterval(() => {
        progress += 1.5;
        loaderBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(loadingInterval);

            // Hold at 100% for 0.5 seconds
            setTimeout(() => {
                loaderContainer.style.opacity = '0';

                // Fade out loader and display the site after the opacity transition
                setTimeout(() => {
                    loaderContainer.style.display = 'none';
                    document.body.style.opacity = '1';
                    document.documentElement.style.overflow = 'auto';
                }, 500); // Match the transition duration for the fade
            }, 500); // Hold at 100% for 0.5 seconds before fade-out
        }
    }, 5);
});
