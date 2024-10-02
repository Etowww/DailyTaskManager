//DBTow Daily Task Manager

//[Last Updated October 1st]

export default class TaskForm {
    // The constructor takes a containerId to lcoate the DOM element and an onSubmit callback for handling form submission
    constructor(containerId, onSubmit) {
        this.container = document.getElementById(containerId);
        this.onSubmit = onSubmit;
    }

    // Method to render the form inside the DOM
    render() {
        const form = document.createElement('form');
        form.className = 'task-form';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter a new task';
        input.required = true;

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Add Task';

        form.appendChild(input);
        form.appendChild(submitButton);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const taskTitle = input.value.trim();
            if (taskTitle) {
                this.onSubmit(taskTitle);
                input.value = '';
            }
        });

        this.container.appendChild(form);
    }
}