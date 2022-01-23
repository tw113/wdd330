const task1 = document.getElementById('task-1');
const task2 = document.getElementById('task-2');
const task3 = document.getElementById('task-3');

function selectFirstTask() {
  task1.style.backgroundColor = 'black';
  task1.style.color = 'white';
}

function changeHeadTitle() {
  const headTitle = document.querySelector('title');

  headTitle.innerText = 'Assignment Solved!';
}

function changeHeading() {
  const heading = document.querySelector('h1');

  heading.innerText = 'Assignment Solved!';
}

task1.addEventListener('click', () => {
  selectFirstTask();
});

task2.addEventListener('click', () => {
  changeHeadTitle();
});

task3.addEventListener('click', () => {
  changeHeading();
});