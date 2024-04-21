// Importa todos los archivos JavaScript necesarios
import { addTaskSection } from 'Scripts/AddTask.js';
import { pendingTasksSection } from 'Scripts/PendingTasks.js';
import { completedTasksSection } from 'Scripts/CompletedTasks.js';

// Llama a las funciones de inicialización
addTaskSection();
pendingTasksSection();
completedTasksSection();
