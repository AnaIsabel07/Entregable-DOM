// pendingTasks.js
const list = document.getElementById('list');
const pendingTasksContainer = document.getElementById('pendingTasks');

let updatePendingTasks = ()=>{
    let pendingTasks = list.querySelectorAll('div');
    let pendingTasksHTML = '';
    pendingTasks.forEach(task => {
        if (!task.querySelector('input[type="checkbox"]').checked) {
            pendingTasksHTML += task.outerHTML;
        }
    });
    pendingTasksContainer.innerHTML = pendingTasksHTML;
};

