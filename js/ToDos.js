class Todo {
  constructor(id, content, complete = false) {
    this.id = id;
    this.content = content;
    this.complete = complete;
  }
  toggleComplete() {
    this.complete = !this.complete;
  }
}

let todoList = [];

refreshTodos();

function refreshTodos(filter = 'all') {
  let theList = getListFromSessionStorage();
  const taskCountEl = document.getElementById('task-count');
  taskCountEl.innerText = theList.length + ' Tasks';

  switch (filter) {
    case 'active':
      theList = theList.filter(task => task.complete == false)
      break;
    case 'complete':
      theList = theList.filter(task => task.complete == true)
      break;
    default:
      break;
  }

  buildTodoListHTML(theList);
}

function addTodo() {
  const theList = getListFromSessionStorage();

  const newItem = new Todo(
    Math.random() * 10,
    document.getElementById('add-todo-box').value
  );

  theList.push(newItem);
  addListToSessionStorage(theList);

  refreshTodos();
}

function removeTodo(event) {
  const theList = getListFromSessionStorage();
  theList.splice(event.target.value, 1);
  sessionStorage.setItem('tasks', JSON.stringify(theList));
  refreshTodos();
}

function filterAll() {
  const button = document.getElementById('btn-all')
  const button2 = document.getElementById('btn-active')
  const button3 = document.getElementById('btn-complete')
  button.classList.add('active'); 
  button2.classList.remove('active'); 
  button3.classList.remove('active'); 
  refreshTodos('all') 
}

function filterActive() { 
  const button = document.getElementById('btn-active')
  const button2 = document.getElementById('btn-all')
  const button3 = document.getElementById('btn-complete')
  button.classList.add('active'); 
  button2.classList.remove('active'); 
  button3.classList.remove('active'); 
  refreshTodos('active') 
}

function filterComplete() { 
  const button = document.getElementById('btn-complete')
  const button2 = document.getElementById('btn-active')
  const button3 = document.getElementById('btn-all')
  button.classList.add('active'); 
  button2.classList.remove('active'); 
  button3.classList.remove('active'); 
  refreshTodos('complete') 
}

function getListFromSessionStorage() {
  const sessionItem = sessionStorage.getItem('tasks');
  return JSON.parse(sessionItem);
}

function addListToSessionStorage(theList) {
  sessionStorage.setItem('tasks', JSON.stringify(theList));
}

function toggleChecked(event) {
  let theList = getListFromSessionStorage();

  console.log(theList);

  const taskIndex = theList.findIndex((task) => task.id == event.target.id);

  theList[taskIndex].complete = !theList[taskIndex].complete;

  addListToSessionStorage(theList);

  refreshTodos();
}

function buildTodoListHTML(theList) {
  const todoListEl = document.getElementById('todo-list');
  todoListEl.innerHTML = '';
  let i = 0;

  theList.forEach((item) => {
    const newTodoEl = document.createElement('div');
    newTodoEl.className = 'todo-item';

    if (item.complete) {
      newTodoEl.innerHTML =
        "<input id='" +
        item.id +
        "' type='checkbox' onchange='toggleChecked(event)' checked><h4>" +
        item.content +
        '</h4>';
    } else {
      newTodoEl.innerHTML =
        "<input name='chk-complete' id='" +
        item.id +
        "' type='checkbox' onchange='toggleChecked(event)'><h4>" +
        item.content +
        '</h4>';
    }

    const deleteTodoEl = document.createElement('button');
    deleteTodoEl.className = 'delete-todo-button';
    deleteTodoEl.setAttribute('onclick', 'removeTodo(event)');
    deleteTodoEl.setAttribute('value', i++);
    deleteTodoEl.innerHTML = 'X';

    newTodoEl.appendChild(deleteTodoEl);
    todoListEl.appendChild(newTodoEl);
  });
}
