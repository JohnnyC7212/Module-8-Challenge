// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'Github',
        message: 'What is your GitHub username?'
    },
    {
       type: 'input',
       name: 'Title',
       message: 'What is your projects name?',  
    },
    {
       type: 'intput',
       name: 'Description',
       message: 'Write a short description',
    },
    {
        type: 'input',
        name: 'Installation',
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
        name: 'Contribute',
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
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Making README...');
        writeToFile('README.md', generateMarkDown({...inquirerResponses }));
    });
}

// Function call to initialize app
init();
