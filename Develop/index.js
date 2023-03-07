// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'what is the title of our project?',
    },

     {
        type: 'input',
        name: 'Description',
        message: 'Provide a brief description explaining what your project is and how it works.',
     },

     {
        type: 'input',
        name: "Installation",
        message: 'What are the steps required to install your project?',

     },

     {
        type: 'input',
        name: 'Usage',
        message: 'What is the intended usage for this prooject?',
     },

     {
        type: 'input',
        name: 'Credits',
        message: 'List all collaborators, as well as any third-party assets that require attribution.',
     },

     

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
