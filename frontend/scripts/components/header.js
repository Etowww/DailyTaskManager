// DBTow Daily Task Manager

export default class Header {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render() {
        const header = document.createElement('header');
        header.className = 'header';

        const title = document.createElement('h1');
        title.textContent = 'DBTow Daily Task Manager';

        header.appendChild(title);
        this.container.appendChild(header);
    }
}