//console.log("Hello");
// TODO: Include packages needed for this application
 const inquirer = require('inquirer');
 inquirer.registerPrompt('search-list', require('inquirer-search-list'));
 


 //fs is a Node standard library package for reading and writing files
   const fs = require('fs');

//Generate HTML files
const generatePage = require("./utils/generateMarkdown");
const choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');

console.log ("Welcome to my Readme generator");
console.log ("Please answer below question to generate a high quality of README for your project");
   

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
    message :'What is your email address?'
    },
    
    // 3rd question
    {
        type : 'input',
        name : 'title',
        message : 'What is your project title?'
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
        choices : ['MIT','Apache','GPL','Academic','GNU','Mozilla','Open','ISC']
        },

    //6th question   
    {
        type : 'input',
        name : 'test',
        message : 'Please ,enter any testing protocols you used for your project?'
        },

 
    //7th question
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    
    //8th question
    {
        ype: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contribute'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName ,data,(err) => {
     err ? console.error(err) : console.log('Success! Now you can view your README file');
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function(userInput){
        console.log(userInput);
        writeToFile("./output/README.md" , generateMarkdown(userInput));
    })

}

// Function call to initialize app
init();
