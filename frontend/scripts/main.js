// DBTow Daily Task Manager 

//[Last Updated October 1st]
console.log('main.js is running');

import Header from "./components/header.js";

class App {
    constructor() {
        this.header = new Header('app-header');
    }

    init() {
        this.header.render();
    }
}

// Create and initialize the app
const app = new App();
app.init();