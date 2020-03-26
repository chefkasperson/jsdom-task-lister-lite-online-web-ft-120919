const taskForm = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");

taskForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const newTask = document.querySelector('#new-task-description').value
  taskList.innerHTML += `
    <li>
      ${newTask}
      <button data-action="delete"> X for delete </button>
    </li>
    
    `

  // const taskItem = document.createElement('li')
  // taskItem.innerText = newTask
  // taskList.appendChild(taskItem)
  taskForm.reset()
})

taskList.addEventListener('click', function(event) {
  if (event.target.dataset.action === 'delete') {
    event.target.parentElement.remove()
  }
})