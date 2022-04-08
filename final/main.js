const defaultColor = '#94B49F';
const pressedColor = '#789395';
const paragraphValue =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue lorem, tincidunt nec nulla nec, semper condimentum quam. Morbi gravida, leo vitae tristique lacinia, massa libero convallis felis, a fermentum lacus eros vitae purus. Praesent laoreet, ante in viverra sodales, velit tellus ornare diam, congue auctor massa mi vitae nibh. Nulla mauris ipsum, venenatis rhoncus risus quis, pharetra posuere est. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.';
const workingAreaEl = document.getElementById('working-area');
const typedAreaEl = document.getElementById('typed-text');
const spanBlink = '<span class="blink">|</span>';
const keyboardEl = document.getElementById('keyboard');
const hideButtonEl = document.getElementById('hide-toggle');

let paragraphArray = [];
let currentParagraphIndex = 0;
let workingArray = paragraphValue.split('');
let typedString = '';
let countCorrect = 0;
let countError = 0;

function updateCurrentParagraph() {
  workingAreaEl.innerHTML = spanBlink + workingArray.join('');
}

function paragraphLeft() {
  workingArray = paragraphArray[--currentParagraphIndex].split('');
  updateCurrentParagraph();
}

function paragraphRight() {
  workingArray = paragraphArray[++currentParagraphIndex].split('');
  updateCurrentParagraph();
}

function getParagraphs() {
  fetch('https://metaphorpsum.com/paragraphs/10')
    .then((res) => res.text())
    .then((data) => {
      paragraphArray = data.split('\n\n');
      workingArray = paragraphArray[0].split('');
      updateCurrentParagraph();
    });
}

window.addEventListener('keydown', (event) => {
  const code = event.code;
  let charTyped = event.key;

  const keyEl = document.getElementById('k_cap_' + code);
  const spanError = '<span class="error">|</span>';

  keyEl.style = `fill: ${pressedColor};`;

  if (event.key != 'Shift') {
    if (workingArray[0] === charTyped) {
      countCorrect += 1;
      typedString += charTyped;
      workingArray.shift();
      typedAreaEl.innerHTML = typedString;
      workingAreaEl.innerHTML = spanBlink + workingArray.join('');
    } else {
      let spanHtml = spanError.replace('|', workingArray[0]);
      countError += 1;
      typedString += spanHtml;
      workingArray.shift();
      typedAreaEl.innerHTML = typedString;
      workingAreaEl.innerHTML = spanBlink + workingArray.join('');
    }
  }

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

function toggleKeyboard() {
  keyboardEl.classList.toggle('hide');
  if (keyboardEl.classList.contains('hide')) {
    hideButtonEl.innerText = 'Show Keyboard';
  } else {
    hideButtonEl.innerText = 'Hide Keyboard';
  }
}

function reset() {
  location.reload();
}

updateCurrentParagraph();
