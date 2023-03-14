// Global variables & packages
const inquirer = require('inquirer');
const fs = require('fs');



// createMarkdown const created to organize README file and add user answers to correct sections.
const createMarkdown = ({Title, Description, Installation, Usage, Credits, License}) =>
    `
# ${Title}

## Description

${Description}

### Installation 

${Installation}

### Usage

${Usage}

### Credits

${Credits}

### License

${License}`;

// Inquirer prompted user questions to gather input data
inquirer
.prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of you project?',
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
        name: 'usage',
        message: 'What is the intended usage for this project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List all collaborators, as well as any third-party assets that require attribution.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause', 'Eclipse Public License 2.0'],
    },

])
// Write file function using the createMarkdown format and user generated answers.
.then((answers) => {
    const markdownContent = createMarkdown(answers);

    fs.writeFile('README.md', markdownContent, (err) =>
    console.log('Successfully created ReadMe file!')
    );
});



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {

// }



// // Function call to initialize app
// init();
