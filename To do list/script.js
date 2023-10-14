const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clearAllBtn = document.getElementById("clear-all-btn");
const taskCount = document.getElementById("count");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        // Add an "Edit" button
        let editBtn = document.createElement("span1");
        editBtn.innerText = "\u270e";
        editBtn.addEventListener("click", function() {
            editTask(li);
        });
        
        li.appendChild(editBtn);

        // Add a "Delete" button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.addEventListener("click", function() {
            li.remove();
            saveData();
            updateTaskCount();
        });
        
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = '';
    saveData();
    updateTaskCount();
}

function editTask(taskItem) {
    const newText = prompt("Edit task:", taskItem.firstChild.nodeValue);
    if (newText !== null) {
        taskItem.firstChild.nodeValue = newText;
        saveData();
        updateTaskCount();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        updateTaskCount();
    }
}, false);

clearAllBtn.addEventListener("click", function () {
    localStorage.removeItem("data");
    listContainer.innerHTML = '';
    updateTaskCount();
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    updateTaskCount();
}

function updateTaskCount() {
    const tasks = document.querySelectorAll("#list-container li:not(.checked)").length;
    taskCount.textContent = tasks === 1 ? "Task: " : "Tasks: ";
    taskCount.textContent += tasks;
}

showTask();
