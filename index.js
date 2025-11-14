// functionalities
/*
      1. add
      2. update
      3. delete
      4. mark a task as in progress / done
      5. list all tasks that are done / not done / in progress
*/

  

//records the user command
let command = process.argv[2]?.toLowerCase();
let arg1 = process.argv[3];
let arg2 = process.argv[4];

// add files needed to manage these functions
const {
  addTask,
  updateTask,
  deleteTask,
  markDone,
  markProgress,
  listTask,
} = require("./taskManager");

switch (command) {
  case "add":
    addTask(arg1);
    break;

  case "update":
    updateTask(arg1, arg2);
    break;

  case "delete":
    deleteTask(arg1);
    break;

  case "mark-done":
    markDone(arg1);
    break;

  case "mark-in-progress":
    markProgress(arg1);
    break;

  case "list":
    listTask(arg1);
    break;

  default:
    console.log(
      "❌ Unknown command. Try 'add', 'update', 'delete', 'mark-done', 'mark-in-progress', or 'list'."
    );
}
