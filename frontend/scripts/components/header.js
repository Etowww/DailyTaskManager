// DBTow Daily Task Manager

export function createHeader() {
    // Create the initial header element
    const header = document.createElement('header');
    header.className = 'header';

    // Create the initial h1 element and it's text content
    const title = document.createElement('h1');
    title.textContent = 'DBTow Daily Task Manager';
    
    // Append the h1 to the header element
    header.appendChild(title);

    return header;
}