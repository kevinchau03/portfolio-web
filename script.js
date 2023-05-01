window.addEventListener('scroll', function() {
  const landingContainer = document.querySelector('.landing-container');
  const landingScreenHeight = document.querySelector('.landing-screen').offsetHeight;
  const scrollTop = window.scrollY;
  const projectsContainer = document.querySelector('.projects-container');
  const projectScreenHeight = document.querySelector('.projects-screen').offsetHeight;
  const projectScreenPosition = document.querySelector('.projects-screen').offsetTop;
  if (scrollTop > landingScreenHeight / 4) {
    landingContainer.classList.add('hidden');
    landingContainer.classList.remove('active');
  } else {
    landingContainer.classList.remove('hidden');
    landingContainer.classList.add('active');
  }

  if (scrollTop > (projectScreenPosition / 3) + projectScreenHeight && scrollTop < (projectScreenHeight + projectScreenPosition) - (projectScreenHeight / 1.75)) {
    projectsContainer.classList.add('active');
    projectsContainer.classList.remove('hidden');
  } else  {
    projectsContainer.classList.remove('active');
    projectsContainer.classList.add('hidden');
  }
});







