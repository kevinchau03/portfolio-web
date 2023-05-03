window.addEventListener('scroll', function() {
  const landingContainer = document.querySelector('.landing-container');
  const landingScreenHeight = document.querySelector('.landing-screen').offsetHeight;

  const projectsContainer = document.querySelector('.projects-container');
  const projectScreenHeight = document.querySelector('.projects-screen').offsetHeight;
  const projectScreenPosition = document.querySelector('.projects-screen').offsetTop;

  const aboutContainer = document.querySelector('.about-container');
  const experienceScreenHeight = document.querySelector('.experience-screen').offsetHeight;
  const experienceScreenBottom = (experienceScreenHeight + aboutContainer.offsetTop / 3);

  const scrollTop = window.scrollY;
  console.log(scrollTop,  experienceScreenBottom);
  
  if (scrollTop > landingScreenHeight / 4) {
    landingContainer.classList.add('hidden');
    landingContainer.classList.remove('active');
  } else {
    landingContainer.classList.remove('hidden');
    landingContainer.classList.add('active');
  }

  if (scrollTop < experienceScreenHeight / 2) {
    aboutContainer.classList.add('hidden');
    aboutContainer.classList.remove('active');
  } else if (scrollTop > experienceScreenBottom) {
    aboutContainer.classList.add('hidden');
    aboutContainer.classList.remove('active');
  } else {
    aboutContainer.classList.add('active');
    aboutContainer.classList.remove('hidden');
  }

  if (scrollTop > (projectScreenPosition / 3) + projectScreenHeight && scrollTop < (projectScreenHeight + projectScreenPosition) - (projectScreenHeight / 1.75)) {
    projectsContainer.classList.add('active');
    projectsContainer.classList.remove('hidden');
  } else  {
    projectsContainer.classList.remove('active');
    projectsContainer.classList.add('hidden');
  }
});







