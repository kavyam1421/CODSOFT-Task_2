// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert("Please enter a task.");
        return;
    }

    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskValue;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.onclick = function() {
        taskItem.remove();
    };

    // Toggle completion on click
    taskItem.onclick = function() {
        taskItem.classList.toggle('completed');
    };

    taskItem.appendChild(deleteBtn);

    // Add the task item to the list
    const taskList = document.getElementById('taskList');
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}

// Add task when clicking the button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Add task when pressing Enter
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
