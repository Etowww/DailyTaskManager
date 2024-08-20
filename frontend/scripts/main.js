// DBTow Daily Task Manager

// Updated Monday August 19th [4:40pm]
console.log('main.js is running');

import { createHeader } from "./components/header.js";

const app = document.getElementById('app');

const header = createHeader();
document.body.insertBefore(header, app);
