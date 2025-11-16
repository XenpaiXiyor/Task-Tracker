# [Task Tracker CLI](https://github.com/XenpaiXiyor/Task-Tracker)

A simple command-line interface (CLI) application to track and manage your tasks. Built with Node.js as a practice project for backend development.

## Features

- ✅ Add new tasks
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- ✔️ Mark tasks as done
- 🔄 Mark tasks as in-progress
- 📋 List all tasks or filter by status (todo, in-progress, done)
- 💾 Persistent storage using JSON file

## Installation

1. Clone this repository or download the project files
2. Navigate to the project directory
3. Make sure you have Node.js installed on your system
```bash
cd task-tracker
```

## Usage

### Add a Task
```bash
node index.js add "Buy groceries"
```

### Update a Task
```bash
node index.js update 1 "Buy groceries and cook dinner"
```

### Delete a Task
```bash
node index.js delete 1
```

### Mark Task as Done
```bash
node index.js mark-done 1
```

### Mark Task as In Progress
```bash
node index.js mark-in-progress 1
```

### List All Tasks
```bash
node index.js list
```

### List Tasks by Status
```bash
node index.js list done
node index.js list todo
node index.js list in-progress
```

## Project Structure
```
task-tracker/
│
├── index.js           # Main entry point, handles CLI commands
├── taskManager.js     # Core functionality (add, update, delete, etc.)
├── tasks.json         # Data storage (auto-generated)
├── package.json       # Project metadata
└── README.md          # Project documentation
```

## How It Works

1. **Command Parsing**: The app reads command-line arguments using `process.argv`
2. **Task Management**: All task operations are handled in `taskManager.js`
3. **Data Storage**: Tasks are stored in `tasks.json` file
4. **Task Properties**: Each task has:
   - `id`: Unique identifier
   - `description`: Task description
   - `status`: todo, in-progress, or done
   - `createdAt`: Timestamp when task was created
   - `updatedAt`: Timestamp when task was last modified

## Technologies Used

- **Node.js**: JavaScript runtime
- **File System (fs)**: For reading/writing JSON data
- **JSON**: Data storage format

## What I Learned

- Working with Node.js file system operations
- Parsing command-line arguments
- Array methods (find, filter, findIndex, forEach)
- JSON data manipulation
- Module exports and imports
- Error handling and input validation

## Future Improvements

- [ ] Add task priority levels
- [ ] Add due dates for tasks
- [ ] Add search functionality
- [ ] Add task categories/tags
- [ ] Improve ID management (reuse deleted IDs)
- [ ] Add colored output for better readability
- [ ] Add data backup/export feature

## Project Source

This project is based on the [roadmap.sh Task Tracker project](https://roadmap.sh/projects/task-tracker).

## Author

Rhythm Mittal

## License

This project is open source and available for educational purposes.
