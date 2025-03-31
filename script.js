
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskContainer = document.getElementById("taskContainer");
    let taskItem = document.createElement("li");
    taskItem.draggable = true;
    taskItem.ondragstart = dragStart;
    taskItem.ondragover = dragOver;
    taskItem.ondrop = drop;

    taskItem.innerHTML = `
        <span onclick="editTask(this)">${taskText}</span>
        <button class="button" onclick="removeTask(this)">Delete</button>
    `;

    taskContainer.appendChild(taskItem);
    taskInput.value = "";
}


function removeTask(button) {
    button.parentElement.remove();
}


function clearTasks() {
    document.getElementById("taskContainer").innerHTML = "";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


let draggedItem = null;

function dragStart(event) {
    draggedItem = event.target;
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let taskContainer = document.getElementById("taskContainer");
    if (event.target.tagName === "LI") {
        taskContainer.insertBefore(draggedItem, event.target.nextSibling);
    }
}

function editTask(taskSpan) {
    let newTask = prompt("Edit task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask;
    }
}
