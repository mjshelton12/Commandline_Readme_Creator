x=0

// Packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// Array of questions for user input
const questions = [
    {type: 'input', name: 'Title', message: 'What is the name of your app?'},
    {type: 'input', name: 'Description', message: 'Briefly describe your app'},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function to initialize app
function init() {
    questions.forEach(question =>
        inquirer
            .prompt([
                question
            ])
            .then((data) => {
                console.log(data)
            })
    )
}

// Function call to initialize app
init();
