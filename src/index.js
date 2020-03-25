document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const newTaskPriority = document.getElementById('new-task-priority');

  const newTaskUl = document.getElementById('tasks');

  newTaskForm.addEventListener("submit", createNewTask);

  // const taskList = new TaskList();
  
  
  // const newTaskForm = document.getElementById('create-task-form');
  // const newTextDescription = document.getElementById('new-task-description');
  // const newTaskPriority = document.getElementById('new-task-priority');

  // const taskUl = document.getElementById('tasks');
  // const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  
  // new TaskForm.addEventListener("submit", function(event){
  //   event.preventDefault();
  //   taskList.createNewTask(newTaskDescription.value);
  //   event.target.reset();
  //   renderApp();
  // });

  // taskUl.addEventListener("click", (event) => {
  //   if (event.target.nodeName === "BUTTON") {
  //     taskList.deleteTask(event.target.dataset.description);
  //     renderApp();
  //   }
  // });

});


const createNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById('new-task-description');
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById('tasks').appendChild(task);
};
