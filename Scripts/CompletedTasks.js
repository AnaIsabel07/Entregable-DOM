// CompletedTasks.js
list.addEventListener('click', (event) => {
    if (event.target.nodeName == 'INPUT') {
        updateStats();
    } else if (event.target.nodeName == 'IMG') {
        deleteTask(event.target.parentNode.id);
    }
});

let updateStats = () => {
    let element = list.querySelectorAll('div');
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `Tareas pendientes: ${element.length} Completadas: ${checkbox.length}`;
};

let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
};

