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
// saves updated tasks/will be used inside other functions
function saveTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log("Tasks saved successfully!");
}
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

// Core functionalities

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
// delete tasks
function deleteTask(id) {
  let tasks = loadTasks();
  let deleteTaskIndex = tasks.findIndex((item) => item.id === Number(id));

  if (deleteTaskIndex > -1) {
    // only splice array when item is found
    tasks.splice(deleteTaskIndex, 1); // 2nd parameter means remove one item only
    console.log("Deleted Task Successfully");
  } else {
    console.log("Task not found");
  }
  saveTasks(tasks);
}
function markDone(id) {
  let tasks = loadTasks();
  let task = tasks.find((item) => item.id === Number(id));

  if (task) {
    task.status = "done";
    task.updatedAt = new Date();
    console.log(`Task #${task.id} completed successfully!`);
  } else {
    console.log("Task not found");
  }

  saveTasks(tasks);
}
function markProgress(id) {
  let tasks = loadTasks();
  let task = tasks.find((item) => item.id === Number(id));

  if (task) {
    task.status = "in-progress";
    task.updatedAt = new Date();
    console.log(`Task #${task.id} is in progress!`);
  } else {
    console.log("Task not found");
  }

  saveTasks(tasks);
}
function listTask(status) {
  let tasks = loadTasks();

  if (tasks.length === 0) {
    console.log("Tasks not found!!");
  }

  let filteredTasks;
  if (status === "done" || status === "todo" || status === "in-progress") {
    filteredTasks = tasks.filter((task) => task.status === status);
    console.log(`\n Tasks with status: ${status.toUpperCase()}`);
  } else {
    filteredTasks = tasks;
    console.log("\n All Tasks:");
  }

  if (filteredTasks.length === 0) {
    console.log(`No tasks found with status: ${status}`);
    return;
  }

  // Display tasks
  filteredTasks.forEach((task) => {
    const statusEmoji =
      task.status === "done"
        ? "✅"
        : task.status === "in-progress"
        ? "🔄"
        : "⏳";
    console.log(
      `${statusEmoji} [${task.id}] ${task.description} (${task.status})`
    );
  });
}

// Export List

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  markDone,
  markProgress,
  listTask,
};
