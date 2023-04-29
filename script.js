window.addEventListener('scroll', function() {
  const landingContainer = document.querySelector('.landing-container');
  const landingScreenHeight = document.querySelector('.landing-screen').offsetHeight;
  const scrollTop = window.scrollY;
  if (scrollTop > landingScreenHeight / 4) {
    landingContainer.classList.add('hidden');
    landingContainer.classList.remove('active');
  } else {
    landingContainer.classList.remove('hidden');
    landingContainer.classList.add('active');
  }
});

window.addEventListener('scroll', function() {
  const itemContainer = document.querySelector('.item-container');
  const projectsScreenHeight = document.querySelector('.projects-screen').offsetHeight;
  const scrollTop = window.scrollY;
  const halfProjectsScreen = projectsScreenHeight / 2;
  const scrollPastProjectsScreen = scrollTop - projectsScreenHeight;
    if (scrollTop < halfProjectsScreen) {
      itemContainer.classList.add('hidden');
      itemContainer.classList.remove('active');
    } else if (scrollPastProjectsScreen > halfProjectsScreen) {
      itemContainer.classList.add('hidden');
      itemContainer.classList.remove('active');
    } else {
      itemContainer.classList.remove('hidden');
      itemContainer.classList.add('active');
    }
});


