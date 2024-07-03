function ToDoList() {
    this.tasks = {};
    this.currentId = 0;
}

ToDoList.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

ToDoList.prototype.addTasks = function (task) {
    task.id = this.assignId();
    this.tasks[task.id] = task;
};

ToDoList.prototype.findTask = function (id) {
    if (this.tasks[id] !== undefined) {
        return this.tasks[id];
    }
    return false;
};

ToDoList.prototype.markAsCompleted = function (id) {
    if (this.tasks[id] === undefined) {
        return false;
    }
    let task = this.tasks[id];
    task.status = "✔ Task Accomplished";
    return task.status;
}

ToDoList.prototype.deleteTask = function (id) {
    if (this.tasks[id] === undefined) {
        return false;
    }
    delete this.tasks[id];
    return true;
};

function Task(name, date, time) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.status = "Task Unaccomplished";
}

let toDoList = new ToDoList();
function displayTaskDetails(toDoListToDisplay) {
    let tasksList = $("ul#list");
    let htmlForTaskInfo = "";
    Object.keys(toDoListToDisplay.tasks).forEach(function (key) {
        const task = toDoListToDisplay.findTask(key);
        htmlForTaskInfo += "<li id=" + task.id + ">" + task.name +"  </li> ";
    });
    tasksList.html(htmlForTaskInfo);
}

function showTask(taskId) {
    const task = toDoList.findTask(taskId);
    $("#show-list").fadeIn(1000);
    $(".task-name").html(task.name);
    $(".task-date").html(task.date);
    $(".task-time").html(task.time);
    $(".task-status").html(task.status);
    let buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" +  task.id + ">Delete</button>");
    let check = "checkbox";
    let checkbox = $("#tickbox");
    checkbox.empty();
    checkbox.append("<input class='checked ' type=" + check + " id=" +  task.id + ">");

}
function attachTaskListeners() {
    $("ul#list").on("click", "li", function () {
        showTask(this.id);
    });

    $("#tickbox").on("click", ".checked", function () {
        let completed = toDoList.markAsCompleted(this.id);
        $(".task-status").html(completed);       
        
    });

    $("#buttons").on("click", ".deleteButton", function () {
        toDoList.deleteTask(this.id);
        $("#show-list").hide();
        displayTaskDetails(toDoList);
    });
}

$(document).ready(function () {
    attachTaskListeners();
    $("form#formOne").submit(function (event) {
        event.preventDefault();
        const inputtedName = $("input#name-of-task").val();
        const inputtedDate = $("input#date-of-task").val();
        const inputtedTime = $("input#time-of-task").val();

        $("input#name-of-task").val("");
        $("input#date-of-task").val("");
        $("input#time-of-task").val("");

        let newTask = new Task(inputtedName, inputtedDate, inputtedTime);
        toDoList.addTasks(newTask);
        displayTaskDetails(toDoList);
    });
});
