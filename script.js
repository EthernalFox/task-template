
const drop = (event) => {
    event.preventDefault();
    let taskID = event.dataTransfer.getData("text");
    
    
    if (event.target.id.includes("task")) return;

    event.target.appendChild(document.getElementById(taskID));
    updateTasksCount();
}


const allowdrop = (event) => {
    event.preventDefault();
    
}


const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
}



const updateTasksCount = () => {
    const backlogColumn = document.getElementById("backlog");
    const todoColumn = document.getElementById("to-do");
    const readyColumn = document.getElementById("ready");
    const inProgressColumn = document.getElementById("in-progress");
    const inReviewColumn = document.getElementById("in-review");

    const backlogHeader = document.getElementById("backlog-header");
    const todoHeader = document.getElementById("todo-header");
    const readyHeader = document.getElementById("ready-header");
    const inProgressHeader = document.getElementById("progress-header");
    const inReviewHeader = document.getElementById("review-header");

    updateHeader("Backlog", backlogHeader, backlogColumn);
    updateHeader("To do", todoHeader, todoColumn);
    updateHeader("Ready", readyHeader, readyColumn);
    updateHeader("In Progress", inProgressHeader, inProgressColumn);
    updateHeader("In Review", inReviewHeader, inReviewColumn);
}


const updateHeader = (title, header, column) => {
    const taskCount = column.children.length;
    header.innerHTML = `${title} (<span class="counter"> ${taskCount} </span>)`;
}

updateTasksCount();