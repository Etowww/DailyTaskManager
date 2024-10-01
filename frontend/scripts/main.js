// DBTow Daily Task Manager 

//[Last Updated October 1st]
console.log('main.js is running');

import Header from "./components/header.js";
import TaskList from "./components/taskList.js";

class App {
    constructor() {
        this.header = new Header('app-header');
        this.taskList = new TaskList('task-list-container');
    }

    init() {
        this.header.render();
        this.taskList.render();
    }
}

// Create and initialize the app
const app = new App();
app.init();