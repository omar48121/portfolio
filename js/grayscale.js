const logos = document.querySelectorAll('.logo');

function randomizeGrayscale() {
    logos.forEach(logo => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
            logo.style.filter = 'grayscale(100%)';
        } else {
            logo.style.filter = 'grayscale(0%)';
            // logo.style.transform = `translate(${Math.random() * 10}px, ${Math.random() * 10}px`;
            logo.style.transition = 'transform 0s';
        }
    });
}

setInterval(randomizeGrayscale, 2000);
