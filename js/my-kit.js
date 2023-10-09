// Load Font Awesome CSS
const link = document.createElement('link');
link.href = 'https://alexatsierra.github.io/font-awesome-hosting/css/all.min.css'; // Replace with your hosted CSS file
link.rel = 'stylesheet';
document.head.appendChild(link);

// Load Font Awesome JavaScript
const script = document.createElement('script');
script.src = 'https://alexatsierra.github.io/font-awesome-hosting/js/all.js'; // Replace with your hosted JavaScript file
script.crossOrigin = 'anonymous';
document.body.appendChild(script);
