document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="editTask(this)">✏️</button>
            <button onclick="completeTask(this)">✔️</button>
            <button onclick="deleteTask(this)">🗑️</button>
        </div>
    `;

    document.getElementById('incomplete-tasks').appendChild(task);
    taskInput.value = '';
}

function editTask(button) {
    const task = button.parentElement.parentElement;
    const newTaskText = prompt('Edit your task', task.firstElementChild.textContent);
    if (newTaskText !== null) task.firstElementChild.textContent = newTaskText.trim();
}

function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.add('completed');
    task.querySelector('button[onclick="completeTask(this)"]').remove();
    document.getElementById('complete-tasks').appendChild(task);
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}
