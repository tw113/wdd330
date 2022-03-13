const email = document.getElementById('mail');
const getBtn = document.getElementById('get');
const colorsEl = document.getElementById('colors-container');
const sendData = {
  model: 'default',
};

let colors = [];

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Expecting an e-mail address!');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});

getBtn.addEventListener('click', () => {
  const res = fetch('http://colormind.io/api/', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify(sendData),
  })
    .then((res) => res.json())
    .then((data) => {
      let i = 0;
      colors = data.result;
      colorsEl.innerHTML = "";
      colors.forEach(color => {
        colorsEl.innerHTML += `<div class="color-item" style="background-color: rgb(${color})">${color}</div>`
      })
    });
});
