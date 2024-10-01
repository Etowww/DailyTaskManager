//DBTow Daily Task Manager

//[Last Updated October 1st]

export default class TaskList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.tasks = [];
    }

    render() {
        this.container.innerHTML = '';
        const ul = document.createElement('ul');
        ul.className = 'task-list';
        this.container.appendChild(ul);
    }
}