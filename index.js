// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
       type: 'input',
       name: 'title',
       message: 'What is your projects name?',  
    },
    {
       type: 'intput',
       name: 'description',
       message: 'Write a short description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What do I install to set up  your project?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Instructions for use',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List Collaborators, if any'
    },
    {
        type: 'input',
        name: 'Features',
        message: 'List features here',
    },
    {
        type: 'input',
        name: 'How to Contribute',
        message: 'How does a user contribute to the repo',
    },
    {
        type: 'input',
        name: 'Tests',
        default: 'npm test',
    },

];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writefile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log(`File ${filename} created successfully!`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
