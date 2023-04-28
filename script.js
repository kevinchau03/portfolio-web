window.addEventListener('scroll', function() {
  const landingContainer = document.querySelector('.landing-container');
  const landingScreenHeight = document.querySelector('.landing-screen').offsetHeight;
  const scrollTop = window.scrollY;
  if (scrollTop > landingScreenHeight / 3) {
    landingContainer.classList.add('hidden');
    landingContainer.classList.remove('active');
  } else {
    landingContainer.classList.remove('hidden');
    landingContainer.classList.add('active');
  }
});
