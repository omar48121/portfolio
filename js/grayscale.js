const logos = document.querySelectorAll('.logo');

function randomizeGrayscale() {
    logos.forEach(logo => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
            logo.style.filter = 'grayscale(100%)';
        } else {
            logo.style.filter = 'grayscale(0%)';
        }
    });
}

setInterval(randomizeGrayscale, 2000);
