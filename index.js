// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your app?",
  },
  {
    type: "input",
    name: "description",
    message: "Briefly describe your app",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your app?",
  },
  {
    type: "input",
    name: "usage",
    message: "How will users make use of your app?",
  },
  {
    type: "input",
    name: "photo",
    message: "Please provide a link to an image of your deployed site:",
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a link to your deployed site:",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your app fall under",
    choices: ["MIT", "Apache", "Artistic", "Eclipse", "Academic Free", "No License"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What should a user know when contibuting to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests did you create to prove your apps functionality?",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your github username",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email",
  }
];

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function that writes README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Function call to initialize app
init();
