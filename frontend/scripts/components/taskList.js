//DBTow Daily Task Manager

//[Last Updated October 1st]

// Exporting the TaskList class to make it available for import in other modules
export default class TaskList {
    // Constructor is called when a new instance of TaskList is created
    constructor(containerId) {
        // The containerId is used to find the DOM element where the task list will be rendered
        // 'this.container' stores the reference to the DOM element with the given containerId
        this.container = document.getElementById(containerId);

        // Initialize an empty array to hold the list of tasks
        this.tasks = [];
    }

    // Method to add a new task to the task list
    addTask(task) {
        // Push the new task (an object with a title property) into the tasks array
        this.tasks.push(task);

        // Call the render method to visually update the task list in the DOM
        this.render();
    }

    // Method to render the task list on the web page
    render() {
        // Clear the current content of the container element to avoid duplicating tasks
        this.container.innerHTML = '';

        // Create a new unordered list element to display the list of tasks
        const ul = document.createElement('ul');
        ul.className = 'task-list'; // Add a class name for styling purposes

        // Loop through each task in the tasks array and create a list item for each task 
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            ul.appendChild(li);
        });

        // Append the populated ul element to the container in the DOM
        this.container.appendChild(ul);
    }
}