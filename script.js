const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    document.querySelector("link[rel='icon']").href = 'ImagesFolder/WhiteIcon-1.png';
  } else {
    html.setAttribute('data-theme', 'dark');
    document.querySelector("link[rel='icon']").href = 'ImagesFolder/BlackIcon-1.png';
  }
});
