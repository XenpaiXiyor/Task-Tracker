// functionalities
/*
  1. add
  2. update
  3. delete
  4. mark a task as in progress / done
  5. list all tasks that are done / not done / in progress
*/

console.log(process.argv);

//records the user command
let command = process.argv[2]?.toLowerCase();
// records the value like "Buy groceries"
let value = process.argv[3];


// add files needed to manage these functions
const { addTask, updateTask, deleteTask, markDone, markProgress, listTask } = require('./taskManager');


switch (command) {
  case 'add':
    addTask(value);
    break;

  case 'update':
    updateTask(value);
    break;

  case 'delete':
    deleteTask(value);
    break;

  case 'mark-done':
    markDone(value);
    break;

  case 'mark-in-progress':
    markProgress(value);
    break;

  case 'list':
    listTask(value);
    break;

  default:
    console.log("❌ Unknown command. Try 'add', 'update', 'delete', 'mark-done', 'mark-in-progress', or 'list'.");
}
