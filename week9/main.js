const widthEl = document.getElementById('width');
const heightEl = document.getElementById('height');

const outerwidthEl = document.getElementById('outer-width');
const outerheightEl = document.getElementById('outer-height');

const locationEl = document.getElementById('location');
const timeEl = document.getElementById('time');

timeEl.innerHTML = `Your time: <span>${Date()}</span>`;

navigator.geolocation.getCurrentPosition((position) => {
  locationEl.innerHTML = `Your location: <span>${position.coords.latitude}, ${position.coords.longitude}</span>`;
});

window.onresize = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  let owidth = window.outerWidth;
  let oheight = window.outerHeight;

  widthEl.innerHTML = `Inner Screen Width: <span>${width}</span>`;
  heightEl.innerHTML = `Inner Screen Height: <span>${height}</span>`;

  outerwidthEl.innerHTML = `Outer Screen Width: <span>${owidth}</span>`;
  outerheightEl.innerHTML = `Outer Screen Height: <span>${oheight}</span>`;
};