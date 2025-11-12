const fs = require("fs"); // fs = filesystem
const filePath = "./tasks.json";

// Helper functions

// ensures file exists and returns current tasks
function loadTasks() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf8");
    console.log("File Created!");
    return []; // start with an empty array
  } else {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const tasks = JSON.parse(data);
      return tasks; // return the parsed array
    } catch (err) {
      console.error("Error reading tasks:", err);
      return [];
    }
  }
}
// saves updated tasks
function saveTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks));
  console.log("Tasks saved successfully!");
}


// Core functionalities

// reusable fnc template to add tasks.
function createTask(description, id) {
  return {
    id,
    description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
// add task
function addTask(value) {
  let tasks = loadTasks();
  const newTask = createTask(value, tasks.length + 1);
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`Task added successfully (Id: ${newTask.id}\nDescription: ${newTask.description})`);
}
// function updateTask(id, newDescription) { ... }
// function deleteTask(id) { ... }
// function markDone(id) { ... }
// function markProgress(id) { ... }
// function listTask(status) { ... }

// Export List

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  markDone,
  markProgress,
  listTask,
};
