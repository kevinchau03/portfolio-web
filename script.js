// Disable scrolling by default
document.body.style.overflow = 'hidden';

console.log("Hello World");

// Enable scrolling when <a> tag is clicked
document.querySelector('a').addEventListener('click', function() {
  document.body.style.overflow = '';
});