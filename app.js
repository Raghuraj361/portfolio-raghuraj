const thembutton = document.querySelector('.nav-theme');
const themeList = document.querySelector('.theme-list');

thembutton.addEventListener('mouseover', show);

function show(event) {
  event.preventDefault();
themeList.classList.add('hidden');
  console.log('hello');
}