document.addEventListener('DOMContentLoaded', function () {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stylesheet = document.getElementById('stylesheet');
    // const sun = document.getElementById('sun');
    // const moon = document.getElementById('moon');
    // const styleChangedEvent = new Event('styleChanged');

    if (isDarkMode) {
        console.log('Dark mode');
        stylesheet.href = '../styles-dark.css';
        // moon.style.display = 'none';
        // window.isDarkMode = true;
    } else {
        console.log('Light mode');
        stylesheet.href = '../styles.css';
        // sun.style.display = 'none';
        // window.isDarkMode = false;
    }

    // sun.addEventListener('click', function () {
    //     stylesheet.href = '../styles.css';
    //     sun.style.display = 'none';
    //     moon.style.display = 'block';
    //     window.isDarkMode = false;
    
    //     document.dispatchEvent(styleChangedEvent);
    // });
    
    // moon.addEventListener('click', function () {
    //     stylesheet.href = '../styles-dark.css';
    //     moon.style.display = 'none';
    //     sun.style.display = 'block';
    //     window.isDarkMode = true;
    
    //     document.dispatchEvent(styleChangedEvent);
    // });
});