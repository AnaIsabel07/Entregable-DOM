// addTask.js
const userInput = document.getElementById('userInput');
const input = document.querySelector('input[type="text"]');
const list = document.getElementById('list');
let IdCounter = 0;

userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(input.value.trim().length != 0){
        addTask();
    }
});

let addTask = ()=>{
    IdCounter++;
    let newValue = input.value;
    const newTask = `
        <div class="task-container" id="${IdCounter}">
            <label>
                <input type="checkbox"> 
                ${newValue}
            </label>
            <img src="./Imagenes/borrar.png" class="closeBtn">
        </div>
    `;
    list.innerHTML += newTask;
    input.value = '';
    updateStats();
}
