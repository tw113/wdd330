const task3Element = document.getElementById('task-3');
const name = 'tanner';

function showText() {
  alert('some text');
}

function showName(name) {
  alert(name);
}

function combine(str1, str2, str3) {
  alert(str1 + str2 + str3);
}

task3Element.addEventListener('click', showText);


showName(name);
combine('hello ', ' I am ', name);