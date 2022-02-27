const defaultColor = '#94B49F';
const pressedColor = '#789395'

const practiceAreaEl = document.getElementById('sentence')

window.addEventListener('keydown', (event) => {
  const code = event.code;
  const keyEl = document.getElementById('k_cap_' + code);

  keyEl.style = `fill: ${pressedColor};`;

  //event.preventDefault();
  event.stopPropagation();
});

document.addEventListener('keyup', (event) => {
  const code = event.code;
  const keyEl = document.getElementById('k_cap_' + code);

  keyEl.style = `fill: ${defaultColor};`;

  //event.preventDefault();
  event.stopPropagation();
});

practiceAreaEl.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue lorem, tincidunt nec nulla nec, semper condimentum quam. Morbi gravida, leo vitae tristique lacinia, massa libero convallis felis, a fermentum lacus eros vitae purus. Praesent laoreet, ante in viverra sodales, velit tellus ornare diam, congue auctor massa mi vitae nibh. Nulla mauris ipsum, venenatis rhoncus risus quis, pharetra posuere est. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris tincidunt varius metus a venenatis. Maecenas at egestas diam. Nam euismod, diam a tempor ultricies, sapien odio consectetur eros, non luctus magna quam sed justo. Integer interdum lobortis neque, nec consequat justo malesuada at. Praesent euismod pharetra elit, non bibendum metus feugiat blandit. Vestibulum dolor nulla, tincidunt quis porttitor eget, iaculis vitae tellus. Vivamus posuere ligula eget ante eleifend dapibus. Etiam auctor ut urna sit amet tincidunt.';