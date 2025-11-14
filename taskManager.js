const fs = require("fs"); // fs = filesystem
const filePath = "./tasks.json";

// Helper functions

// ensures file exists and returns current tasks
function loadTasks() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath,"[]", "utf8");
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
// saves updated tasks/will be used inside other functions
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
  console.log(
    `Task added successfully (Id: ${newTask.id}\nDescription: ${newTask.description})`
  );
}
// update tasks
function updateTask(id, newDescription) {
  let tasks = loadTasks();
  let task = tasks.find((item) => item.id === Number(id));

  if (task) {
    task.description = newDescription;
    task.updatedAt = new Date();
    console.log(`Task #${task.id} updated successfully!`);
  } else {
    console.log("Task not found");
  }
  saveTasks(tasks);
}
function deleteTask(id) {
  let tasks = loadTasks();
  let deleteTaskIndex = tasks.findIndex((item) => item.id === Number(id));

  if (deleteTaskIndex > -1) { // only splice array when item is found
    tasks.splice(deleteTaskIndex, 1); // 2nd parameter means remove one item only
    console.log("Deleted Task Successfully");
  }
  else {
    console.log("Task not found");
  }
  saveTasks(tasks);
}
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
