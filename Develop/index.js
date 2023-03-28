// Packages needed to run Readme Generator
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of you project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description explaining what your project is and how it works.',
    },
    {
        type: 'input',
        name: "installation",
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
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub Username.',
    },

];
function writeReadMeFile(fileName, answerArray) {
    console.log(answerArray);

    fs.writeFile(`${fileName}.md`, answerArray, (err) => {
                if (err) throw err;
                console.log("Saved!");
            });
}

// function writeReadMeFile(fileName, answerArray)
// // console.log(answersArray);
//     fs.writeFile(`${fileName}.md`, answerArray, (err) => {
//         if (err) throw err;
//         console.log('ReadMe Saved!');
//     });

    // // TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers);
            const answerArray = generateMarkdown(answers);
            const fileName = answers.title;
            writeReadMeFile(fileName, answerArray);

        })
    };


// // Function call to initialize app
init();
