// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github', // Changed to lowercase 'github'
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project\'s name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What do I install to set up your project?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Instructions for use',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List Collaborators, if any',
  },
  {
    type: 'input',
    name: 'features',
    message: 'List features here',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How does a user contribute to the repo',
  },
  {
    type: 'input',
    name: 'tests',
    default: 'npm test',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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
    writeToFile('README.md', generateMarkDown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
