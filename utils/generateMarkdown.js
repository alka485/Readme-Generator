// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(data.license === "MIT"){
    return "[![License: MIT]";
    //(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title} 
           ## License :
           [![License]" (https://img.shields.io/badge/${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})"
           ## Table of Contents
           - [Description] (#descr)
           - [Installation] (#installation)
           - [Usage] (#usage)
           - [Contribution] (#contribute)
           - [Testing] (#test)
           - [Additional Info] (#additional info)

           ## Description
           ${data.descr}
`;
}

module.exports = generateMarkdown;
