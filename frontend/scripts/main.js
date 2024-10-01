// DBTow Daily Task Manager 

//[Last Updated October 1st]

// Log a message to the console to confirm that the script is running
console.log('main.js is running');

import Header from "./components/header.js";
import TaskList from "./components/taskList.js";

// Define the main app class that manages the application
class App {
    // Constructor is called when a new instance of App is created
    constructor() {
        // Create a new header instance, linking it to the HTML element with that ID
        this.header = new Header('app-header');

        // Create a new TaskList instance, linking it to the HTML element with that ID
        this.taskList = new TaskList('task-list-container');

        // Initialize the ID counter for new task... this will ensure each task gets a unique id
        this.nextId = 1;
    }

    // Method to add a new task to the task list
    addTask(title) {
        // Create a new task object with a unique ID and the given title
        const newTask = {
            id: this.nextId++, // Increment nextId after assigning it
            title: title
        };

        // Add the new task to the TaskList instance
        this.taskList.addTask(newTask);
    }

    // Initialize the app by rendering the specified components
    init() {
        this.header.render();
        this.taskList.render();

    }
}



// Create a new instance of the App class
const app = new App();

// Initialize the app
app.init();