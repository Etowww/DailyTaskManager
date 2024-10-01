//DBTow Daily Task Manager

//[Last updated October 1st]

export default class TaskItem {
    // Constructor to initialize a task item object with a task and a delete callback
    constructor(task, onDelete) {
        // Store the task object passed in
        this.task = task;

        // Store the delete callback function passed in
        this.onDelete = onDelete;
    }

    // Method to render the task item as an HTML list item
    render() {
        const li = document.createElement('li');
        li.className = 'task-item';

        const titleSpan = document.createElement('span');
        titleSpan.textContent = this.task.title;
        li.appendChild(titleSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => this.onDelete(this.task.id));
        li.appendChild(deleteButton);

        return li;
    }
}