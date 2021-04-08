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
todoList = [];

function refreshTodos() {
  var todoListEl = document.getElementById("todo-list");
  var i = 0
  todoListEl.innerHTML = ""

  const taskCountEl = document.getElementById("task-count")
  taskCountEl.innerText = this.todoList.length + " Tasks"

  this.todoList.forEach(item => {
    const newTodoEl = document.createElement("div");
    newTodoEl.className = "todo-item";
    newTodoEl.innerHTML = "<input type='checkbox'><h4>" + item.content + "</h4>";

    const deleteTodoEl = document.createElement("button");
    deleteTodoEl.className = "delete-todo-button";
    deleteTodoEl.setAttribute("onclick", "removeTodo(event)")
    deleteTodoEl.setAttribute("value", i++)
    deleteTodoEl.innerHTML = "X";

    newTodoEl.appendChild(deleteTodoEl);
    todoListEl.appendChild(newTodoEl);

    console.log(i)
  });
}

function addTodo() {
  todoList.push(new Todo(this.todoList.length, document.getElementById("add-todo-box").value));

  console.log(todoList);

  refreshTodos();
}

function removeTodo(event) {
  this.todoList.splice(event.target.value, 1)
  refreshTodos()
}