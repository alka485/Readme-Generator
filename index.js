console.log("Hello");
// TODO: Include packages needed for this application
 const inquirer = require('inquirer');

 //fs is a Node standard library package for reading and writing files
   const fs = require('fs');

//Generate HTML files
   const generatePage = require("./utils/generateMarkdown");
   

// TODO: Create an array of questions for user input
const questions = [
    
    {
    type : 'input',
    name : 'github_name',
    message : 'What is your Github username?'
    }
];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName ,data,(err) => {
     err ? console.error(err) : console.log('submitted');
    });
}

//const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
