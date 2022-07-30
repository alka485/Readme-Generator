//console.log("Hello");
// TODO: Include packages needed for this application
 const inquirer = require('inquirer');
 inquirer.registerPrompt('search-list', require('inquirer-search-list'));
 


 //fs is a Node standard library package for reading and writing files
   const fs = require('fs');

//Generate HTML files
   const generatePage = require("./utils/generateMarkdown");
const Choices = require('inquirer/lib/objects/choices');
   

// TODO: Create an array of questions for user input
const questions = [
    
    {
        //1st question
    type : 'input',
    name : 'github_name',
    message : 'What is your Github username?'
    },

    //2nd question

    {
    type : 'input',
    name : 'email_address',
    message : 'What is your email address?'
    },
    
    // 3rd question
    {
        type : 'input',
        name : 'project_name',
        message : 'What is your project name?'
        },

    //4th question   
    {
        type : 'input',
        name : 'descr',
        message : 'Please write description of project?'
        },

    // 5th question
    {
        type : 'search-list',
        name : 'license',
        message : 'What kind of license should your project have?',
        choices : ['MIT','Apache','GPL'],
        },

    //6th question   
    {
        type : 'input',
        name : 'descr',
        message : 'What command should be run to run tests?'
        }

 
];

//console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName ,data,(err) => {
     err ? console.error(err) : console.log('submitted');
    });
}

//const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);

}

// Function call to initialize app
init();
