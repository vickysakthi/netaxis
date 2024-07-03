let tasks = [];
let completedTasks = [];
let oldTasks = [];

function addTask(task, date) {
    const currentDate = new Date();
    const taskDate = new Date(date);
    const taskObj = { task, date };

    tasks.push(taskObj);

    if (taskDate < currentDate) {
        oldTasks.push(taskObj);
    }

    updateUI();
}

function completeTask(index) {
    const task = tasks.splice(index, 1)[0];
    completedTasks.push(task);
    updateUI();
}

function updateUI() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `${task.task} <span>${task.date}</span> <span onclick="completeTask(${index})"><i class="fa-solid fa-check"></i></span> <span><i class="fa-solid fa-eraser"></i></span>`;
        taskList.appendChild(taskItem);
    });

    const completedTasksList = document.getElementById('completedTasks');
    completedTasksList.innerHTML = '';
    completedTasks.forEach(task => {
        const completedTaskItem = document.createElement('div');
        completedTaskItem.classList.add('completed-task-item');
        completedTaskItem.innerHTML = `${task.task} <span>${task.date}</span>`;
        completedTasksList.appendChild(completedTaskItem);
    });

    const oldTasksList = document.getElementById('oldTasks');
    oldTasksList.innerHTML = '';
    oldTasks.forEach(task => {
        const oldTaskItem = document.createElement('div');
        oldTaskItem.classList.add('old-task-item');
        oldTaskItem.innerHTML = `${task.task} <span>${task.date}</span>`;
        oldTasksList.appendChild(oldTaskItem);
    });

    const progress = document.getElementById('progress');
    const progressPercent = completedTasks.length / (tasks.length + completedTasks.length + oldTasks.length) * 100;
    progress.innerText = `You have completed ${progressPercent.toFixed(0)}%`;
}

document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;

    if (taskName && taskDate) {
        addTask(taskName, taskDate);
        document.getElementById('taskName').value = '';
        document.getElementById('taskDate').value = '';
    }
});
